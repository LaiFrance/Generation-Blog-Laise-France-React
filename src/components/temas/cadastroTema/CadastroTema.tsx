import React, { ChangeEvent, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../models/Tema";
import {
  post,
  put,
  getById,
} from "../../../services/Service";

function CadastroTema() {
  const { id } = useParams<{ id: string }>();
  const history = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
      //descricao: event.target.value
    });
  }

  useEffect(() => {
    if (token === "") {
      alert("sem token");
      history("/login");
    }
  }, [token]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("tema" + JSON.stringify(tema));

    if (id !== undefined) {
      console.log(tema);
      await put('/temas', tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema atualizado");
      history('/home')
    } else {
      try {
        await post("/temas", tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        alert("Tema cadastrado");
        history('/home')
      } catch (error) {
        alert("Erro");
      }
    }
  }

  // useEffect(() => {
  //   if (tema.id !== 0) {
  //     history("/temas");
  //   }
  // }, [tema.id]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    getById(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  return (
    <>
      <h2>{tema.id!==0? 'Editar tema' : 'Cadastrar tema'}</h2>
      <form onSubmit={onSubmit}>
        <TextField
          label="Descrição do tema"
          name="descricao"
          value={tema.descricao}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateModel(event)
          }
          required
        />
        <Button type="submit" variant="contained">
          {/* // if ternario */}
          {tema.id !== 0 ? 'Editar' : 'Cadastrar'}
        </Button>
      </form>
    </>
  );
}

export default CadastroTema;