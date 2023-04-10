import { Post } from "@/models";
import { Box, Stack, Typography, Divider } from "@mui/material";

import * as React from "react";

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Stack direction="row" my={2}>
        <Typography variant="body1">{post.publishedDate}</Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography variant="body1">{post.tagList.join(" ")}</Typography>
      </Stack>
      <Typography variant="body2">{post.description}</Typography>
    </Box>
  );
}
