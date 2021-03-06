import React, {Component, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Logo from "../../assets/logo1.png"
import '../../Container/LoginStyle.css';
import * as Mui from '@material-ui/core';

const classes = makeStyles(theme => ({
    paper: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(0),

    },
    form: {
        width: '100%', // Fix IE 11 issue.

    },
    submit: {

    },
}));

const SignUpForm =({
    history,
    onSubmit,
    OnChange,
    user,
    errors,

})=> {
    return(<div className="container-fluid vh-100 " >
            <div className="row vh-100 ">
                <div className="col-md-6  center ">
        <Mui.Container  maxWidth="xs" >
            <Mui.CssBaseline/>
            <div className={classes.paper}>

                <div className="logo1  ">
                    <div className="center ">
                        <img src={Logo}/>
                    </div>
                </div>

                <Mui.Typography className="text  justify-content-center">
                    Sign Up
                </Mui.Typography>


                <form className={classes.form} onSubmit={onSubmit} >
                    <Mui.TextField

                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        type="text"
                        label="First name"
                        name={user.First_name}
                        autoComplete={user.First_name}
                        className="background_input"
                        autoFocus
                        value={user.First_name}
                        onChange={OnChange}

                      errorText={errors.First_name}
                    />

                    <Mui.TextField

                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        type="text"
                        label="Last name"
                        name={user.Last_name}
                        autoComplete={user.Last_name}
                        className="background_input"

                        value={user.Last_name}
                        onChange={OnChange}
                      errorText={errors.Last_name}
                        />

                    <Mui.TextField

                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        type="text"
                        label="Email"
                        name={user.email}
                        autoComplete={user.email}
                        className="background_input"

                        value={user.email}
                        onChange={OnChange}
                        errorText={errors.email}
                    />


                    <Mui.TextField

                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        label="Password"
                        name={user.password}
                        autoComplete={user.password}
                         value={user.password}
                        className="background_input"


                        onChange={OnChange}
                         errorText={errors.password}
                    />

                    <Mui.TextField

                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        label="Confirm Password"
                        name={user.confirm_password}
                        autoComplete={user.confirm_password}
                       value={user.confirm_password}
                        className="background_input"


                        onChange={OnChange}
                       errorText={errors.confirm_password}
                    />

                    <br/>
                    <div className="center">
                        <Mui.Button
                            type="submit"
                            className="btn-color mt-4"
                            variant="contained"

                        >
                            Sign up
                        </Mui.Button>
                    </div>
                    <br/>
                    <hr/>
                    <Mui.Grid container >
                        <Mui.Grid item >
                            <Mui.Link href="/" variant="body2" >
                                {"I have an account? Sign In"}
                            </Mui.Link>
                        </Mui.Grid>
                    </Mui.Grid>
                </form>

            </div>
            <Mui.Box mt={2}>
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            </Mui.Box>
        </Mui.Container>
                </div>
                <div className="col-md-6 h-auto center section1 ">
                    <div className="logo2 h-auto ">
                        <div className=" ">
                            <img src={Logo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default SignUpForm;