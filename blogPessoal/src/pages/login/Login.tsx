
import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { FormGroup } from '@material-ui/core'
import { FormLabel } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Paper } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
   background: {
         backgroundColor: '#f5f5f5',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                height: '100%',
                padding: '5px'
            }
    },
    dark: {
        backgroundColor: '#333',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            padding: '5px'
        }
    },
    form: {
        width: '50%',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '5px'
        }
    },
    form__group: {
        margin: '10px 0',
        '& label': {
            display: 'block',
            marginBottom: '5px'
        },
        '& input': {
            width: '100%',
            padding: '10px',
            border: '1px solid #333',
            borderRadius: '5px',
            outline: 'none'
        }
    },
    form__group__checkbox: {
        margin: '10px 0',
        '& label': {
            marginLeft: '10px'
        }
    },
    form__group__btn: {
        margin: '10px 0',
        '& button': {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
            cursor: 'pointer',
            marginRight: '10px'
        }
    },
    btn: {
        backgroundColor: '#333',
        color: '#fff'
    },
    btn2: {
        backgroundColor: '#fff',
        color: '#333'
    },
    form__footer: {
        marginTop: '10px',
        '& a': {
            color: '#fff'
        }
    }
}))


   

function Login() {
    const classes = useStyles()

    return (
        <Box className={classes.dark}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.form}
                        component="form"
                        boxShadow={3}
                    >
                        <Typography variant="h5" component="h5">
                            Login
                        </Typography>
                        <Link>
                        <Typography variant="h5" component="h5" className={classes.form__footer} >
                            Logout 
                        </Typography>
                        </Link>

                        <Box className={classes.form__group}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className={classes.input} />
                        </Box>
                        <Box className={classes.form__group}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className={classes.input} />
                        </Box>
                        <Box className={classes.form__group__checkbox}>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </Box>
                        <Box className={classes.form__group__btn}>
                            <button className={classes.btn}>Login</button>
                            <button className={classes.btn2}>Register</button>
                        </Box>
                        <Box className={classes.form__footer}>
                            <a href="#">Forgot password</a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login