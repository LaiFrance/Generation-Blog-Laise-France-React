import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Select } from '@material-ui/core';
import {Box} from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
        navigate("/login")
    }
  }, [token])


  async function getTema(){
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.nome}
            </Typography>
            <Typography color="textSecondary">
              {tema.descricao}
            </Typography>
            <Typography variant="body2" component="p">
              {tema.postagens.map((postagem: { titulo: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <Typography color="textSecondary" gutterBottom>
                  {postagem.titulo}
                </Typography>
              ))}
              {
                tema.postagens.length == 0 &&
                <Typography color="textSecondary" gutterBottom>
                  Não há postagens
                </Typography>
              }
              {
          
            <Select native defaultValue="0" id="grouped-native-select">
              <option aria-label="None" value="" />
              <optgroup label="Group 1">
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option value={3}>Option 3</option>
                <option value={4}>Option 4</option>
              </optgroup>


            </Select>
              }
            
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;