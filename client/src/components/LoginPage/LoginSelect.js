import { Box, DialogContent } from "@material-ui/core";
import React from "react";

function LoginSelect({ handleEmailSelect }) {
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
          Welcome back.
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="180px"
          paddingX="16px"
          margin="auto"
          paddingY="8px"
          border="1px solid rgb(168, 168, 168)"
          marginBottom="40px"
          className="pointer"
          onClick={handleEmailSelect}
        >
          <svg width="25" height="25">
            <path d="M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"></path>
          </svg>
          <Box>Sign up with email</Box>
        </Box>
        <Box
          fontWeight="400"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>No account?</Box>
          <Box color="#1a8917" fontWeight="bold">
            Create one
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

export default LoginSelect;
