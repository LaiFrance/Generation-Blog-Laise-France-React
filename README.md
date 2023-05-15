# Generation-Blog-Laise-France-React
<h1 align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Logo React" width="120"><br><br>
    Blog Pessoal React
</h1>

<div>
    <p align="center">
<a>
    <img src="https://img.shields.io/static/v1?label=Library&message=React&color=aquamarine&style=for-the-badge&logo=React" alt="Language: React">
</a>
    <a href="#">
        <img src="https://img.shields.io/static/v1?label=Language&message=Typescript&color=blue&style=for-the-badge&logo=Typescript" alt="Language: Typescript">
    </a>
    </p>
</div>

# Blog Pessoal 

Este projeto foi criado com o objetivo de criar um blog pessoal para compartilhar minhas ideias e conhecimentos sobre programação, além de compartilhar meus projetos e um pouco sobre mim.

## Começando

Estas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

O que você precisa para instalar o software e como instalá-lo

```
Node.js
React
Typescript
Material UI
React-Router-DOM
Axios
Java
Spring Boot
Spring Security
Spring Data JPA
Spring Mail
Spring Validation
MySQL
Render.com
```

## 📕Instalação

### Criando/Instalando o React
```
npm install -g create-react-app
```

```
npx create-react-app blog-pessoal --template typescript 
```
---
### Instalação do Material UI
```
yarn add @material-ui/core@4.12.3
```
```
yarn add @material-ui/icons@4.11.2
```
```
yarn add @mui/icons-material@5.0.5
```
```
yarn add @material-ui/lab@4.0.0-alpha.60
```
```
yarn add @emotion/react@11.5.0
```
```
yarn add @emotion/styled@11.3.0
```
```
yarn add @mui/material@5.0.6
```
---
### Instalação da React Router Dom
```
yarn add react-router-dom@6
```
---
### Instalação do Axios
```
yarn add axios@0.21.4
```
---
### Instalação do useLocalStorage
```
yarn add react-use-localstorage@3.5.3
```
---
### Instalação do Redux
```
yarn add @types/redux@3.6.0 react-redux@7.2.5
```
---
### Instalação da React-toastify
```
yarn add react-toastify@8.0.3
```

## Desenvolvimento

Explique como iniciar o desenvolvimento do projeto

```
Passo 1: Crie uma conta no Render.com
Passo 2: Faça o clone do repositório
Passo 3: Crie o projeto no Render.com
Passo 4: Crie o banco de dados MySQL
Passo 5: Configure o banco de dados no projeto
Passo 6: Inicie o desenvolvimento do projeto
```

## Construído com

* [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
* [React](https://reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário
* [Typescript](https://www.typescriptlang.org/) - Linguagem de Programação
* [Material-UI](https://material-ui.com/) - Biblioteca de Componentes React
* [React-Router-DOM](https://reacttraining.com/react-router/web/guides/quick-start) - Roteamento para React
* [Axios](https://github.com/axios/axios) - Cliente HTTP baseado em Promises para o navegador e node.js
* [Java](https://www.java.com/pt_BR/) - Linguagem de Programação
* [Spring Boot](https://spring.io/projects/spring-boot) - Framework Java
* [Spring Security](https://spring.io/projects/spring-security) - Framework de Segurança Java
* [Spring Data JPA](https://spring.io/projects/spring-data-jpa) - Biblioteca de Acesso a Dados Java
* [Spring Mail](https://spring.io/projects/spring-mail) - Biblioteca de Envio de Emails Java
* [Spring Validation](https://spring.io/projects/spring-validation) - Framework de Validação Java
* [MySQL](https://www.mysql.com/) - Banco de Dados Relacional
* [Render.com](https://render.com/) - Plataforma de Deploy



## Rotas

| Método | Rota      | Descrição                                                                                                                                                     |
|--------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | /home     | Rota inicial do blog, mostra os artigos recentes, categorias e usuário cadastrados                                                                              |
| POST   | /login    | Rota para realizar o login de um usuário                                                                                                                       |
| POST   | /cadastro | Rota para realizar o cadastro de um usuário                                                                                                                    |
| GET    | /usuario     | Rota para mostrar as informações do usuário logado, os artigos postados, os temas criados e os comentarios realizados                                          |
| POST   | /article  | Rota para realizar o post de um artigo                                                                                                                        |
| PUT    | /article  | Rota para editar um artigo                                                                                                                                    |
| DELETE | /article  | Rota para excluir um artigo                                                                                                                                    |
| POST   | /comment  | Rota para realizar o post de um comentario                                                                                                                    |
| PUT    | /comment  | Rota para editar um comentario                                                                                                                                 |
| DELETE | /comment  | Rota para excluir um comentario                       
