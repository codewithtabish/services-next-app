import globalApi from "@/services/globalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ServiceSuggestion = ({ service }: any) => {
  const [businessCategory, setbusinessCategory] = useState<any>();
  const [isShowed, setisShowed] = useState(true);
  useEffect(() => {
    service && getData();
    return () => {};
  }, [service.category.categoryName]);

  const getData = async () => {
    console.log(service.category.categoryName);
    const data = await globalApi.getServicesByCategory(
      service.category.categoryName
    );
    //  @ts-ignore
    // @ts-ignore
    setbusinessCategory(data.services);
    console.log(businessCategory);
    setisShowed(false);
    console.log(data);
  };

  return (
    <div
      className="font-mono text-xl flex flex-col gap-4
    md:py-2 py-10"
    >
      {businessCategory
        ?.filter((item: any, index: any) => item.id.toString() !== service.id)
        .map((item: any, index: any) => {
          return (
            <Link
              href={`/detail/${item.id}`}
              key={index}
              className="flex flex-row gap-2"
            >
              <Image
                src={item.servicImages[0].url}
                width={80}
                height={80}
                alt="item imaghe"
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                {/* <h2 className="text-xl font-outfit">
                {item?.category.categoryName}
              </h2> */}
                <h4 className="text-gray-400 text-sm">{item?.serviceName}</h4>
                <span className="text-sm text-primary">
                  {item.contactPerson}
                </span>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ServiceSuggestion;
