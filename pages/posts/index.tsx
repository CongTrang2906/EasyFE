import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";
//Next.js, ứng dụng của bạn có thể được render trên server hoặc trên trình duyệt của người dùng

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPageProps({ posts }: PostListPageProps) {
  // console.log("posts", posts);

  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
//Hàm này chỉ chạy bên phía server-side
//build-time chạy get staticProps có được cái posts - > truyền qua component PostListPageProps để render
//getStaticProps trong Next.js cho phép bạn tạo ra các trang tĩnh (static pages) trong quá trình build trước (pre-build)
export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // console.log("static props");
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
