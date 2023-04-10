import { Post } from "@/models";
import { getPostList } from "@/utils/posts";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import { Box, Container, Divider } from "@mui/material";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import remarkPrism from "remark-prism";
import { Seo } from "@/components/common";

export interface BlogPageProps {
  post: Post;
}

export default function PostDetailPage({ post }: BlogPageProps) {
  if (!post) return null;
  return (
    <Box>
      <Seo
        data={{
          title: post.title,
          description: post.description,
          url: "",
          thumbnailUrl: post.thumbnailUrl || "",
        }}
      />
      <Container>
        <h1>Create Post Page</h1>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}></div>
      </Container>
    </Box>
  );
}
// chạy getstaticpath 1 lần
export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

//Ứng với mỗi thằng thì sẽ tạo ra một file html tương ứng
export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };
  //parse md to htmml
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "agenda.*" })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeDocument, { title: "blog details page" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || "");
  post.htmlContent = file.toString();
  return {
    props: {
      post,
    },
  };
};
