import { products } from "@/interface/page";

export const getProductsDetails = (data: products) => {
  const productsId = data?.id;
  const productsTitle = data?.productName;
  const productsPrice = data?.Price;
  const productsDescription = data?.description;
  const productsCategory = data?.category;
  // const productsImage = data?.image;

  return {
    productsId,
    productsCategory,
    productsDescription,
    // productsImage,
    productsTitle,
    productsPrice,
  };
};
