"use client"
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
  const incrCounter = useStore((state) => state.incrCounter);
  return (
    <div className="text-white">
      <Card className="flex justify-center">
        <CardBody className="py-2 flex justify-center">
          <Image
            alt="Card background"
            className=" rounded-xl object-contain opacity-5 min-h-[200px] max-h-[200px]"
            src={productsImage}
          />
          <CardHeader className="pb-0 pt-2 px-4 truncate flex-col items-start">
            <p className="text-tiny uppercase font-bold">{productsId}</p>
            <small className="text-default-500">{productsCategory}</small>
            {/* <small className="text-default-500">{productsDescription}</small> */}
            {/* <h4 className="font-bold text-large">{productsDescription}</h4> */}
            <p className="text-tiny uppercase  truncate font-bold">{productsTitle}</p>
            <small className="text-default-500">{productsPrice}</small>
            <button onClick={incrCounter}>Incr. Counter</button>
          </CardHeader>
          <OffCanvasExample />
        </CardBody> 
      </Card>
    </div>
  );
};

export default CardContent;
