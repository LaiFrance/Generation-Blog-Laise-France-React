import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Login from './pages/login/Login';
import { Switch } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
});

function App() {
  const classes = useStyles();
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className={classes.root}>
        <Navbar />

        <Switch>
        <div className="App">
          <h1>Contador: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Adicionar</button>
          <button onClick={() => setCount(count - 1)}>Remover</button>
          <button onClick={() => setCount(0)}>Zerar</button>
          <button onClick={() => setCount(count + 10)}>Adicionar 10</button>
          <button onClick={() => setCount(count - 10)}>Remover 10</button>
          <button onClick={() => setCount(count + 100)}>Adicionar 100</button>
          <button onClick={() => setCount(count - 100)}>Remover 100</button>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/login" Component={Login} />

          {/* <Route path="/postagens" exact component={Postagens} />
          <Route path="/tema" exact component={Tema} />
          <Route path="/cadastrar" exact component={Cadastrar} />
          <Route path="/login" Component={Login} />
          <Route path="/cadastrar" Component={Cadastrar} />
          <Route path="/postagens/:id" Component={Postagem} />
          <Route path="/tema/:id" Component={Tema} />
          <Route path="/cadastrar" Component={Cadastrar} />
          <Route path="/login" Component={Login} />
          <Route path="/cadastrar" Component={Cadastrar} />
          <Route path="/postagens/:id" Component={Postagem} />
          <Route path="/tema/:id" Component={Tema} />
          <Route path="/cadastrar" Component={Cadastrar} />
          <Route path="*" Component={NotFound} /> */}
        </div>
        </Switch>
        <Footer />
      </div>
    </Router>


  )
}

export default App