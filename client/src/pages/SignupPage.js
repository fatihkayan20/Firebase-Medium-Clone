import React, { useState } from "react";
import { Dialog, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/actions/userActions";
import { CLEAR_ERRORS } from "../redux/types";
import SignupWithEmail from "../components/SignupPage/SignupWithEmail";
import SignupSelect from "../components/SignupPage/SignupSelect";

function SignupPage({ thumbnailButton }) {
  const [state, setState] = useState({
    open: false,
    emailSelected: false,
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
      emailSelected: false,
      showPassword: false,
      password: "",
      username: "",
      email: "",
      confirmPassword: "",
    });
  };

  const handleEmailSelect = () => {
    setState({ ...state, emailSelected: true });
  };
  const handleEmailClose = () => {
    setState({
      ...state,
      emailSelected: false,
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
    dispatch(signupUser(state));
  };

  return (
    <Box>
      {thumbnailButton ? (
        <Box
          onClick={handleOpen}
          className="pointer"
          bgcolor="transparent"
          padding="7px 20px 9px 20px"
          border="1px solid black"
          borderRadius="4px"
          width="80px"
          marginTop="20px"
          fontWeight="400"
        >
          Get Started
        </Box>
      ) : (
        <Box
          onClick={handleOpen}
          className="pointer"
          lineHeight="20px"
          bgcolor="#191919"
          color="#fff"
          padding="7px 16px 9px 16px"
          fontSize="14px"
          borderRadius="4px"
          fontWeight="400"
          marginTop="-5px !important"
        >
          Get Started
        </Box>
      )}

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

        {state.emailSelected ? (
          <SignupWithEmail
            handleEmailClose={handleEmailClose}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            username={state.username}
            email={state.email}
            showPassword={state.showPassword}
            password={state.password}
            confirmPassword={state.confirmPassword}
          />
        ) : (
          <SignupSelect handleEmailSelect={handleEmailSelect} />
        )}
      </Box>
    </Box>
  );
}

export default SignupPage;
