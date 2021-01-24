import { Box, TextField } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";

function PostWrite() {
  const [state, setState] = useState({
    body: [],
    bodyCount: 0,
    showOptions: true,
    subject: "sdafgsdf",
    readCount: 0,
    title: "ff",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      ///// OnClick ile yap => publish
    } else {
      setState({ ...state, showOptions: false });
    }
  };

  const TryPush = async () => {
    var value = document.getElementById("body").value;
    var bdy = value.split(/\n/);

    let bodyCopy = [];
    if (value.trim() === "") {
    } else {
      bdy.forEach((p, i) => {
        var bodyType1 = p.endsWith(".png");
        var bodyType2 = p.endsWith(".jpg");

        var type;
        if (bodyType1 || bodyType2) {
          type = "img";
        } else {
          type = "p";
        }
        const data = {
          type: type,
          content: p,
          place: i,
        };

        bodyCopy.push(data);
      });

      setState({ ...state, body: bodyCopy });
    }
  };

  useEffect(() => {
    if (state.body.length > 0) {
      axios.post("/posts/create", state);
    }
  }, [state]);

  return (
    <Box>
      <Box marginTop="90px" width="75%" margin="auto" maxWidth="750px">
        <Box component={TextField} placeholder="Title" fullWidth />
        <Box
          component={TextField}
          placeholder="Tell Your Story"
          multiline
          rows={30}
          fullWidth
          onKeyDown={handleKeyDown}
          id="body"
          //   onChange={handleBodyChange}
        />
      </Box>
      <Box>
        <Box
          component={AddCircle}
          onClick={TryPush}
          position="absolute"
          top="50%"
          left="10%"
          // display={state.showOptions ? "flex" : "none"}
        />

        <Box component="input" type="file" display="none" />
      </Box>
    </Box>
  );
}

export default PostWrite;
