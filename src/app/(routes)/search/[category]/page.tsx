"use client";
import ServiceList from "@/components/common/ServiceList";
import globalApi from "@/services/globalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ServiceCategory = ({ params }: any) => {
  const [businessCategory, setbusinessCategory] = useState();
  const [isShowed, setisShowed] = useState(true);
  useEffect(() => {
    params && getData();
    return () => {};
  }, []);

  const getData = async () => {
    const data = await globalApi.getServicesByCategory(params.category);
    //  @ts-ignore
    // @ts-ignore
    setbusinessCategory(data?.services);
    setisShowed(false);
  };

  return (
    <ServiceList
      services={businessCategory}
      serviceLoading={isShowed}
      title={params.category}
      fromCat={true}
    />
  );
};

export default ServiceCategory;
