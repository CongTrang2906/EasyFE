import * as React from "react";
import { Box } from "@mui/system";
import { Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { PostCard } from "./post-card";
import { Post, Work } from "@/models";
import { WorkList } from "../work";

export function FeatureWorks() {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      createAt: "1648363391671",
      updateAt: "1648363391671",
      tagList: ["Dashboard"],
      shorDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dycxpyjkz/image/upload/v1680511170/nextjs/work1_1_qhktbk.jpg",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createAt: "1648363391671",
      updateAt: "1648363391671",
      tagList: ["Illustration"],
      shorDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dycxpyjkz/image/upload/v1680511169/nextjs/work2_1_fr2hmw.jpg",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createAt: "1648363391671",
      updateAt: "1648363391671",
      tagList: ["Typography"],
      shorDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dycxpyjkz/image/upload/v1680511169/nextjs/work3_1_sff5pp.jpg",
    },
  ];
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured Works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
