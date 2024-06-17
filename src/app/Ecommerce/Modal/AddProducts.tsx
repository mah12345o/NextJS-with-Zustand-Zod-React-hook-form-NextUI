"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  //   ModalBody,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
// import { color, color } from "framer-motion";
import { label } from "yet-another-react-lightbox";
import { useForm, SubmitHandler } from "react-hook-form";
export default function AddProductsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  type Inputs = {
    name: string;
    description: string;
    Price: Number;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log("data", data);
  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await fetch("http://localhost:3004/users-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 w-[20%]">
        {backdrops.map((b) => (
          <Button
            key={b}
            variant="flat"
            color="warning"
            onPress={() => handleOpen(b)}
            className="capitalize w-full"
          >
            {b === "blur" && "Add-Products"}
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Product_Details
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <form
                    className="w-full  flex-col flex gap-2 mb-3"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <Input
                        defaultValue=""
                        {...register("name", { required: true })}
                        type="text"
                        label="Name"
                      />
                      {errors.name && (
                        <span className="text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div>
                      {" "}
                      <Input
                        defaultValue=""
                        {...register("Price", { required: true })}
                        type="number"
                        label="Price"
                      />
                      {errors.Price && (
                        <span className="text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div>
                      {" "}
                      <Input
                        defaultValue=""
                        {...register("description", { required: true })}
                        type="text"
                        label="description"
                      />
                      {errors.description && (
                        <span className="text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                    {/* <input type="submit" /> */}
                  </form>
                </div>
              </ModalBody>
              {/* <ModalFooter> */}
              {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
              {/* <Button color="primary">Action</Button> */}
              {/* </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
