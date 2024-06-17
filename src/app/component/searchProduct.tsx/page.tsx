"use client";
import { Card, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
export default function SearchData({ data }) {
  const [filterdata, setFilterdata] = useState([]);
  function handleSearch(term: string) {
    const getseacrhdata = data.filter((item) =>
      item.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilterdata(getseacrhdata);
    console.log("filterdata:", filterdata);
  }
  //   useEffect(() => {
  //     handleSearch("");
  //   }, []);
  return (
    <div className="w-[80%] text-white">
      <Input
        type="text"
        placeholder="you@example.com"
        labelPlacement="outside"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        startContent={
          <FaSearchengin className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}
interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export function ContentSection({ getseacrhdata }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-12  w-10/12 m-auto">
      {getseacrhdata?.map((el: ProductData) => (
        <Card key={el?.id} data={el} />
      ))}
    </div>
  );
}
