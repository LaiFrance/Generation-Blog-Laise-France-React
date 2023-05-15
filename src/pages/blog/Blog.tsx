import React from 'react';

export default function Blog() {
  
  const criarPostagem = () => {
    console.log('Criar postagem');
    alert('Criar postagem');
  }

  

  return (
    <div className="p-5">
      <div className="bg-light p-5 mb-5">
        <h1>Blog</h1>
        <p>Blog description</p>
        <hr />
        <h2>Postagens</h2>
        <p>Postagens description</p>
        <hr />
        <h2>Criar postagem</h2>
        <p>Criar postagem description</p>
        <button onClick={criarPostagem}>Criar postagem</button>
        <hr />
        <h2>Editar postagem</h2>
        <p>Editar postagem description</p>
        <button onClick={criarPostagem}>Editar postagem</button>
        <hr />
        <h2>Deletar postagem</h2>
        <p>Deletar postagem description</p>
        <hr />
        <h2>Comentar postagem</h2>
        <p>Comentar postagem description</p>
        <hr />
        <h2>Deletar comentário</h2>
        <p>Deletar comentário description</p>
        <hr />
        <h2>Editar comentário</h2>
        <p>Editar comentário description</p>
        <hr />
        <h2>Visualizar comentários</h2>
        <p>Visualizar comentários description</p>
        <hr />
        <h2>Visualizar postagem</h2>
        <p>Visualizar postagem description</p>
        <hr />
        <h2>Visualizar postagens por tema</h2>
        <p>Visualizar postagens por tema description</p>
        <hr />
        <h2>Visualizar postagens por usuário</h2>
        <p>Visualizar postagens por usuário description</p>
        <hr />
        <h2>Visualizar postagens por data</h2>
        <p>Visualizar postagens por data description</p>
        <hr />

      </div>
    </div>
  );
}

