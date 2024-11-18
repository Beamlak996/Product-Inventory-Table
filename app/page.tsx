"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Card } from "@/components/ui/card";

import { AppHeader } from "@/components/layouts/app-header";
import { AppTable } from "@/components/table/app-table";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-50";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`p-5 ${bgColor} border w-full min-h-screen`}>
      <Card
        className="flex flex-col shadow-none
      p-2"
      >
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  );
}
