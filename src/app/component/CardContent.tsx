"use client";
import { products } from "@/interface/page";
import { getProductsDetails } from "@/variable/page";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import OffCanvasExample from "../Ecommerce/Modal/page";
import { useStore } from "../Zustand/useStore";
const CardContent = ({ data }: { data: products }) => {
  const {
    productsId,
    productsCategory,
    productsDescription,
    productsImage,
    productsTitle,
    productsPrice,
  } = getProductsDetails(data);
  const openDetailsPopup = useStore((state) => state.toggleModal);
  return (
    <div className="text-white">
      <Card className="flex justify-center">
        <CardBody className="py-2 flex justify-center ">
          <Image
            alt="Card background"
            className=" rounded-xl object-contain flex opacity-5 min-h-[200px] max-h-[200px] "
            src={productsImage}
          />
          <CardHeader className="pb-0 pt-2 px-4 truncate flex-col items-start">
            <p className="text-tiny uppercase font-bold">{productsId}</p>
            <small className="text-default-500">{productsCategory}</small>
            <p className="text-tiny uppercase  truncate font-bold">
              {productsTitle}
            </p>
            <small className="text-default-500">{productsPrice}</small>
            <button
              className="hover:text-blue-600 text-sm mt-2 w-full text-center"
              onClick={() =>
                openDetailsPopup(
                  productsPrice,
                  productsTitle,
                  productsImage,
                  productsId,
                  productsCategory,
                  productsDescription
                )
              }
            >
              View Products Details
            </button>
          </CardHeader>
          <OffCanvasExample />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardContent;
