"use client";
import React, { useEffect, useState } from "react";
import BookingTabs from "./components/BookingTabs";
import globalApi from "@/services/globalApi";
import { useUser } from "@clerk/nextjs";

const MyBookingPage = () => {
  const [booked, setbooked] = useState();
  //   @ts-ignore
  const { isLoaded: userloading, user } = useUser<any>([]);

  useEffect(() => {
    user && getAllBookedSer();

    return () => {};
  }, [user]);

  const getAllBookedSer = async () => {
    // console.log(user?.primaryEmailAddress?.emailAddress);
    // @ts-ignore
    console.log(user?.primaryEmailAddress?.emailAddress as string);
    const data = await globalApi.getAllBookedServices(
      user?.primaryEmailAddress?.emailAddress as string
    );
    // @ts-ignore
    // );
  };

  return (
    <div className="">
      <BookingTabs booked={booked || []} />
    </div>
  );
};

export default MyBookingPage;
