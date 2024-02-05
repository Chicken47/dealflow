"use client";

import {
  AddCircleOutline,
  ChatOutlined,
  ElectricBolt,
  HexagonOutlined,
  KeyboardArrowRight,
  NotificationsOutlined,
  PeopleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";
import React from "react";

const Header = ({ sidebarTab, setSidebarTab }) => {
  const items = [
    { icon: <AddCircleOutline />, label: "Invoice", slug: "invoice" },
    { icon: <RemoveCircleOutline />, label: "Pay", slug: "pay" },
    { icon: <ElectricBolt />, label: "Financing", slug: "financing" },
    { icon: <PeopleOutline />, label: "Contacts", slug: "contacts" },
    { icon: <HexagonOutlined />, label: "Plugins", slug: "plugins" },
  ];
  return (
    <div className="flex flex-col items-center justify-between w-1/5 p-5 border-r-2 border-white lg:w-1/5">
      <div className="flex flex-col w-full">
        <div
          onClick={() => setSidebarTab("dealflow")}
          className={`flex items-center justify-between w-full p-3 transition-all duration-300 cursor-pointer hover:bg-gray-200 rounded-2xl ${
            sidebarTab === "dealflow" && "bg-gray-200"
          }`}
        >
          <div className="flex items-center text-[15px] space-x-3">
            <div className="h-[24px] w-[24px] bg-violet-500 rounded-full" />
            <span>Dealflow</span>
          </div>
          <div>
            <KeyboardArrowRight />
          </div>
        </div>
        <div className="flex flex-col text-[13px] mt-3 space-y-1">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full p-3 transition-all duration-300 cursor-pointer rounded-2xl hover:bg-gray-200 ${
                sidebarTab === item.slug && "bg-gray-200"
              }`}
              onClick={() => setSidebarTab(item.slug)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {index === 0 && (
                <div className="w-[12px] h-[12px] bg-violet-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full text-[13px] mt-3 space-y-1">
        <div className="flex items-center justify-between w-full p-3 rounded-2xl">
          <div className="flex items-center space-x-3">
            <ChatOutlined />
            <span>Chat</span>
          </div>
          <div className="w-[12px] h-[12px] bg-violet-500 rounded-full" />
        </div>
        <div className="flex items-center justify-between w-full p-3 rounded-2xl">
          <div className="flex items-center space-x-3">
            <NotificationsOutlined />
            <span>Notifications</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-3 py-4 rounded-2xl">
          <div className="flex items-center text-[15px] space-x-3">
            <div className="h-[24px] w-[24px] bg-violet-500 rounded-full" />
            <span>User</span>
          </div>
          <div>
            <KeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
