import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/system";

const Home: NextPageWithLayout = () => {
  return <Box>HomePage</Box>;
};

Home.Layout = MainLayout;
export default Home;
