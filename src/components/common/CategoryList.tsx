`use client`;
import globalApi from "@/services/globalApi";
import { Radiation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setcategories] = useState<any>([]);
  const [isShowed, setisShowed] = useState(true);

  useEffect(() => {
    getAllCats();

    return () => {};
  }, []);

  const getAllCats = async () => {
    const data = await globalApi.getAllCategories();
    // @ts-ignore
    setcategories(data?.categories);
    setisShowed(false);
  };

  return (
    <div className="flex justify-center items-center flex-row gap-5 py-8 px-5 md:px-5">
      <div className="flex justify-center items-center flex-row gap-4 ">
        {categories.map((item: any, index: any) => {
          return (
            <Link
              href={`/search/${item.categoryName}`}
              key={index}
              className={`p-4 cursor-pointer flex justify-center items-center flex-col gap-2  rounded-lg self-center 
              hover:scale-95 transition-all ease-in-out hover:border-none border-2 border-gray-200 dark:border-none`}
              style={
                {
                  //   backgroundColor: item.bgColor,
                }
              }
            >
              {/* <Radiation size={40} className="text-primary" /> */}
              <Image
                src={item.categoryIcon.url}
                alt="category Image"
                width={40}
                height={40}
                className="w-14 h-12 object-cover rounded-lg"
              />
              <span className="text-[10px]">{item.categoryName}</span>
            </Link>
          );
        })}
        {isShowed
          ? [1, 2, 3].map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-20 w-20 bg-slate-100 animate-pulse dark:bg-gray-600"
                ></div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default CategoryList;
