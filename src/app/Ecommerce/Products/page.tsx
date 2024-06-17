import { API_URL } from "@/common/page";
import { fetchGenerator } from "@/utils/fetch/fetch";
import Card from "@/app/component/Card";
import AddProductsModal from "../Modal/AddProducts";
import SearchData, {
  ContentSection,
} from "@/app/component/searchProduct.tsx/page";
interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Product = async () => {
  const { data } = await fetchGenerator({ url: API_URL });
  console.log("pro data find ", data);
  return (
    <div className="pt-20">
      <div className="flex  w-10/12 m-auto">
        <SearchData data={data} />
        &nbsp;
        <AddProductsModal />
      </div>
      {/* <ContentSection /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-12  w-10/12 m-auto">
        {data.map((el: ProductData) => (
          <Card key={el?.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Product;
