import { Check, Close, RefreshOutlined } from "@mui/icons-material";
import React from "react";

const WithdrawModal = ({
  setWithdrawModalOpen,
  setWithdrawStep,
  withdrawStep,
}) => {
  return (
    <div className="absolute z-50 flex items-center justify-center w-full h-full px-10 py-40 rounded-xl">
      {withdrawStep === 5 ? (
        <div className="flex flex-col items-center justify-between w-full p-5 space-y-10 bg-white rounded-xl">
          <div className="flex flex-col items-center w-full space-y-4">
            <span className="flex justify-end w-full">
              <span
                onClick={() => setWithdrawModalOpen(false)}
                className="cursor-pointer"
              >
                <Close />
              </span>
            </span>
            <span className="">
              <Check />
            </span>
            <span className="text-[21px] font-bold">Success!</span>
          </div>
          <div
            onClick={() => {
              setWithdrawStep(1);
            }}
            className="w-full py-3 text-center cursor-pointer bg-gradient-to-l from-[#fac5c6] to-[#C655CE] text-white rounded-full"
          >
            Finish
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between w-full p-5 space-y-10 bg-white rounded-xl">
          <div className="flex flex-col items-center w-full space-y-4">
            <span className="flex justify-end w-full">
              <span
                onClick={() => setWithdrawModalOpen(false)}
                className="cursor-pointer"
              >
                <Close />
              </span>
            </span>
            <span className="animate-spin">
              <RefreshOutlined />
            </span>
            <span className="text-[21px] font-bold">Processing</span>
          </div>
          <div
            onClick={() => {
              setWithdrawStep(5);
            }}
            className="w-full py-3 text-center cursor-pointer bg-gradient-to-l from-[#fac5c6] to-[#C655CE] text-white rounded-full"
          >
            Finish
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawModal;
