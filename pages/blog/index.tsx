import { PostItem } from "@/components/blog";
import { MainLayout } from "@/components/layout";
import { getPostList } from "@/utils/posts";
import { Box, Container, Divider } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";
//Next.js, ứng dụng của bạn có thể được render trên server hoặc trên trình duyệt của người dùng

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log("posts", posts);

  return (
    <Box>
      <Container>
        <h1>Blog List Page</h1>
        <Box component="ul" sx={{ listStyleType: "none", p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              {/* chuyển sang trang detail */}
              <Link href={`/blog/${post.slug}`}>
                <p>
                  <PostItem post={post} />
                </p>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
BlogListPage.Layout = MainLayout;
//Hàm này chỉ chạy bên phía server-side
//build-time chạy get staticProps có được cái posts - > truyền qua component PostListPageProps để render
//getStaticProps trong Next.js cho phép bạn tạo ra các trang tĩnh (static pages) trong quá trình build trước (pre-build)
export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  //convert markdown files into list of javascript object
  const postList = await getPostList();
  return {
    props: {
      posts: postList,
    },
  };
};
