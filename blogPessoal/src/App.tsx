import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

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
         <div>
          <Route path="/" Component={Home} />
          <Route path="/home" exact component={Home} />
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

        </Switch>
        <Footer />
      </div>
    </Router>


  )
}

export default App