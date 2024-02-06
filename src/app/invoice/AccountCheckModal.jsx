import { Close, QuestionMarkRounded } from "@mui/icons-material";
import React from "react";

const AccountCheckModal = ({ setOpenModal, setWithdrawStep }) => {
  return (
    <div className="absolute z-50 flex items-center justify-center w-full h-full px-10 py-40 rounded-xl">
      <div className="flex flex-col items-center justify-between w-full h-full p-5 bg-white rounded-xl">
        <div className="flex flex-col items-center w-full space-y-4">
          <span className="flex justify-end w-full">
            <span
              onClick={() => setOpenModal(false)}
              className="cursor-pointer"
            >
              <Close />
            </span>
          </span>
          <QuestionMarkRounded />
          <span className="text-[21px] font-bold">
            Is this the right account?
          </span>
        </div>
        <div
          onClick={() => {
            setOpenModal(false);
            setWithdrawStep(4);
          }}
          className="w-full py-3 text-center cursor-pointer bg-gradient-to-l from-[#fac5c6] to-[#C655CE] text-white rounded-full"
        >
          Confirm
        </div>
      </div>
    </div>
  );
};

export default AccountCheckModal;
