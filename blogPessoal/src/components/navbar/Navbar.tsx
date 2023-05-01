import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" onClick={() => window.location.href = "/home"}>
                                Home 

                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" onClick={() => window.location.href = "/postagens"}>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" onClick={() => window.location.href = "/tema"}>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" onClick={() => window.location.href = "/cadastro"}>
                                cadastrar 
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        Login
                                    </Typography>
                                    
                                </Box>                            
                            </Link>
                            

                         </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
        
    );
}

export default Navbar;