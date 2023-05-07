import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Select from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import axios from 'axios'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        BlogPessoal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      {'Desenvolvido por '}
      <Link color="inherit" href="https://material-ui.com/">
        Laise Farias France
      </Link>{' '}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      //pegar valore do select
      tipo: data.get('tipo')?.toString(),
      email: data.get('email'),
      password: data.get('password'),
      repetirSenha: data.get('repetirSenha'),
      remember: data.get('remember'),
    })
  }

  const [tipo, setTipo] = React.useState('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTipo(event.target.value as string)
  }

  const [email, setEmail] = React.useState('')
  const handleEmail = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEmail(event.target.value as string)
  }

  const [senha, setSenha] = React.useState('')
  const handleSenha = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSenha(event.target.value as string)
  }

  const [repetirSenha, setRepetirSenha] = React.useState('')
  const handleRepetirSenha = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setRepetirSenha(event.target.value as string)
  }

  const [remember, setRemember] = React.useState(false)
  const handleRemember = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(event.target.checked)
  }

  const useLocalStorage = (key: string, initialValue: string) => {
    const [storedValue, setStoredValue] = React.useState(() => {
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        console.log(error)
        return initialValue
      }
    })

  axios.post("http://localhost:8080/usuario/logar", {
    email: email, 
    senha: senha
  }).then((response) => {


      localStorage.setItem("token", response.data.token)
      localStorage.setItem("id", response.data.id)
      localStorage.setItem("nome", response.data.nome)
      localStorage.setItem("tipo", response.data.tipo)
      localStorage.setItem("email", response.data.email)
      localStorage.setItem("foto", response.data.foto)
      localStorage.setItem("descricao", response.data.descricao)
      localStorage.setItem("senha", response.data.senha)
      localStorage.setItem("postagem", response.data.postagem)
      localStorage.setItem("tema", response.data.tema)
      
      console.log(response.data)

      if (response.data.tipo === "ADMIN") {
        window.location.href = "/admin"
      } else {
        window.location.href = "/feed"
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.ibb.co/MVqvsdJ/collage.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'max-width',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon /> 
            </Avatar>

            <Typography component="h1" variant="h5">
              
            Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Select 
                placeholder="Tipo"
                type='select'
                required
                fullWidth
                id="tipo"
                label="Tipo"
                name="tipo"
                autoComplete="tipo"
                autoFocus
              >
                <MenuItem value={1}>Administrador</MenuItem>
                <MenuItem value={2}>Usuário</MenuItem>
              </Select>


              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField 
                margin="normal"
                required
                fullWidth
                name="repetirSenha"
                label="Repetir Senha"
                type="password"
                id="repetirSenha"
                autoComplete="current-password"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                
                Login
              </Button>
              <Grid container component="main">
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/cadastrar" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

