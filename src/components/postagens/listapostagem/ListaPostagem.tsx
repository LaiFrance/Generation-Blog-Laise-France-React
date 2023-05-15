import React, { useState, useEffect } from "react";
import "./ListaPostagem.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import  Postagem  from "../../../models/Postagem";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import { getAll } from "../../../services/Service";
import  useLocalStorage  from 'react-use-localstorage';

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const history = useNavigate()

  async function getAllPostagens() {
    await getAll("/postagens", setPostagens, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect( () => {
    getAllPostagens()
  }, [])

  useEffect(() => {
    if(token === ''){
      alert('Sem token')
      history('/login')
    }
  }, [])

  return (
    <>
      {postagens.map((postagem) => (
        <Box m={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {postagem.titulo}
              </Typography>
              <Typography variant="h5" component="h2">
                {postagem.texto}
              </Typography>
              <Typography variant="body1" component="p">
                {postagem.tema?.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/atualizarPostagem/${postagem.id}`}>
                <Button color="primary" variant="contained" size="small">
                  Atualizar
                </Button>
              </Link>
              
              <Link to={`/deletarPostagem/${postagem.id}`}>
                <Button color="secondary" variant="contained" size="small">
                  Deletar
                </Button>
              </Link>
              
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;