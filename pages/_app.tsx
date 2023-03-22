import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models/index";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      {/* render -> component thay đổi thôi */}
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
