"use client";
import { Close, KeyboardArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { invoices, withdrawList } from "./invoiceData";
import AccountCheckModal from "./AccountCheckModal";
import WithdrawModal from "./WithdrawModal";

const Invoice = () => {
  const [withdrawStep, setWithdrawStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const handleToggleItem = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((item) => item !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  return (
    <div className="flex flex-col items-center w-full space-y-8 p-7">
      <span className="text-[27px] font-bold w-full">Home</span>
      <div className="flex items-center justify-center w-full h-full">
        <div
          id="left"
          className="flex flex-col items-center justify-between w-1/2 min-h-[500px] m-5 h-full space-y-5 text-white shadow-xl rounded-xl bg-gradient-to-tr from-pink-600 via-purple-500 to-indigo-800"
        >
          <div className="flex flex-col items-center pt-12">
            <span className="text-[15px]">Main · EUR</span>
            <span className="text-[38px] font-bold">200.87€</span>
          </div>
          {withdrawStep === 1 && (
            <>
              <span className="text-[15px] px-3 py-2 bg-[#ffffff31] rounded-lg hover:bg-[#ffffff71] cursor-pointer transition-all duration-30">
                Accounts
              </span>
              <div className="flex justify-between w-3/5">
                <div className="flex flex-col items-center w-1/3 space-y-2">
                  <span className="px-5 py-3 rounded-xl bg-[#ffffff31] hover:bg-[#ffffff71] cursor-pointer transition-all duration-300">
                    +
                  </span>
                  <span>New Invoice</span>
                </div>
                <div
                  onClick={() => setWithdrawStep(2)}
                  className="flex flex-col items-center w-1/3 space-y-2"
                >
                  <span className="px-5 py-3 rounded-xl bg-[#ffffff31] hover:bg-[#ffffff71] cursor-pointer transition-all duration-300">
                    {"->"}
                  </span>
                  <span>Withdraw</span>
                </div>
                <div className="flex flex-col items-center w-1/3 space-y-2">
                  <span className="px-5 py-3 rounded-xl bg-[#ffffff31] hover:bg-[#ffffff71] cursor-pointer transition-all duration-300">
                    ...
                  </span>
                  <span>More</span>
                </div>
              </div>
            </>
          )}
          <div className="w-full h-full p-5 space-y-2 overflow-y-scroll text-black bg-white rounded-xl">
            <div className="flex items-center justify-between w-full p-1 bg-gray-100 rounded-xl">
              <div className="w-[49%] text-center py-2 rounded-xl bg-white">
                Your Milestones
              </div>
              <div className="w-[49%] text-center py-2 rounded-xl">Next</div>
            </div>
            {withdrawStep === 1
              ? invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between px-3 py-2 text-[13px]"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-violet-500" />
                      <div className="flex flex-col">
                        <span>{invoice.name}</span>
                        <span className="text-gray-400">{invoice.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2 py-1 ${
                          invoice.credit
                            ? "text-green-500 bg-green-100 border border-green-500 rounded-full"
                            : "text-red-500 bg-red-100 border border-red-500 rounded-full"
                        }`}
                      >
                        {invoice.status}
                      </span>
                      <span>{invoice.amount}</span>
                      <KeyboardArrowRightOutlined />
                    </div>
                  </div>
                ))
              : withdrawList.map((invoice) => (
                  <div
                    key={invoice.id}
                    className={`flex items-center justify-between text-[13px] px-3 py-2 rounded-xl ${
                      selectedItems.includes(invoice.id) ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-violet-500" />
                      <div className="flex flex-col">
                        <span>{invoice.name}</span>
                        <span className="text-gray-400">{invoice.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2 py-1 ${
                          invoice.credit
                            ? "text-green-800 bg-green-100 border border-green-800 rounded-lg text-[12px]"
                            : "text-red-800 bg-red-100 border border-red-800 rounded-lg text-[12px]"
                        }`}
                      >
                        {invoice.status}
                      </span>
                      <span>{invoice.amount}</span>
                      <input
                        type="checkbox"
                        onChange={() => handleToggleItem(invoice.id)}
                        checked={selectedItems.includes(invoice.id)}
                      />
                    </div>
                  </div>
                ))}
            {withdrawStep > 1 && (
              <div
                onClick={() => setWithdrawStep(3)}
                className="w-full p-3 text-center text-white cursor-pointer rounded-xl bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400"
              >
                Confirm
              </div>
            )}
          </div>
        </div>
        {withdrawStep > 2 && (
          <div
            id="right"
            className={`relative flex flex-col justify-between w-1/2 h-full m-5 ${
              openModal || withdrawModalOpen ? "bg-gray-200" : "bg-white"
            } shadow-xl rounded-xl`}
          >
            <div
              className={`absolute w-8 h-8 rotate-45 ${
                openModal || withdrawModalOpen ? "bg-gray-200" : "bg-white"
              } top-[50%] left-[-16px]`}
            />
            {openModal && (
              <AccountCheckModal
                setOpenModal={setOpenModal}
                setWithdrawStep={setWithdrawStep}
              />
            )}
            {withdrawModalOpen && (
              <WithdrawModal
                setWithdrawModalOpen={setWithdrawModalOpen}
                setWithdrawStep={setWithdrawStep}
                withdrawStep={withdrawStep}
              />
            )}
            <div className="flex flex-col w-full p-10 space-y-4">
              <div className="flex items-center justify-between w-full">
                <span className="text-[21px] font-bold">Withdraw money</span>
                <div className="flex items-center space-x-3">
                  <span>1 of 2</span>
                  <Close />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div
                  className={`w-[49%] h-[5px] rounded-full ${
                    withdrawStep > 2 ? "bg-amber-400" : "bg-gray-400"
                  }`}
                />
                <div
                  className={`w-[49%] h-[5px] rounded-full ${
                    withdrawStep > 3 ? "bg-amber-400" : "bg-gray-400"
                  }`}
                />
              </div>
              {withdrawStep < 4 && (
                <>
                  <span className="text-[17px]">Choose Account</span>
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex justify-between px-3 py-2 bg-gray-100 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-violet-600" />
                        <span>Account 01</span>
                      </div>
                      <input type="radio" checked />
                    </div>
                    <div className="flex justify-between px-3 py-2 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-violet-600" />
                        <span>Account 02</span>
                      </div>
                      <input type="radio" />
                    </div>
                    <div className="flex justify-between px-3 py-2 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-violet-600" />
                        <span>Account 03</span>
                      </div>
                      <input type="radio" />
                    </div>
                  </div>
                </>
              )}
              {withdrawStep === 4 && (
                <>
                  <span className="text-[17px]">Your Withdrawal</span>
                  <div className="flex flex-col w-full bg-gray-100 rounded-xl">
                    <div className="flex items-center justify-between w-full p-3 border-b-2 border-white">
                      <span>Dealflow Fee</span>
                      <span>123</span>
                    </div>
                    <div className="flex items-center justify-between w-full p-3">
                      <span>Your Payout</span>
                      <span>456</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full bg-gray-100 rounded-xl">
                    <div className="flex items-center justify-between w-full p-3 border-b-2 border-white">
                      <span>Your Recieve</span>
                      <span>123</span>
                    </div>
                    <div className="flex items-center justify-between w-full p-3">
                      <span>They Recieve</span>
                      <span>456</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center justify-between w-full p-10">
              <div className="w-[49%] text-center cursor-pointer rounded-full bg-gray-100 py-3">
                Edit
              </div>
              <div
                onClick={() => {
                  withdrawStep < 4 && setOpenModal(true);
                  withdrawStep === 4 && setWithdrawModalOpen(true);
                }}
                className="w-[49%] text-center cursor-pointer text-white rounded-full bg-gradient-to-l from-[#fac5c6] to-[#C655CE] py-3"
              >
                Next
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice;
