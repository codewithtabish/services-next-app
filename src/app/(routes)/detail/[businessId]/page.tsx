"use client";
import globalApi from "@/services/globalApi";
import { RedirectToSignIn, useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import ServiceInfo from "../components/ServiceInfo";
import ServiceDescription from "../components/ServiceDescription";
import ServiceSuggestion from "../components/ServiceSuggestion";

const SingleService = ({ params }: any) => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [service, setservice] = useState<any>();

  useEffect(() => {
    if (isLoaded && !userId) <RedirectToSignIn />;

    if (isLoaded && userId) {
      getServiceById(params.businessId);
    }

    return () => {};
  }, [params.businessId]);

  if (!isLoaded) {
    return null;
  }
  if (!userId) {
    return <RedirectToSignIn />;
  }
  const getServiceById = async (serviceId: any) => {
    const data = await globalApi.getServiceById(serviceId);
    // @ts-ignore
    setservice(data.service);
  };

  return (
    <div>
      <div
        className="py-12 md:py-20
      px-10 md:px-36"
      >
        {service && <ServiceInfo service={service} />}
      </div>
      <div
        className="md:grid md:grid-cols-4 
         px-10 md:px-36 gap-4 md:py-1
         flex flex-col
         "
      >
        <div className="  lg:col-span-3 col-span-4 md:pb-10">
          {service && <ServiceDescription service={service} />}
        </div>
        <div className="lg:block  md:pb-10">
          {service && <ServiceSuggestion service={service} />}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
