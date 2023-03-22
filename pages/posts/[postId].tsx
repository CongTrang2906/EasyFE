import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter();
  //check đk : validation 5s chưa hiển thị nội dung thì sẽ hiển thị loading...
  if (router.isFallback) {
    return (
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Loading...</div>
    );
  }
  if (!post) return null;
  return (
    <div>
      <h1>Create Post Page</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}
// chạy getstaticpath 1 lần
export const getStaticPaths: GetStaticPaths = async () => {
  console.log("Get Static Paths");

  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    // bao nhiêu thằng path thì gọi getStaticProps bấy nhiêu lần
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    //   { params: { postId: "4" } },
    // ],
    // k có nằm trong danh sách trả về ra notfount
    fallback: true,
  };
};
//Ứng với mỗi thằng thì sẽ tạo ra một file html tương ứng
export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("\n Get Static Props", context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      post: data,
    },
    //build ra một cái page
    //Thì page đó có validate trong vòng 5S, qua 5s mà request lên trả lại dữ liệu cũ
    //Âm thầm bên dưới (build) trả lại dữ liệu mới->reload lại mới ra dữ liệu mới
    revalidate: 5,
  };
};
