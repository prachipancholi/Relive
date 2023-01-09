import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const Auth = () => {
  const state = null;
  const classes = useStyles();
  const isSignup = false;
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography varient="h5">
          {isSignup ? "Sign Up" : "Sign In"}{" "}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container>
            {isSignup && (
              <TextField
                name="firstname"
                label="First Name"
                handleChange={handleChange}
                autofocus
                xs={6}
              />
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
