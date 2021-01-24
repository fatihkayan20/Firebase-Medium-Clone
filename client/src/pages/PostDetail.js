import { Avatar, Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../redux/actions/dataActions";
import moment from "moment";
import PostBody from "../components/PostDetailPage/PostBody";

function PostDetail() {
  let { creator, slug } = useParams();

  const dispatch = useDispatch();
  let post = useSelector((state) => state.data.post);
  const loading = useSelector((state) => state.data.loading);

  useEffect(() => {
    dispatch(getPostDetails(creator, slug));
  }, [creator, dispatch, slug]);

  return (
    <Box marginTop="130px" width="680px" margin="auto">
      {loading ? (
        <div>loading</div>
      ) : (
        <Box marginTop="130px" width="680px" margin="auto">
          <Box
            color="#292929"
            fontSize="46px"
            fontWeight="700"
            lineHeight="56px"
            letterSpacing="-0.5px"
            textAlign="center"
          >
            {post.title}
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginY="15px"
            fontWeight="400"
          >
            <Box
              display="flex"
              alignItems="center"
              wordBreak="break-word"
              boxSizing="inherit"
              fontWeight="400"
            >
              <Box
                component={Avatar}
                src={post.user?.imageUrl}
                width="28px"
                height="28px"
              />
              <Box
                width="100%"
                marginLeft="12px"
                flexWrap="wrap"
                display="flex"
                fontWeight="400"
              >
                <Box
                  fontSize="14px"
                  lineHeight="20px"
                  fontWeight="600"
                  color="#1A8917"
                  className="pointer"
                >
                  {post.user?.username}
                </Box>
                <Box
                  fontSize="14px"
                  lineHeight="20px"
                  color="#757575"
                  marginX="5px"
                  fontWeight="400"
                >
                  {moment(post.createdAt).fromNow()}
                </Box>
                <Box
                  fontSize="14px"
                  lineHeight="20px"
                  color="#757575"
                  marginTop="-4px"
                  fontWeight="400"
                >
                  .
                </Box>
                <Box
                  fontSize="14px"
                  lineHeight="20px"
                  color="#757575"
                  marginX="5px"
                  fontWeight="400"
                >
                  {post.readCount} read
                </Box>
              </Box>
            </Box>
            <Box display="flex">
              <Box className="pointer">
                <svg width="25" height="25">
                  <g fill-rule="evenodd">
                    <path d="M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01"></path>
                    <path d="M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></path>
                  </g>
                </svg>
              </Box>
              <Box className="pointer">
                <svg width="25" height="25" viewBox="0 0 25 25">
                  <path
                    d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </Box>
            </Box>
          </Box>

          <Box>
            {post?.body?.map((p) => (
              <PostBody body={p} />
            ))}
          </Box>
        </Box>
      )}
      <Box position="absolute" top="200px" left="150px" width="10%">
        <Box>Written By</Box>
        <Box>Aisha Adam O</Box>
        <Box>Frontend Developer</Box>
        <Box>Follow</Box>
        <hr />
        <Box display="flex" width="50%" alignItems="center">
          <Box component="svg">
            <g fill-rule="evenodd">
              <path d="M13.74 1l.76 2.97.76-2.97zM16.82 4.78l1.84-2.56-1.43-.47zM10.38 2.22l1.84 2.56-.41-3.03zM22.38 22.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M9.1 22.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L6.1 15.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L6.4 11.26l-1.18-1.18a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L11.96 14a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L8.43 9.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L20.63 15c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM13 6.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 23 23.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"></path>
            </g>
          </Box>
          <Box marginTop="-120px">200</Box>
        </Box>
        <Box>
          <svg width="25" height="25" class="gp" aria-label="responses">
            <path
              d="M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03zm0-1v.5l.03-.5h-.03zm-3.92-1.64l.21.2a6.09 6.09 0 0 0 3.24 1.54 7.14 7.14 0 0 1-.83-1.84 5.15 5.15 0 0 1-.16-.75 2.4 2.4 0 0 1-.02-.29v-.23l.18-.15a6.6 6.6 0 0 0 2.3-4.96c0-3.82-3.4-6.93-7.6-6.93-4.19 0-7.6 3.11-7.6 6.93 0 3.83 3.41 6.94 7.6 6.94.83 0 1.64-.12 2.41-.35l.28-.08z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </Box>
        <Box>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <path
              d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default PostDetail;
