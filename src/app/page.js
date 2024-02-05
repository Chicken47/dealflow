"use client";

import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import HomePage from "./home/HomePage";

export default function Home() {
  return (
    <RecoilRoot>
      <div className={`flex w-full min-h-screen bg-[#F5F6F8] text-[14px]`}>
        <Header />
        <HomePage />
      </div>
    </RecoilRoot>
  );
}
