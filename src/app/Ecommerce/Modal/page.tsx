"use client"
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { products } from "@/interface/page";
import { getProductsDetails } from "@/variable/page";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useStore } from "@/app/Zustand/useStore";
function OffCanvasExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const counter = useStore((state) => state.counter);
  return (
    <>
      {/* <Button onClick={handleShow} className="rounded-xl">
        Details
      </Button> */}
      <Offcanvas show={counter} onHide={handleClose}>
        <Card className="flex justify-center">{counter}
          <CardBody className="py-2 flex justify-center">
            <Image
              alt="Card background"
              className=" rounded-xl object-contain opacity-5 min-h-[200px] max-h-[200px]"
              src=""
            />
            <CardHeader className="pb-0 pt-2 px-4 truncate flex-col items-start">
              <p className="text-tiny uppercase font-bold"> test</p>
              <small className="text-default-500"> test</small>
              {/* <small className="text-default-500">{productsDescription}</small> */}
              {/* <h4 className="font-bold text-large">{productsDescription}</h4> */}
              <p className="text-tiny uppercase  truncate font-bold">test</p>
              <small className="text-default-500"> test</small>
            </CardHeader>
          </CardBody>
        </Card>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
