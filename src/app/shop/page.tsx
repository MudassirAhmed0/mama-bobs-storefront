import AllProducts from "@/components/view/AllProducts";
export const dynamic = "force-dynamic";
const page = () => {
  return (
    <>
      <h1 className="text64 font-bold text-center mb-8">
        Coming to a wardrobe near you
      </h1>
      <AllProducts />
    </>
  );
};

export default page;
