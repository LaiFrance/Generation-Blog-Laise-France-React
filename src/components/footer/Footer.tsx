import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
});

function Footer() {
  const classes = useStyles();

  return (
      <Grid>
        <Grid>
          <div style={{ backgroundColor: "#3F51B5", height: "200px", width: "100%" }}>
            <Box>
              <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/generationbrasil\" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
              </a>
            </Box>
          </div>
          <div style={{ backgroundColor: "#303F9F", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }}>© 2020 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
              </a>
            </Box>
            </div>
        </Grid>
        </Grid>
    );
}

export default Footer;
