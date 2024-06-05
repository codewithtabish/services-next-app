"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="search doctor 💞"
        className="dark:bg-gray-700
  focus:outline-none
  focus:border-none
  focus:ring-red-300
  focus:outline-green-500
  focus:ring-0"
      />

      <Button type="submit" className="dark:text-gray-200 h-10">
        <Search className="dark:text-gray-300 mr-1" />
        Search
      </Button>
    </div>
  );
}
