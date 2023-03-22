//tsrpfc
import { LayoutProps } from "@/models/index";
import { Box } from "@mui/system";
import { Stack, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Footer, Header } from "../common";

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      {/* children là nội dung cái page tương ứng */}
      {/* flexGrow :1 để đẩy footer xuống dưới cùng */}
      <Box component="main" flexGrow={1}>
        <Container maxWidth="sm">SM CONTAINER</Container>
        <Container maxWidth="md">MD CONTAINER</Container>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/blog">
          <p>Blog</p>
        </Link>
        <Link href="/works">
          <p>Works</p>
        </Link>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
