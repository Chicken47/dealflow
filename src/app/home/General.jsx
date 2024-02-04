"use client";
import React from "react";
import {
  Check,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  SearchOutlined,
} from "@mui/icons-material";

const General = ({ setShowProfile, showProfile }) => {
  return (
    <div className="flex items-center w-full justify-evenly">
      <div className="w-1/2 m-3 p-8 bg-white min-h-[500px] rounded-2xl shadow-xl flex flex-col space-y-5">
        <div className="flex items-center justify-between w-full">
          <span className="text-[21px] font-medium">
            {showProfile ? "Your Score" : "Your Profile Score"}
          </span>
          {!showProfile && (
            <span
              onClick={() => setShowProfile(true)}
              className="p-2 transition-all bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-105"
            >
              <KeyboardArrowRightOutlined sx={{ fontSize: "16px" }} />
            </span>
          )}
        </div>
        <div
          className={`flex text-[15px] p-5 py-7 flex-col w-full ${
            showProfile ? "h-[250px]" : "h-[400px]"
          } mt-12 bg-gray-100 rounded-xl `}
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
              <div className="w-[49%] text-center py-2 rounded-xl">Next</div>
            </div>
            <div className="flex justify-between w-full p-3 bg-gray-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <Check sx={{ fontSize: "14px", fontWeight: "300" }} />
                <div className="flex flex-col text-[13px] space-y-2">
                  <span>5 payments collected</span>
                  <span className="text-gray-400">Description goes here</span>
                </div>
              </div>
              <span className="text-[13px] px-3">+ 100 points</span>
            </div>
            <div className="flex justify-between w-full p-3 bg-gray-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <Check sx={{ fontSize: "14px", fontWeight: "300" }} />
                <div className="flex flex-col text-[13px] space-y-2">
                  <span>ID verified</span>
                  <span className="text-gray-400">Description goes here</span>
                </div>
              </div>
              <span className="text-[13px] px-3">+ 20 points</span>
            </div>
            <div className="flex justify-between w-full p-3 bg-gray-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <Check sx={{ fontSize: "14px", fontWeight: "300" }} />
                <div className="flex flex-col text-[13px] space-y-2">
                  <span>Title</span>
                  <span className="text-gray-400">Description goes here</span>
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
              <span className="text-[21px] font-medium">Company Details</span>
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
  );
};

export default General;
