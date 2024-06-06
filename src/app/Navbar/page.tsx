"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { register } from "module";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  function handelChangePage(event: ChangeEvent<HTMLSelectElement>) {
    router.push(event.target.value);
  }
  const [initial] = useState([
    "React_hook_form_zod",
    "/",
    "Sadcn_ui_library",
    "Zustand_state_library",
  ]);
  useEffect(() => {
    initial[0] === "React_hook_form_zod"
      ? router.push("React_hook_form_zod")
      : router.push("/");
  }, []);
  return (
    <div className="bg-slate-400 py-3 px-4 fixed w-full z-10">
      <Select
        aria-label="text"
        className="bg-slate-400 max-w-xs w-[20%]"
        onChange={handelChangePage}
        defaultSelectedKeys={["React_hook_form_zod"]}
      >
        {initial.map((el) => (
          <SelectItem key={el} value={el}>
            {el === "/" ? "Other" : el}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default Navbar;
