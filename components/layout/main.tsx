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
      {/* Lấy những  thằng con dưới trang pages ra  */}
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
