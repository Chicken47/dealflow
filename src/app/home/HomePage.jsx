"use client";

import { KeyboardArrowLeftOutlined, SearchOutlined } from "@mui/icons-material";
import { useState } from "react";
import General from "./General";
import Design from "./Design";

const HomePage = () => {
  const [tabName, setTabName] = useState("gen");
  const [showProfile, setShowProfile] = useState(false);
  const tabs = [
    { name: "General", value: "gen" },
    { name: "Design Studio", value: "design" },
    { name: "Team", value: "team" },
    { name: "Subscription", value: "subscription" },
    { name: "Billing & Bank", value: "billing" },
    { name: "Ambassador", value: "ambassador" },
  ];
  return (
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
          {tabs.map((tab) => (
            <div
              key={tab.value}
              onClick={() => setTabName(tab.value)}
              className={`${
                tabName === tab.value ? "text-black" : "text-gray-300"
              } cursor-pointer font-medium text-[17px]`}
            >
              {tab.name}
            </div>
          ))}
        </div>
      )}
      {tabName === "gen" && (
        <General showProfile={showProfile} setShowProfile={setShowProfile} />
      )}
      {tabName === "design" && <Design />}
    </div>
  );
};

export default HomePage;
