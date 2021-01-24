import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/dataActions";
import DiscoverPosts from "./DiscoverPosts";

function PostDiscover() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <Box
      paddingTop="30px"
      borderTop="1px solid #e3e3e3"
      marginTop="10px"
      display="flex"
      width="100%"
      maxWidth="1200px"
      margin="auto"
    >
      <Box>
        {posts.map((post) => (
          <DiscoverPosts post={post} />
        ))}
      </Box>
      <Box position="sticky" top="100px">
        <Box>DISCOVER MORE OF WHAT MATTERS TO YOU</Box>
        <Box>javascript</Box>
      </Box>
    </Box>
  );
}

export default PostDiscover;
