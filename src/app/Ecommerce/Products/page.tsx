import { API_URL } from "@/common/page";
import { fetchGenerator } from "@/utils/fetch/fetch";
// import Card from "@/app/component/Card";
import SearchData, {
  ContentSection,
} from "@/app/component/searchProduct.tsx/page";
// interface ProductData {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }
const Product = async () => {
  const { data } = await fetchGenerator({ url: API_URL });
  return (
    <div className="pt-20">
      <SearchData data={data} />
      <ContentSection />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-12  w-10/12 m-auto">
        {data.map((el: ProductData) => (
          <Card key={el?.id} data={el} />
        ))}
      </div> */}
    </div>
  );
};

export default Product;
