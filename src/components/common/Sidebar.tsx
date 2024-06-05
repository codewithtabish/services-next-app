"use client";
import globalApi from "@/services/globalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [categories, setcategories] = useState<any>([]);
  const [isShowed, setisShowed] = useState(true);
  const [selectedPath, setselectedPath] = useState<any>();
  const params = usePathname();
  console.log(params);

  useEffect(() => {
    getAllCats();

    return () => {};
  }, []);

  useEffect(() => {
    params && setselectedPath(params.split("/")[2]);
    return () => {};
  }, [selectedPath, params]);

  const getAllCats = async () => {
    const data = await globalApi.getAllCategories();
    //@ts-ignore
    // @ts-expect-error
    // @ts-nocheck
    setcategories(data?.categories);
    setisShowed(false);
  };

  const handleSelectedCategory = async (data: any) => {
    globalApi.getServicesByCategory(data);
  };
  return (
    <div className="flex flex-col gap-3">
      {categories?.map((item: any, index: any) => {
        console.log(selectedPath);
        return (
          <Link
            href={`/search/${item.categoryName}`}
            onClick={() => handleSelectedCategory(item.categoryName)}
            key={index}
            className={`flex  items-center flex-row gap-3
            border-gray-200
            hover:border-none
            hover:scale-110
            transition-all
            ease-in-out
            ${selectedPath === item.categoryName ? "bg-gray-400" : ""}
            border-2 dark:border-gray-500
            p-3 shadow-lg  cursor-pointer  rounded-lg`}
          >
            <Image
              src={item.categoryIcon.url}
              alt="cat image"
              width={30}
              height={30}
              className="object-cover"
            />
            <h3 className="font-outfit font-semibold">{item.categoryName}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
