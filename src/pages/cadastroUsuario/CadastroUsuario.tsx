import React, {ChangeEvent, useEffect, useState} from 'react'
import { Button, Divider, Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Usuario  from '../../models/User'
import { cadastroUsuario } from '../../services/Service'
import './CadastroUsuario.css'

function CadastroUsuario(){
    const history = useNavigate()

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })
    
    const [usuarioResult, setUsuarioResult] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    const [confirmarSenha, setConfirmarSenha] = useState<String>('')

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(event.target.value)
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
        ...usuario,
        [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault()
        if(confirmarSenha === usuario.senha) {
            try {
                await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
                alert('Usuário cadastrado com sucesso')
            } catch (error) {
                console.log(error)
                alert('Por favor, verifique os campos')
            }
        } else {
            alert('As senhas não coincidem')
            setConfirmarSenha('')
            setUsuario({
                ...usuario,
                senha: ''
            })
        }
    }

    useEffect(() => {
        console.log('rodou')
    }, [usuario.nome])

    useEffect(() => {
        if(usuarioResult.id !== 0) {
            history('/login')
            console.log(usuarioResult)
        }
    }, [usuarioResult])

    function back() {
        history('/login')
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagemCadastro'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit} className="cadastro-form">
                        <Typography
                          variant='h3'
                          gutterBottom
                          color='textPrimary'
                          component='h3'
                          align='center'
                          className='textosCadastrar'>Cadastrar
                        </Typography>
                        <TextField
                            value={usuario.nome}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            updateModel(event)}
                          id='nome'
                          label='nome'
                          variant='outlined'
                          name='nome'
                          margin='normal'
                          required
                          fullWidth/>

                        <TextField
                            value={usuario.usuario}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                updateModel(event)
                            }
                          id='usuario'
                          label='usuário'
                          variant='outlined'
                          name='usuario'
                          margin='normal'
                          required
                          type='email'
                          fullWidth/>

                        <TextField
                            value={usuario.foto}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                updateModel(event)
                            }
                          id='foto'
                          label='Foto (URL)'
                          variant='outlined'
                          name='foto'
                          margin='normal'
                          fullWidth/>  

                        <TextField
                        value={usuario.senha}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            updateModel(event)
                        }
                          id='senha'
                          label='senha'
                          variant='outlined'
                          name='senha'
                          margin='normal'
                          required
                          type='password'
                          fullWidth />

                        <TextField
                            value={confirmarSenha}
                            onChange={confirmarSenhaHandle}
                          id='confirmarSenha'
                          label='confirmar senha'
                          variant='outlined'
                          name='confirmarSenha'
                          margin='normal'
                          required
                          type='password'
                          fullWidth />


                        <Button style={{marginTop: '10px'} }
                          type='submit'
                          variant='contained'
                          color='primary'
                          fullWidth
                          className='btnCadastrar'
                          >Cadastrar
                        </Button>

                        <Divider className='divider' />

                        <Link to='/login' className='link'>
                            <Button style={{marginTop: '10px'} }
                              variant='contained'
                              color='primary'
                              fullWidth
                              className='btnCadastrar'
                              onClick={back}
                              >Voltar
                            </Button>
                        </Link>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario


