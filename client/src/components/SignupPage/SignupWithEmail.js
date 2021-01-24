import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";

function SignupWithEmail({
  handleEmailClose,
  handleSubmit,
  handleChange,
  handleClickShowPassword,
  email,
  showPassword,
  password,
  confirmPassword,
  username,
}) {
  const errors = useSelector((state) => state.UI.errors);
  const loading = useSelector((state) => state.UI.loading);
  return (
    <Box component={DialogContent}>
      <Box
        width="50%"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        marginY="50px"
      >
        <Box
          width="100%"
          marginY="50px"
          fontSize="28px"
          lineHeight="32px"
          color="#080808"
          textAlign="center"
        >
          Sing up with email
        </Box>
        <form onSubmit={handleSubmit}>
          <Box component={FormControl} width="100%" marginY="5px !important">
            <InputLabel htmlFor="standard-adornment-username">
              Username
            </InputLabel>
            <Input
              id="standard-adornment-username"
              value={username}
              name="username"
              onChange={handleChange}
            />
            {errors?.username && (
              <Box component={FormHelperText} color="red !important">
                {errors.username}
              </Box>
            )}
          </Box>
          <Box component={FormControl} width="100%" marginY="5px !important">
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
            <Input
              id="standard-adornment-email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            {errors?.email && (
              <Box component={FormHelperText} color="red !important">
                {errors.email}
              </Box>
            )}
          </Box>
          <Box component={FormControl} width="100%" marginY="5px !important">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              name="password"
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors?.password && (
              <Box component={FormHelperText} color="red !important">
                {errors.password}
              </Box>
            )}
          </Box>
          <Box
            component={FormControl}
            width="100%"
            marginTop="5px !important"
            marginBottom="10px !important"
          >
            <InputLabel htmlFor="standard-adornment-cpassword">
              Confirm Password
            </InputLabel>
            <Input
              id="standard-adornment-cpassword"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors?.confirmPassword && (
              <Box
                component={FormHelperText}
                color="red !important"
                marginBottom="10px !important"
              >
                {errors.confirmPassword}
              </Box>
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginBottom="20px"
          >
            {loading ? (
              <Box component={CircularProgress} margin="auto" />
            ) : (
              <Box
                component={Button}
                bgcolor="black"
                color="white !important"
                width="50%"
                margin="auto"
                marginBottom="10px !important"
                className="signup-btn"
                type="submit"
              >
                Sign Up
              </Box>
            )}
          </Box>
        </form>
        <Box
          fontWeight="400"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <svg width="19" height="19" viewBox="0 0 19 19">
            <path
              d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
              fillRule="evenodd"
            ></path>
          </svg>
          <Box
            color="#1a8917"
            fontWeight="bold"
            fontSize="13px"
            className="pointer"
            onClick={handleEmailClose}
          >
            All sign up options
          </Box>
        </Box>
        <Box color="rgba(117, 117, 117, 1)" fontSize="13px" marginTop="100px">
          Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge
          that Medium’s Privacy Policy applies to you.
        </Box>
      </Box>
    </Box>
  );
}

export default SignupWithEmail;
