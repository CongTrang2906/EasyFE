import { useRouter } from "next/router";
import * as React from "react";

export interface ParamsPageProps {}

export default function ParamsPage(props: ParamsPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Params Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
//getServerSideProps để tải dữ liệu động từ một API bên ngoài hoặc một cơ sở dữ liệu
//một vấn đề có thể xảy ra là tốc độ phản hồi của API hoặc cơ sở dữ liệu chậm, dẫn đến thời gian tải trang chậm
//Để giảm thiểu tác động của vấn đề này, chúng ta có thể sử dụng cache trong getServerSideProps.
export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    props: {}, // will be passed to the page component as props
  };
}
