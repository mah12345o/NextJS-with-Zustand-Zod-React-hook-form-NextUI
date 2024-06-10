"use client";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useStore } from "@/app/Zustand/useStore";
import { RiExpandRightFill } from "react-icons/ri";
function OffCanvasExample() {
  const toggleState = useStore((state) => state.toggleState);
  const productsPrice = useStore((state) => state.productsPrice);

  const productsImage = useStore((state) => state.productsImage);
  const productsId = useStore((state) => state.productsId);
  const productsCategory = useStore((state) => state.productsCategory);
  const productsTitle = useStore((state) => state.productsTitle);
  const productsDescription = useStore((state) => state.productsDescription);

  const closeDetailsPopup = useStore((state) => state.toggleModal);
  const [width, setFullWidth] = useState(false);
  function viewDetails() {
    setFullWidth(true);
    if (width) {
      setFullWidth(false);
    }
  }
  return (
    <>
      <Offcanvas show={toggleState} onHide={closeDetailsPopup}>
        <div className={`${width ? "w-[1000px]" : "w-[650px]"}`}>
          <div className="flex justify-center relative">
            {toggleState}
            <div className="py-2 flex justify-center flex-col items-center">
              <Image
                alt="Card background"
                className=" rounded-xl object-contain opacity-5 min-h-[200px] max-h-[200px] rotate-element "
                src={productsImage}
              />
              <div className="pb-0 pt-2 px-4 min-w-96 flex-col items-start  ">
                <p className="text-tiny uppercase font-bold"> {productsId}</p>
                <small className="text-default-500">{productsCategory}</small>
                <p className="text-tiny uppercase font-bold">
                  {" "}
                  {productsTitle}
                </p>
                <small className="text-default-500">{productsPrice}</small>
                <p className="text-tiny uppercase font-bold ">
                  {" "}
                  {productsDescription}
                </p>
                <div className="flex gap-4 items-center absolute right-[-20px] top-0 bottom-0">
                  <Button
                    className={`${width && "rotate-180"} hover:bg-blue-800`}
                    onClick={viewDetails}
                    isIconOnly
                    color="primary"
                    aria-label="expand"
                  >
                    <RiExpandRightFill className="text-2xl" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
