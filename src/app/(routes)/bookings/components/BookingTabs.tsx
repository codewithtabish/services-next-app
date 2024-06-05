"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function BookingTabs({ booked }: any) {
  console.log(booked);
  return (
    <Tabs defaultValue="Booked" className="max-w-5xl min-w-5xl mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Booked">Booked</TabsTrigger>
        <TabsTrigger value="Completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="Booked">
        <Card>
          <CardHeader>
            <CardTitle>Booked</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you`re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              {booked?.bookings?.map((item: any, index: any) => {
                console.log(item);
                return (
                  <Link key={index} href={"/"}>
                    <Image
                      src={item?.services[index]?.servicImages[index]?.url}
                      width={400}
                      height={300}
                      alt="service image"
                    />
                    <div>
                      <h3 className="text-gray-700 text-xl">
                        {item.services[index]?.serviceName}
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deserunt, iste.
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Completed">
        <Card>
          <CardHeader>
            <CardTitle>Completed</CardTitle>
            <CardDescription>
              Change your password here. After saving, you`ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
