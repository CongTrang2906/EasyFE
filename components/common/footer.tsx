import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Box, Stack, Typography, Icon } from "@mui/material";
import * as React from "react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/congtrang2906" },
    { icon: Instagram, url: "http://google.com" },
    { icon: Twitter, url: "http://google.com" },
    { icon: LinkedIn, url: "http://google.com" },
  ];
  return (
    <Box className="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, idx) => (
          <Box
            key={idx}
            component="a"
            p={2}
            href={item.url}
            //mở link tab mới luôn luôn có dòng này
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} fontSize="large" />
          </Box>
        ))}
      </Stack>
      <Typography>
        Copyright ©{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  );
}
