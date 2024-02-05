"use client";

import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import HomePage from "./home/HomePage";
import { useState } from "react";
import Invoice from "./home/Invoice";

export default function Home() {
  const [sidebarTab, setSidebarTab] = useState("dealflow");
  return (
    <RecoilRoot>
      <div className={`flex w-full min-h-screen bg-[#F5F6F8] text-[14px]`}>
        <Header sidebarTab={sidebarTab} setSidebarTab={setSidebarTab} />
        {sidebarTab === "dealflow" && <HomePage />}
        {sidebarTab === "invoice" && <Invoice />}
      </div>
    </RecoilRoot>
  );
}
