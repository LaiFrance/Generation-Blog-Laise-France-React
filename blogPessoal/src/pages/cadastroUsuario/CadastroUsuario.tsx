import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

type Props = {
  username: string,
  setUsername: (username: string) => void,
};

function CadastroUsuario() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <>
      <div>CadastroUsuario</div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1>Cadastro de Usuário</h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="nome"
                  label="Nome"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="cpf"
                  label="CPF"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="telefone"
                  label="Telefone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="senha"
                  label="Senha"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmarSenha"
                  label="Confirmar Senha"
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" href="/login">
                Cancelar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroUsuario;
