import { Box } from "@material-ui/core";
import React from "react";
import PostDiscover from "../PostDiscover";
import TrendingPosts from "../TrendingPosts";
import Thumbnail from "./Thumbnail";

function UnauthenticatedHomePage() {
  return (
    <Box>
      <Thumbnail />
      <TrendingPosts />
      <PostDiscover />
    </Box>
  );
}

export default UnauthenticatedHomePage;
