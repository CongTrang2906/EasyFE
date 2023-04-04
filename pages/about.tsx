// import Header from "@/components/common/header";
import { Header } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
//import dynamic from "next/dynamic";
//tsdrpfc

//dùng ssr :false là chỉ chạy được bên phía client
//dùng ssr :true là chỉ chạy được bên phía client-server
// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: false,
// });
export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  console.log("About query: ", router.query);
  const page = router.query?.page;
  //server
  //page thay đổi feth lại data
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await response.json();
      setPostList(data.data);
    })();
  }, [page]);
  function handleNextClick() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      // dùng cái này sẽ k chạy lại getstaticprop bên server nữa
      // chỉ chạy bên phía client
      undefined,
      //shallow :true chỉ update bên phía client thôi => k gọi lại hàm getstaticprop bên server
      { shallow: true }
    );
  }
  return (
    <Box>
      {/* có một dự liệu tĩnh bên phía server vd heder ,about  render sẳn bên phía sever*/}
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <Header />
      {/* <Header></Header> */}
      {/* List sẽ làm bên phía client đi feth dữ liệu*/}
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </Box>
  );
}

AboutPage.Layout = MainLayout;

export async function getStaticProps() {
  console.log("get static props");
  return {
    props: {},
  };
}
// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
