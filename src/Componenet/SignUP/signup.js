import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../../assets/logo1.png"
import  './StyleSignUp.css';
import * as Mui from '@material-ui/core';


class SignUp extends Component{


   classes = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));
    signin=()=> {
        this.props.history.push('/');
    }
    render (){
    return(
        <Mui.Container component="main" maxWidth="xs" className="">
            <Mui.CssBaseline />
            <div className={this.classes.paper}>
                <div>
                    <img src={Logo}/>
                </div>
                <Mui.Typography className="text" >
                    Sign in
                </Mui.Typography>
                <form className={this.classes.form} noValidate>
                    <Mui.TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        label="User name"
                        name="name"
                        autoComplete="name"
                        className="background_input"
                        autoFocus
                    />
                    <Mui.TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        label="E-post"
                        name="email"
                        autoComplete="email"
                        className="background_input"
                        autoFocus
                    />

                    <Mui.TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        className="background_input"
                        name="password"
                        label="Password"
                        type="password"
                        autoFocus
                    />
                    <Mui.TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        className="background_input"
                        name="confirm_password"
                        label="Confirm password"
                        type="password"
                        autoFocus
                    />
                    <br/>
                    <Mui.Button
                        type="submit"

                        variant="contained"

                        className="btn-submit"
                    >
                        Sign up
                    </Mui.Button>
                    <br/>
                    <hr/>
                    <Mui.Grid container>
                        <Mui.Grid item>
                            <Mui.Link onClick={this.signin} variant="body2">
                                {"I have an account? Sign In"}
                            </Mui.Link>
                        </Mui.Grid>
                    </Mui.Grid>
                </form>
            </div>
            <Mui.Box mt={2}>

            </Mui.Box>
        </Mui.Container>
    );
    }
}
export default SignUp;