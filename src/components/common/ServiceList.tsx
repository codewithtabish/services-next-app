import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ServiceList = ({ serviceLoading, services, title, fromCat }: any) => {
  // console.log(services);
  // console.log(services.length);
  return (
    <div className={`flex   flex-col gap-4  ${fromCat ? "py-0" : "py-12"} `}>
      <h2
        className="text-4xl font-outfit dark:text-gray-300 my-2
      font-bold "
      >
        {" "}
        {title}
      </h2>
      <div
        className={`grid  ${
          fromCat ? "md:grid-cols-3" : "md:grid-cols-3 lg:grid-cols-4"
        } justify-center items-center
      sm:grid-cols-2 grid-cols-1  gap-5`}
      >
        {services?.map((item: any, index: any) => {
          return (
            <Link
              href={`/detail/${item.id}`}
              key={index}
              className="shadow-md rounded-lg p-2 cursor-pointer
              hover:scale-105 transition-all ease-in-out
              backdrop-blur-3xl dark:hover:bg-gray-800
              
              "
            >
              <Image
                className="h-[150px] md:h-[200px] object-cover
              rounded-lg mb-2 backdrop-blur-3xl"
                src={item.servicImages[0].url}
                width={500}
                height={200}
                alt="service image"
              />
              <span
                className="bg-gray-500  my-2 text-white p-1
                w-full rounded-full text-[10px] italic
              "
              >
                {item.category.categoryName}
              </span>
              <div className="my-1 p-1">
                <h2 className="text-xl font-outfit font-black">
                  {item.serviceName}
                </h2>
                <span
                  className="text-primary text-sm italic
                dark:text-gray-300 text-[10px]"
                >
                  {item?.contactPerson}
                </span>
                <span className="text-gray-600 text-sm block">
                  {item.serviceAddress}
                </span>
                <Button className="mt-2">
                  <span className="dark:text-gray-300">Book Now</span>
                </Button>
              </div>
            </Link>
          );
        })}
      </div>
      {serviceLoading && (
        <div className="flex flex-row justify-center items-center gap-4">
          {[1, 2, 3].map((item, index) => {
            return (
              <div
                className="min-w-[140px] min-h-[150px] bg-gray-100 dark:bg-gray-600 animate-pulse m-4
                rounded-md"
                key={index}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ServiceList;
