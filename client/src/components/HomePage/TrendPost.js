import { Avatar, Box } from "@material-ui/core";
import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function TrendPost({ post, index }) {
  return (
    <Box display="flex">
      <Box
        color="#E6E6E6"
        fontSize="30px"
        fontWeight="700"
        lineHeight="36px"
        marginRight="15px !important"
        marginTop="-10px"
      >
        {" "}
        0{index + 1}{" "}
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" alignItems="center">
          <Box
            component={Avatar}
            src={post.user.imageUrl}
            width="20px"
            height="20px"
            marginRight="5px !important"
          />
          <Box
            fontSize="13px"
            fontWeight="500"
            color="#292929"
            lineHeight="16px"
          >
            {" "}
            {post.user.username}
          </Box>
          <Box marginX="2px" fontSize="13px" color="#757575" lineHeight="16px">
            {" "}
            in{" "}
          </Box>
          <Box
            fontSize="13px"
            fontWeight="500"
            color="#292929"
            lineHeight="16px"
          >
            {" "}
            {post.subject}{" "}
          </Box>
        </Box>
        <Box
          fontWeight="700"
          lineHeight="20px"
          color="#292929"
          height="40px"
          maxHeight="40px"
          width="320px"
          paddingY="8px"
          component={Link}
          to={`/${post.user.username}/${post.slug}`}
        >
          {post.title}
        </Box>
        <Box
          display="flex"
          fontSize="13px"
          color="#757575"
          lineHeight="20px"
          alignItems="center"
          fontWeight="400"
        >
          <Box> {moment(post.createdAt).format("MMM DD")} </Box>
          <Box lineHeight="20px" marginX="5px" marginBottom="8px">
            {" "}
            .{" "}
          </Box>
          <Box> {post.readCount} read </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TrendPost;
