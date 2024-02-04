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

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between w-1/5 p-5 border-r-2 border-white lg:w-1/5">
      <div className="flex flex-col w-full">
        <div className="flex w-full items-center justify-between p-3 bg-[#efefef] rounded-2xl">
          <div className="flex items-center text-[15px] space-x-3">
            <div className="h-[24px] w-[24px] bg-violet-500 rounded-full" />
            <span>Dealflow</span>
          </div>
          <div>
            <KeyboardArrowRight />
          </div>
        </div>
        <div className="flex flex-col text-[13px] mt-3 space-y-1">
          <div className="flex items-center justify-between w-full p-3 rounded-2xl">
            <div className="flex items-center space-x-3">
              <AddCircleOutline />
              <span>Invoice</span>
            </div>
            <div className="w-[12px] h-[12px] bg-violet-500 rounded-full" />
          </div>
          <div className="flex items-center justify-between w-full p-3 rounded-2xl">
            <div className="flex items-center space-x-3">
              <RemoveCircleOutline />
              <span>Pay</span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full p-3 rounded-2xl">
            <div className="flex items-center space-x-3">
              <ElectricBolt />
              <span>Financing</span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full p-3 rounded-2xl">
            <div className="flex items-center space-x-3">
              <PeopleOutline />
              <span>Contacts</span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full p-3 rounded-2xl">
            <div className="flex items-center space-x-3">
              <HexagonOutlined />
              <span>Plugins</span>
            </div>
          </div>
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
