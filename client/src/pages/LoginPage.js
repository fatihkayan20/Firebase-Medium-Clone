import { Box, Dialog } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginSelect from "../components/LoginPage/LoginSelect";
import LoginWithEmail from "../components/LoginPage/LoginWithEmail";
import { loginUser } from "../redux/actions/userActions";
import { CLEAR_ERRORS } from "../redux/types";

function LoginPage() {
  const [state, setState] = useState({
    open: false,
    loginSelected: false,
    showPassword: false,
    password: "",
    username: "",
    email: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.user.authenticated);

  const handleOpen = () => {
    setState({ ...state, open: true });
  };
  const handleClose = () => {
    setState({
      ...state,
      open: false,
      loginSelected: false,
      showPassword: false,
      password: "",
      username: "",
      email: "",
      confirmPassword: "",
    });
  };

  const handleEmailSelect = () => {
    setState({ ...state, loginSelected: true });
  };
  const handleEmailClose = () => {
    setState({
      ...state,
      loginSelected: false,
      showPassword: false,
      password: "",
      username: "",
      email: "",
      confirmPassword: "",
    });

    dispatch({ type: CLEAR_ERRORS });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(state));
  };

  return (
    <Box>
      <Box onClick={handleOpen} className="pointer">
        Sign In
      </Box>

      <Box
        component={Dialog}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={authenticated ? false : state.open}
        width="70%"
        maxWidth="700px"
        margin="auto"
        height="95vh !important"
        position="relative"
      >
        <Box
          position="absolute"
          right="15px"
          top="15px"
          className="pointer"
          onClick={handleClose}
        >
          <svg class="sf" width="29" height="29">
            <path
              d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
              fillR
              ule="evenodd"
            ></path>
          </svg>
        </Box>

        {state.loginSelected ? (
          <LoginWithEmail
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            handleEmailClose={handleEmailClose}
            usernameOrEmail={state.usernameOrEmail}
            showPassword={state.showPassword}
            password={state.password}
          />
        ) : (
          <LoginSelect handleEmailSelect={handleEmailSelect} />
        )}
      </Box>
    </Box>
  );
}

export default LoginPage;
