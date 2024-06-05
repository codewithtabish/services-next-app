"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useId, useState } from "react";
import { Button } from "../ui/button";
import { Carrot, Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useAuth, UserButton, useUser } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
const menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 1,
    name: "Explore",
    path: "/",
  },
  {
    id: 1,
    name: "Contact Us",
    path: "/",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded: userloading, user } = useUser();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Make sure that the useUser() hook has loaded
  if (!isLoaded) return null;
  // Make sure there is valid user data
  // if (!user?.id) return null;

  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex gap-6 items-center flex-row">
        <Image src={"/logo.svg"} height={70} width={70} alt="logo Image" />
        <ul className=" flex-row items-center gap-4 hidden md:flex">
          {menu.map((item, index) => {
            return (
              <Link href={item.path} key={index}>
                <li className="font-serif font-medium text-gray-600 dark:text-gray-300">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row gap-3 items-center">
        {user?.emailAddresses && (
          <Link href={"/bookings"}>
            <Carrot size={30} />
          </Link>
        )}
        {theme == "dark" ? (
          <SunMoon
            size={30}
            className="cursor-pointer text-gray-300"
            onClick={changeTheme}
          />
        ) : (
          <Moon
            size={30}
            className="cursor-pointer text-gray-600"
            onClick={changeTheme}
          />
        )}

        {!userId ? (
          <Link href={"/sign-in"}>
            <Button className="dark:text-white">Get Started</Button>
          </Link>
        ) : (
          <UserButton
            appearance={{
              baseTheme: theme == "dark" ? dark : shadesOfPurple,
              variables: {
                colorBackground: theme === "dark" ? "#111827" : "#322d31",
              },
            }}
          >
            {dropdownVisible ? (
              <div>
                <ul>
                  <li>
                    <a href="#">Option 1</a>
                  </li>
                  <li>
                    <a href="#">Option 2</a>
                  </li>
                </ul>
              </div>
            ) : (
              <span>Username</span>
            )}
          </UserButton>
        )}
      </div>
    </div>
  );
};

export default Header;
