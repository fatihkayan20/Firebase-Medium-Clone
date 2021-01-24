import { Box } from "@material-ui/core";
import React from "react";
import SignupPage from "../../../pages/SignupPage";

function Thumbnail() {
  return (
    <Box bgcolor="#ffc017" width="100%" padding="33px 0 51px 0">
      <Box width="100%" maxWidth="1200px" margin="auto">
        <Box width="100%" maxWidth="550px">
          <Box
            color="#080808"
            fontSize="70px"
            lineHeight="74px"
            letterSpacing="-3.5px"
            fontWeight="400"
          >
            Explore new perspectives
          </Box>
          <Box>
            <Box
              color="rgba(41, 41, 41, 1)"
              marginTop="30px"
              fontWeight="400"
              fontSize="18px"
              lineHeight="24px"
            >
              Read and share ideas from independent voices, world-class
              publications, and experts from around the globe. Everyone's
              welcome.
              <Box component="span" className="underline">
                Learn more.
              </Box>
            </Box>
          </Box>
          <SignupPage thumbnailButton />
        </Box>
      </Box>
    </Box>
  );
}

export default Thumbnail;
