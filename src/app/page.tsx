"use client";
import CategoriesSearch from "@/components/common/CategoriesSearch";
import CategoryList from "@/components/common/CategoryList";
import HeroSection from "@/components/common/Hero";
import ServiceList from "@/components/common/ServiceList";
import globalApi from "@/services/globalApi";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [services, setservices] = useState();
  const [serviceLoading, setServiceLoading] = useState(true);
  useEffect(() => {
    const getServices = async () => {
      const data = await globalApi.getAllServices();
      setServiceLoading(false);
      // @ts-ignore
      setservices(data?.services);
      // console.log(data.services);
      // console.log(data.data.services.length);
    };
    getServices();

    return () => {};
  }, []);

  return (
    <div className="">
      <Suspense fallback={<div>This is loader</div>}>
        <HeroSection />
      </Suspense>
      <CategoriesSearch />
      <CategoryList />
      <ServiceList
        serviceLoading={serviceLoading}
        services={services || []}
        title="Popular Services"
        fromCat={false}
      />
    </div>
  );
}
