import * as React from "react";
import { Box } from "@mui/system";
import { Container, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import avata from "@/images/avata.png";
//Section
// Container
//Flex-container(stack)
//Flex-item (box trai )
export function HeroSection() {
  return (
    // 32=4 => 1 là 8px
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="flex-start"
        >
          <Box>
            <Typography component="h3" variant="h4" fontWeight="bold" mb={5}>
              Hi, I am Master, <br />
              Creative Technologist
            </Typography>
            <Typography mb={5}>
              Amet minim mollit non deserunt allamco est sit aliqua dolor do
              amet sint, Velit officia consequat duis enim velit mollit ,
              Exercitation veniam consequat sunt nosttrud amet.
            </Typography>
            <Button variant="contained" size="large">
              Dowload Resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: "240px",
              boxShadow: "-5px 13px",
              color: "secondary.light",
              borderRadius: "50%",
            }}
          >
            <Image
              width={243}
              height={243}
              src={avata}
              layout="reponsive"
              alt="avatar"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
