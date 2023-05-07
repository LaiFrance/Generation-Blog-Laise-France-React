import React, { useState, useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import imagehome from './home.png';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
    },
  },
  welcomeMsg: {
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(20),
      paddingTop: theme.spacing(20),
    },
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(20),
    },
  },
  btn: {
    borderColor: 'white',
    backgroundColor: '#3F51B5',
    color: 'white',
  },
  btn2: {
    borderColor: 'white',
    backgroundColor: '#3F51B5',
    color: 'white',
    marginLeft: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();
  const [text, setText] = useState('');
  const message = 'Seja bem vindo(a)!';


  useEffect(() => {
    let i = 0;
    const typeSpeed = 75;
    const interval = setInterval(() => {
      if (i < message.length) {
        setText(text => text + message.charAt(i));
      } else {
        clearInterval(interval);
      }
      i++;
    }, typeSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" >
        <Grid item xs={12} md={6} style={{ backgroundColor: '#3F51B5' }}>
          <Box className={classes.welcomeMsg}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>
              {text}
            </Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button
              variant="outlined"
              style={{
                borderColor: 'white',
                backgroundColor: 'var(--blue-600)',
                color: 'white',
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src= {imagehome }
            alt=""
            width={800}
            height={700}
            className='fotoHome'
            
          />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: 'white' }}>
         <TabPostagem />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
