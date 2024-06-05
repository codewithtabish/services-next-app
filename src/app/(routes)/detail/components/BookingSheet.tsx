"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import timeSlots from "@/utils/timeSlots";
import globalApi from "@/services/globalApi";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function BookingSheet({ children, service }: any) {
  const [date, setDate] = React.useState<Date | undefined | any>(new Date());
  const [selectedCTime, setSelectedCTime] = useState<any>();
  const { isLoaded: userloading, user } = useUser();

  const handleSelectedTime = (time: any) => {
    selectedCTime === time ? "" : setSelectedCTime(time);
    // setSelectedCTime(time);
  };
  const handlePlaceOrder = async () => {
    // const date = new Date("2024-06-04T19:41:00.000Z");
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date
      .getFullYear()
      .toString()
      .slice(-2)}`;
    // console.log(formattedDate); // Output: 4/6/24
    // return;

    // return;
    // console.log(service.id);
    // console.log(user);
    try {
      const response = await globalApi.createNewBooking(
        service.id,
        user?.fullName,
        user?.emailAddresses,
        formattedDate,
        selectedCTime
      );
      // @ts-ignore
      if (response.createBooking?.id) {
        toast("Order has been placed.");
        setDate("");
        setSelectedCTime("");

        // toast.success("Order placed Successfully ...");
      }
    } catch (error: any) {
      toast(error);
      //   toast.error(error);
    }

    // console.log(response?.createBooking?.id);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Book An Appointment?</SheetTitle>
          <SheetDescription>
            Select Date and Time to book an appointement
            <div className="my-5">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border "
              />
            </div>
            <h2 className="text-xl font-outfit font-semibold my-3">
              Select Date and Time
            </h2>
            <div className="flex flex-row flex-wrap gap-4 items-center my-4">
              {timeSlots.timeSlots.map((item: any, index: any) => {
                return (
                  <Button
                    className={`${selectedCTime === item ? "text-white" : ""}`}
                    variant={selectedCTime === item ? "default" : "outline"}
                    key={index}
                    onClick={() => handleSelectedTime(item)}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="w-full text-white"
              disabled={!(date && selectedCTime)}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
