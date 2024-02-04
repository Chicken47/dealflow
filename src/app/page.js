"use client";
import {
  AddCircleOutline,
  KeyboardArrowLeftOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import Header from "./components/Header";
import General from "./home/General";
import { HuePicker } from "react-color";

export default function Home() {
  const [tabName, setTabName] = useState("gen");
  const [showProfile, setShowProfile] = useState(false);
  const [color, setColor] = useState("#d800ff");
  return (
    <div className={`flex w-full min-h-screen bg-[#F5F6F8] text-[14px]`}>
      <Header />
      <div className="flex flex-col w-full space-y-8 p-7">
        {showProfile ? (
          <div className="flex items-center justify-between w-full">
            <span className="text-[27px] font-bold flex items-center space-x-3">
              <span
                onClick={() => setShowProfile(false)}
                className="cursor-pointer"
              >
                <KeyboardArrowLeftOutlined />
              </span>
              <span> Profile Score</span>
            </span>
            <SearchOutlined />
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className="text-[27px] font-bold">Company Profile</span>
            <SearchOutlined />
          </div>
        )}
        {!showProfile && (
          <div className="z-50 flex items-center w-full space-x-5">
            <div
              onClick={() => setTabName("gen")}
              className={`${
                tabName === "gen" ? "text-black" : "text-gray-300"
              } cursor-pointer font-medium text-[17px]`}
            >
              General
            </div>
            <div
              onClick={() => setTabName("design")}
              className={`${
                tabName === "design" ? "text-black" : "text-gray-300"
              } cursor-pointer font-medium text-[17px]`}
            >
              Design Studio
            </div>
            <div
              onClick={() => setTabName("gen")}
              className={`${
                tabName === "team" ? "text-black" : "text-gray-300"
              } cursor-pointer font-medium text-[17px]`}
            >
              Team
            </div>
            <div
              onClick={() => setTabName("gen")}
              className={`${
                tabName === "subscription" ? "text-black" : "text-gray-300"
              } cursor-pointer font-medium text-[17px]`}
            >
              Subscription
            </div>
            <div
              onClick={() => setTabName("gen")}
              className={`${
                tabName === "billing" ? "text-black" : "text-gray-300"
              } cursor-pointer font-medium text-[17px]`}
            >
              Billing & Bank
            </div>
            <div
              onClick={() => setTabName("gen")}
              className={`${
                tabName === "ambassador" ? "text-black" : "text-gray-300"
              } cursor-pointer font-medium text-[17px]`}
            >
              Ambassador
            </div>
          </div>
        )}
        {tabName === "gen" && (
          <General showProfile={showProfile} setShowProfile={setShowProfile} />
        )}
        {tabName === "design" && (
          <div className="flex items-center justify-between w-full h-full">
            <div className="w-[49%] flex flex-col bg-white p-5 h-full rounded-xl shadow-xl space-y-3">
              <span className="text-[21px] font-medium ">
                Choose your style
              </span>
              <div className="flex w-full p-3 bg-gray-100 rounded-xl">
                <div className="w-[50px] h-[50px] rounded-full border-4 border-white flex justify-center items-center">
                  <AddCircleOutline />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="w-[33%] flex items-center text-[13px] justify-evenly p-3 rounded-xl bg-gray-100">
                  <div
                    className={`w-[24px] h-[24px] rounded-full`}
                    style={{ backgroundColor: color }}
                  />
                  <span>{color}</span>
                  <span className="text-gray-400"> HEX</span>
                </div>
                <div className="w-[65%] flex items-center text-[13px] justify-evenly p-3 h-full rounded-xl bg-gray-100">
                  {/* <input type="color" className="w-full" /> */}
                  <HuePicker color={color} onChange={(e) => setColor(e.hex)} />
                </div>
              </div>
              <div className="flex flex-col w-full bg-gray-100 rounded-xl">
                <div className="flex items-center justify-between w-full p-4 border-b-2 border-white">
                  <span>Display Personal Name</span>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between w-full p-4">
                  <span>Display Personal Name</span>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div className="w-[49%] bg-white h-full p-5 rounded-xl">
              <div className="relative flex flex-col w-full h-full p-5 space-y-3 overflow-hidden rounded-xl">
                <div
                  className="w-[300px] h-[300px] rounded-full absolute top-[-10vw] opacity-25 left-[-10vw]"
                  style={{ backgroundColor: color }}
                />
                <div
                  className="w-[150px] h-[150px] rounded-full absolute bottom-[-2vw] left-[-2vw] "
                  style={{ backgroundColor: color }}
                />
                <div
                  className="w-[200px] h-[200px] rounded-full opacity-50 absolute top-[50%] right-[-5vw] "
                  style={{ backgroundColor: color }}
                />
                <div className="z-30 flex items-center justify-between w-full">
                  <div
                    className="w-[60px] h-[60px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="font-bold text-[24px]">Invoice</span>
                </div>
                <div className="flex items-center z-30 text-[12px] justify-between w-full">
                  <div className="flex flex-col space-y-1">
                    <span className="font-bold">Aryan Engineering Inc</span>
                    <span>aryan@dealflow.com</span>
                    <span>This Street</span>
                    <span>That House</span>
                    <span>1231231231</span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span>Aryan Engineering Inc</span>
                    <span>aryan@dealflow.com</span>
                    <span>This Street</span>
                    <span>That House</span>
                    <span>1231231231</span>
                  </div>
                </div>
                <span className="font-medium z-30 text-[13px]">
                  Rupees 300,000 owed to Gotham on or before 16th Dec, 2028.
                </span>
                <span className="text-[10px] z-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
