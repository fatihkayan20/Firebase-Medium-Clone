import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import UnauthenticatedHomePage from "../components/HomePage/UnAuthenticated/UnauthenticatedHomePage";

function HomePage() {
  const authenticated = useSelector((state) => state.user.authenticated);
  return (
    <Box marginTop="75px">
      {authenticated ? "" : <UnauthenticatedHomePage />}
    </Box>
  );
}

export default HomePage;
