"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  function handelChangePage(event: ChangeEvent<HTMLSelectElement>) {
    router.push(event.target.value);
  }
  const [initial] = useState(["/React-hook-form-zod", "/Ecommerce/Products"]);

  return (
    <div className=" fixed z-10">
      <Select
        aria-label="text"
        className=" rounded-2xl  w-[200px]"
        onChange={handelChangePage}
      >
        {initial.map((el) => (
          <SelectItem  key={el} value={el}>
            {el === "/" ? "Other" : el}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default Navbar;
