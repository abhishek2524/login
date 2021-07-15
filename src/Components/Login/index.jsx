import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: "red",
  },
}));

function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState({
    msg: "",
    type: "error",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const initialValues = {
    email: "",
    password: "",
  };
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const onSubmit = async (values, abc) => {
    abc.setErrors("abc>>>>>>>>>>>");
    const { email, password } = values;
    console.log(abc);
    let headersList = {
      "Content-type": "application/json; charset=UTF-8",
    };
    fetch(
      `https://api.chime.me/token?account=${email}&password=${password}&vendorKey=9ce64853f64f456ca348397666974b0b`,
      {
        method: "GET",
        headers: headersList,
        // mode: "no-cors",
      }
    )
      .then(function (response) {
        return response.json();
        // setOpen(true);
        // setError({
        //   msg: "Login Success",
        //   type: "success",
        // });
      })
      .then((data) => console.log(">>>>>>>>>>>>>>>", data))
      .catch((err) => {
        console.log("er>>>>>>..", err);
        setOpen(true);
        setError({
          msg: "Invalid Credentials",
          type: "error",
        });
      });
    // try {
    //   const response = await fetch(
    //     "https://api.chime.me/token?account=rpaugh@homeswiper.com&password=Meatsweats78759&vendorKey=9ce64853f64f456ca348397666974b0b",
    //     {
    //       method: "GET",
    //       mode: "no-cors",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //     }
    //   );
    //   console.log("respo>>>>>>>>>>", response);
    //   const data = await response.json();
    //   console.log("data>>>>>>>>>>>", data);
    // } catch (error) {
    //   console.log("err>>>>>>>>>", error);
    // }

    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((err) => console.log(err));
    // let headersList = {
    //   Accept: "*/*",
    //   "User-Agent": "Thunder Client (https://www.thunderclient.io)",
    //   Authorization:
    //     "token eyJhbGciOiJIUzI1NiJ9.eyJleHQiOjMxNDgxNDkwMTE3OTEsInVzZXJfaWQiOjMzMDMyNDE0OTQwMzgwMCwic2NvcGUiOiI1IiwiaWF0IjoxNTcxMzQ5MDExNzkxfQ.9YKgQBhy9q1cE8EgEUAWNGAvZrN8GcWDGRwiF5VMsJM",
    //   "Content-Type": "application/json",
    //   "Content-Type": "application/x-www-form-urlencoded",
    // };

    // fetch(
    //   "https://api.chime.me/v1.0/sso-token/url?sso-token=416B126203754A2992CE1C9963A50BF0&redirect-url=%5B%5Bhttps://chime.me/admin/home%5D%5D&businessType=Brokermint",
    //   {
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: headersList,
    //   }
    // )
    //   .then(function (response) {
    //     return response.text();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={error.type}>
          {error.msg}
        </Alert>
      </Snackbar>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {(formikprops) => (
              <Form className={classes.form} noValidate>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  required
                  helperText={
                    <div className={classes.error}>
                      <ErrorMessage name="email" />
                    </div>
                  }
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  helperText={
                    <div className={classes.error}>
                      <ErrorMessage name="password" />
                    </div>
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
