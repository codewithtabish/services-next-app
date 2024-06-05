"use client";
import { Clock, Mail, MapPin, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServiceInfo = ({ service }: any) => {
  return (
    <div
      className="flex md:flex-row justify-between items-center
    flex-col
    md:gap-2 gap-4"
    >
      <div className="flex md:flex-row flex-col gap-2  flex-1">
        <Image
          src={service?.servicImages[0]?.url}
          alt={service?.serviceName}
          width={160}
          height={150}
          className="rounded-full h-[150px] object-cover"
        />
        <div className="flex flex-col items-baseline gap-1">
          <span
            className="bg-gray-500  my-2 text-white p-1
          px-2
                 rounded-full text-[10px] italic
                 
              "
          >
            {service.category.categoryName}
          </span>
          <h2 className="font-outfit font-semibold">{service?.serviceName}</h2>
          <div className="flex flex-row gap-1 items-center">
            <MapPin className="text-gray-500" />
            <span className="text-gray-500 italic font-mono">
              {service.serviceAddress}
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Mail className="text-gray-500" />
            <span className="text-gray-500 italic font-mono">
              {service.email}
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex-1 flex flex-col gap-2  justify-end 
      items-end"
      >
        <div
          className="p-2 bg-gray-500 w-10 flex justify-center items-center cursor-pointer h-10 rounded-full
          text-center
        md:mr-4 md:block hidden"
        >
          <Share2 className="text-white " size={25} />
        </div>
        <span
          className="text-primary font-black text-center font-outfit
        "
        >
          {service?.contactPerson}
        </span>
        <div
          className="text-gray-500 text-sm
        flex flex-row gap-2 items-center
        text-[11px] "
        >
          <Clock />
          <span> 8:00 Am to 11 Pm</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
