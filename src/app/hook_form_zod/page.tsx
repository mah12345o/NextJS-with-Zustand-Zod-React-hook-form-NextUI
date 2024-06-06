"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { Slider } from "@nextui-org/react";
import { AiOutlineNumber } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { FaImage } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema } from "./userFormSchema";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

type Inputs = {
  building_name: string;
  group_name: string;
  builder_name: string;
  email: string;
  Configuration: string;
  Near_by_Places: string;
  contact_number: number;
  whatsapp_number: number;
  total_unit: number;
  Plot_Size: number;
  Price_range: number;
  category: "";
  // NearbyLocation: string;
};

export default function Hook_form_zod() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(userFormSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // data.Plot_Size = Number(data.Plot_Size);
    // console.log(typeof data.Plot_Size);
    alert(JSON.stringify(data)), reset();
  };

  // const areaName = ["Gandhinagar", "InfoCity", "GiftCity", "Sargasan", "koba"];
  return (
    <div className="h-full bg-slate-800 pt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl m-auto py-6 w-[90%]"
      >
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-col items-end  mb-6 md:mb-0 gap-4">
            <div className="w-full">
              <h3 className="text-white text-small m-1 ">Builder_name</h3>
              <Input
                // value=""
                isClearable
                {...register("builder_name", { required: true })}
                type="text"
                placeholder="Enter builder_name"
                startContent={
                  <FcDepartment className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              {errors.builder_name && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.builder_name.message}
                </div>
              )}
            </div>

            <div className="w-full">
              <h3 className="text-white text-small m-1 ">Building_name</h3>
              <Input
                // value="sun villa"
                isClearable
                {...register("building_name", { required: true })}
                type="text"
                placeholder="Enter building_name"
              />
              {errors.building_name && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.building_name.message}
                </div>
              )}
            </div>

            <div className="w-full">
              <h3 className="text-white text-small m-1 ">email</h3>
              <Input
                isClearable
                // value="maheshsuthar098@gmail.com"
                {...register("email", { required: true })}
                type="text"
                placeholder="Enter email"
                startContent={
                  <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              {errors.email && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="w-full my-1">
              <h3 className="text-white text-small m-1">Group_name</h3>
              <Input
                // value="sun"
                isClearable
                {...register("group_name", { required: true })}
                type="text"
                placeholder="Enter group_name"
              />
              {errors.group_name && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.group_name.message}
                </div>
              )}
            </div>

            <div className="w-full my-1">
              <h3 className="text-white text-small m-1">Contact_number</h3>
              <Input
                isClearable
                {...register("contact_number", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Enter contact_number"
                startContent={
                  <AiOutlineNumber className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              {errors.contact_number && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.contact_number.message}
                </div>
              )}
            </div>

            <div className="w-full my-1">
              <h3 className="text-white text-small m-1">whatsapp_number</h3>
              <Input
                // value=""
                isClearable
                {...register("whatsapp_number", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Enter whatsapp_number"
                startContent={
                  <FaWhatsapp className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              {errors.whatsapp_number && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.whatsapp_number.message}
                </div>
              )}
            </div>

            <div className="w-full my-1">
              <h3 className="text-white text-small m-1">Total_unit</h3>
              <Input
                isClearable
                {...register("total_unit", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Enter total_unit"
              />
              {errors.total_unit && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.total_unit.message}
                </div>
              )}
            </div>

            <div className="w-full my-1">
              <h3 className="text-white text-small m-1">Plot_Size</h3>
              <div className="flex">
                <Input
                  className="w-[80%] mx-1"
                  isClearable
                  {...register("Plot_Size", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Enter Plot_Size"
                  startContent={
                    <MdOutlinePhotoSizeSelectSmall className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
                {/* <h3 className="text-white text-small m-1">Size</h3>
                <Select
                  aria-label="fyt"
                  {...register("category")}
                  isRequired
                  defaultSelectedKeys={["SqFt"]}
                  className="max-w-xs w-[20%]"
                >
                  {["SqFt", "Sqmeter"].map((el) => (
                    <SelectItem key={el} value={el}>
                      {el}
                    </SelectItem>
                  ))}
                </Select> */}
              </div>
              {errors.Plot_Size && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  {errors.Plot_Size.message}
                </div>
              )}
            </div>

            {/* <div className="w-full my-1">
              <h3 className="text-white text-small m-1">Near_by_Places</h3>
              <Autocomplete aria-label="test">
                {areaName.map((el) => (
                  <AutocompleteItem key={el} value={el}>
                    {el}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
              {errors.Near_by_Places && (
                <div className="text-red-700 text-sm my-1 mx-2">
                  This field is required
                </div>
              )}
            </div> */}
            <div className="w-full my-1">
              <h3 className="text-white text-small m-1">Price_range</h3>
              <Slider
                label="Price Range (in Lakhs)"
                step={1}
                minValue={0}
                maxValue={99}
                defaultValue={[1, 99]}
                formatOptions={{ style: "currency", currency: "INR" }}
                className=" text-white w-full"
              />
              {/* {errors.Near_by_Places && (
                <div className="text-red-700 text-sm my-1 mx-2 ">
                  {errors.Price_range.message}
                </div>
              )} */}
            </div>

            <br />
          </div>
          <input
            className="bg-slate-400 text-white p-2 rounded-xl"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
