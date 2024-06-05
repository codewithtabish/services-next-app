import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import BookingSheet from "./BookingSheet";

const ServiceDescription = ({ service }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold ">Descreption</h2>
      <p className="dark:text-gray-400 text-gray-800 font-display">
        {" "}
        {service.aboutService}
      </p>
      <h2 className="font-outfit font-semibold py-2 mt-4">Gallery</h2>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-4 "
      >
        {service.servicImages.map((item: any, index: any) => {
          return (
            <div key={index}>
              <Image
                width={700}
                height={200}
                alt="service image"
                src={item.url}
                className="rounded-md object-cover"
              />
            </div>
          );
        })}
      </div>

      <BookingSheet service={service}>
        <Button className="my-10">
          <span className="text-white ">Book Appointemnt</span>
        </Button>
        {/* <Button variant="outline">Book Appointemnt</Button> */}
      </BookingSheet>
    </div>
  );
};

export default ServiceDescription;
