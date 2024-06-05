"use client";
import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex justify-center items-center min-h-[80vh]
     py-9 
    "
    >
      <SignIn
        appearance={{
          baseTheme: theme == "dark" ? dark : shadesOfPurple,
          variables: {
            colorBackground: theme === "dark" ? "#111827" : "#322d31",
          },
        }}
      />
    </div>
  );
}
