import React, { useState, useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import imagehome from './home.png';

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
          <Box className={classes.btnContainer}>
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" className={classes.btn}>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <img src={imagehome} alt="imagem home" className={classes.image} />
        </Grid>
      </Grid>
      <hr style={{backgroundColor: 'white'}} />
    </div>
  );
}

export default Home;
