import { Avatar, Box } from "@material-ui/core";
import React from "react";
import moment from "moment";

function DiscoverPosts({ post }) {
  return (
    <Box width="700px">
      <Box display="flex" alignItems="center">
        <Box
          component={Avatar}
          src={post.user.imageUrl}
          width="20px"
          height="20px"
          marginRight="6px"
        />
        <Box color="#292929" fontSize="13px" fontWeight="500" lineHeight="16px">
          {" "}
          {post.user.username}{" "}
        </Box>
      </Box>

      <Box display="flex">
        <Box width="calc(100% - 225px)">
          <Box
            color="#292929"
            fontSize="22px"
            fontWeight="700"
            lineHeight="28px"
          >
            {" "}
            {post.title}{" "}
          </Box>
          <Box> {post?.body[0]?.content.substring(0, 150)} </Box>
          <Box>
            <Box> {moment(post.createdAt).format("MMM DD")} </Box>
            <Box> {post.readCount} </Box>
          </Box>
        </Box>
        <Box
          component="img"
          src={post?.photos?.mainPhoto}
          objectFit="cover"
          sizes="200px"
          decoding="auto"
          width="200px"
          height="133px"
        />
      </Box>
    </Box>
  );
}

export default DiscoverPosts;
