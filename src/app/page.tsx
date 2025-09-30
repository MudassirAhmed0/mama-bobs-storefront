import HomePage from "@/components/home/Index";
import Layout from "@/components/layout/Index";
import AllCollections from "@/components/view/AllCollections";
import AllProducts from "@/components/view/AllProducts";

export default function Home() {
  return (
    <Layout>
      <HomePage />
      {/* <AllProducts /> */}
      {/* <AllCollections /> */}
    </Layout>
  );
}
