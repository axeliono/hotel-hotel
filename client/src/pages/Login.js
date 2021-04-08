<<<<<<< HEAD
import React, { ReactElement, Fragment, useState} from 'react'
import Banner from '../components/Banner/index'
import './style.css'
import styled from 'styled-components';
=======
import React from "react";
import "./style.css";
>>>>>>> f50b9c5fe770b8bdc64ae57e09b8f062b5cb5793

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Nav from "../components/Nav";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Hotel Hotel
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
<<<<<<< HEAD
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#F21'
=======
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
>>>>>>> f50b9c5fe770b8bdc64ae57e09b8f062b5cb5793
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    color:'#F21'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#F21'
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Nav />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="">
          Log In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="#F21" />}
            label="Keep me signed in"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#F21"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="" style={{color:"#F21"}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="" style={{color:"#F21"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
