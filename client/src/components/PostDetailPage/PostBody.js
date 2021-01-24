import { Box } from "@material-ui/core";
import React from "react";

function PostBody({ body }) {
  return (
    <Box>
      {body.type === "p" ? (
        body.content.length > 0 ? (
          <Box> {body.content} </Box>
        ) : (
          <br />
        )
      ) : (
        <Box
          component="img"
          src={body.content + "?alt=media"}
          width="100%"
          objectFit="contain"
        />
      )}
    </Box>
  );
}

export default PostBody;
