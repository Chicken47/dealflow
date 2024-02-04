"use client";
import {
  Check,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import Header from "./components/Header";

export default function Home() {
  const [tabName, setTabName] = useState("design");
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className={`flex w-full min-h-screen bg-[#F5F6F8]`}>
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
        <div className="flex items-center w-full justify-evenly">
          <div className="w-1/2 m-3 p-10 bg-white min-h-[500px] rounded-2xl shadow-xl flex flex-col space-y-5">
            <div className="flex items-center justify-between w-full">
              <span className="text-[21px] font-medium">
                Your Profile Score
              </span>
              <span
                onClick={() => setShowProfile(true)}
                className="p-2 transition-all bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-105"
              >
                <KeyboardArrowRightOutlined sx={{ fontSize: "16px" }} />
              </span>
            </div>
            <div
              className={`flex text-[15px] p-5 py-7 flex-col w-full ${
                showProfile ? "h-[250px]" : "h-[350px]"
              } mt-12 bg-gray-100 rounded-xl`}
            >
              <div className="flex items-center justify-between w-full">
                <span>Instant payout without confirmation</span>
                <span>1-7 days</span>
              </div>
            </div>
            {showProfile && (
              <>
                <div className="flex items-center justify-between w-full p-1 bg-gray-100 rounded-xl">
                  <div className="w-[49%] text-center py-2 rounded-xl bg-white">
                    Your Milestones
                  </div>
                  <div className="w-[49%] text-center py-2 rounded-xl">
                    Next
                  </div>
                </div>
                <div className="flex justify-between w-full p-3 bg-gray-100 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Check sx={{ fontSize: "14px", fontWeight: "300" }} />
                    <div className="flex flex-col text-[13px] space-y-2">
                      <span>5 payments collected</span>
                      <span className="text-gray-400">
                        Description goes here
                      </span>
                    </div>
                  </div>
                  <span className="text-[13px] px-3">+ 100 points</span>
                </div>
                <div className="flex justify-between w-full p-3 bg-gray-100 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Check sx={{ fontSize: "14px", fontWeight: "300" }} />
                    <div className="flex flex-col text-[13px] space-y-2">
                      <span>ID verified</span>
                      <span className="text-gray-400">
                        Description goes here
                      </span>
                    </div>
                  </div>
                  <span className="text-[13px] px-3">+ 20 points</span>
                </div>
                <div className="flex justify-between w-full p-3 bg-gray-100 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Check sx={{ fontSize: "14px", fontWeight: "300" }} />
                    <div className="flex flex-col text-[13px] space-y-2">
                      <span>Title</span>
                      <span className="text-gray-400">
                        Description goes here
                      </span>
                    </div>
                  </div>
                  <span className="text-[13px] px-3">+ 20 points</span>
                </div>
              </>
            )}
          </div>
          {!showProfile && (
            <div className="w-1/2 m-3 p-10 bg-white h-[500px] rounded-2xl shadow-xl flex flex-col">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center text-[15px] space-x-3">
                  <div className="h-[24px] w-[24px] bg-violet-500 rounded-full" />
                  <span className="text-[21px] font-medium">
                    Company Details
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[12px] text-[#C655CE] px-3 py-2 rounded-full bg-gray-100">
                    Verified
                  </span>
                  <KeyboardArrowRightOutlined sx={{ fontSize: "16px" }} />
                </div>
              </div>
              <div className="flex text-[14px] justify-between flex-col w-full h-full mt-10 rounded-xl">
                <input
                  placeholder="Company Name"
                  className="p-3 px-5 bg-gray-100 rounded-full"
                />
                <input
                  placeholder="Company ID"
                  className="p-3 px-5 bg-gray-100 rounded-full"
                />
                <div className="flex items-center justify-between w-full">
                  <input
                    placeholder="email@company.com"
                    className="p-3 px-5 bg-gray-100 rounded-full w-[49%]"
                  />
                  <input
                    placeholder="Company Type"
                    className="p-3 px-5 bg-gray-100 rounded-full w-[49%]"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <input
                    placeholder="Denmark"
                    className="p-3 px-5 bg-gray-100 rounded-full w-[49%]"
                  />
                  <input
                    placeholder="Copenhagen"
                    className="p-3 px-5 bg-gray-100 rounded-full w-[49%]"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <input
                    placeholder="Street Address"
                    className="p-3 px-5 bg-gray-100 rounded-full w-[49%]"
                  />
                  <input
                    placeholder="Postal Code"
                    className="p-3 px-5 bg-gray-100 rounded-full w-[49%]"
                  />
                </div>
                <input
                  placeholder="State / province / region"
                  className="p-3 px-5 bg-gray-100 rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
