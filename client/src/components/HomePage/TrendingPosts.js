import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingPosts } from "../../redux/actions/dataActions";
import TrendPost from "./TrendPost";

function TrendingPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.trendingPosts);
  useEffect(() => {
    dispatch(getTrendingPosts());
  }, [dispatch]);
  return (
    <Box
      width="100%"
      maxWidth="1200px"
      margin="auto"
      paddingTop="40px"
      paddingBottom="16px"
    >
      <Box display="flex" alignItems="center" marginBottom="20px">
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          className="fe u"
        >
          <path fill="#fff" d="M0 .8h28v28H0z"></path>
          <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
            <path fill="#fff" d="M4 4.8h20v20H4z"></path>
            <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
            <path
              d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
              stroke="#000"
              strokeLinecap="round"
            ></path>
          </g>
          <defs>
            <clipPath id="trending_svg__clip0">
              <path
                fill="#fff"
                transform="translate(4 4.8)"
                d="M0 0h20v20H0z"
              ></path>
            </clipPath>
          </defs>
        </svg>
        <Box marginLeft="5px" fontSize="12px" fontWeight="700">
          TRENDING ON MEDIUM
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {posts.map((post, index) => (
          <TrendPost key={post.id} post={post} index={index} />
        ))}
      </Box>
    </Box>
  );
}

export default TrendingPosts;
