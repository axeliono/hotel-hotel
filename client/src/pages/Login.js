<<<<<<< HEAD
import React, { ReactElement, Fragment, useState} from 'react'
import Banner from '../components/Banner/index'
import './style.css'
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

=======
import React, { ReactElement, Fragment, useState } from "react";
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
import { LOGIN } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { useSelector } from "react-redux";
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Hotel Hotel
      </Link>{' '}
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
    color: '#ca361a'
=======
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#F21",
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
<<<<<<< HEAD
    color:'#ca361a'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#ca361a'
=======
    color: "#F21",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#F21",
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
  },
  
}));

export default function SignIn() {
  const classes = useStyles();

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant=""style={{color:"#ca361a"}}>
          Log In
        </Typography>
<<<<<<< HEAD
        
        <form className={classes.form} noValidate>
=======
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
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
            onChange={handleChange}
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
<<<<<<< HEAD
           
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="#ca361a"/>}
=======
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="#F21" />}
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
            label="Keep me signed in"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color=""
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
<<<<<<< HEAD
              <Link href="/" variant="" style={{color:"#ca361a"}}>
=======
              <Link href="/" variant="" style={{ color: "#F21" }}>
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
<<<<<<< HEAD
              <Link href="/" variant="" style={{color:"#ca361a"}}>
=======
              <Link href="/" variant="" style={{ color: "#F21" }}>
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
      </div>
      <div className={classes.paper}>
        <Typography component="h1" variant="">
          Create Account
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="#F21" />}
            label="Keep me signed in"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#F21"
            className={classes.submit}
          >
            Create Account
          </Button>
        </form>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    
  );
}