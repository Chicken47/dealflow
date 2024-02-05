"use client";

import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import { HuePicker } from "react-color";
import { Switch } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { imagesArray, invoiceDetails } from "../atom";

const Design = () => {
  const [color, setColor] = useState("#d800ff");
  const [showPersonalName, setShowPersonalName] = useState(true);
  const [showCompanyName, setShowCompanyName] = useState(true);
  const [images, setImages] = useRecoilState(imagesArray);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const invoiceData = useRecoilValue(invoiceDetails);

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setImages([...images, uploadedImage]);
  };
  return (
    <div className="flex items-center justify-between w-full h-full">
      <div className="w-[49%] flex flex-col bg-white p-5 h-full rounded-xl shadow-xl justify-between space-y-3">
        <span className="text-[21px] font-medium ">Choose your style</span>
        <div className="flex items-center w-full p-3 bg-gray-100 rounded-xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Image ${index + 1}`}
              className={`w-16 h-16 mr-2 transition-all bg-white  rounded-full cursor-pointer hover:scale-105 ${
                selectedImageIndex === index
                  ? `border-4 border-amber-400`
                  : "border border-gray-300"
              }`}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
          {images.length < 5 && (
            <div className="flex items-center justify-center w-16 h-16 transition-all border-2 border-white rounded-full cursor-pointer hover:scale-105">
              <label htmlFor="images">
                <AddCircleOutline />
              </label>
              <input
                type="file"
                className="hidden"
                id="images"
                onChange={handleImageUpload}
              />
            </div>
          )}
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
            <HuePicker color={color} onChange={(e) => setColor(e.hex)} />
          </div>
        </div>
        <div className="flex flex-col w-full bg-gray-100 rounded-xl">
          <div className="flex items-center justify-between w-full p-3 border-b-2 border-white">
            <span>Display Personal Name</span>
            <Switch
              checked={showPersonalName}
              onChange={() => setShowPersonalName(!showPersonalName)}
            />
          </div>
          <div className="flex items-center justify-between w-full p-3">
            <span>Display Company Name</span>
            <Switch
              checked={showCompanyName}
              onChange={() => setShowCompanyName(!showCompanyName)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between max-w-full overflow-hidden">
          <img src="/form.png" className="w-[30%]" />
          <img src="/form.png" className="w-[30%]" />
          <img src="/form.png" className="w-[30%]" />
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
            {images.length > 0 ? (
              <img
                src={URL.createObjectURL(images[selectedImageIndex])}
                className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300 bg-white"
              />
            ) : (
              <div
                className="w-[60px] h-[60px] rounded-full"
                style={{ backgroundColor: color }}
              />
            )}
            <span className="font-bold text-[24px]">Invoice</span>
          </div>
          <div className="flex items-center z-30 text-[12px] justify-between w-full">
            <div className="flex flex-col space-y-1">
              {showCompanyName && (
                <span className="font-bold">
                  {invoiceData?.companyName
                    ? invoiceData?.companyName
                    : "Company Name"}
                </span>
              )}
              <span className="">
                {invoiceData?.companyId ? invoiceData?.companyId : "Company ID"}
              </span>
              <span className="">
                {invoiceData?.email ? invoiceData?.email : "Company Email"}
              </span>
              <span className="">
                {invoiceData?.companyType
                  ? invoiceData?.companyType
                  : "Company Type"}
              </span>
              <span className="">
                {invoiceData?.country
                  ? invoiceData?.country
                  : "Company Country"}
              </span>
              <span className="">
                {invoiceData?.city ? invoiceData?.city : "Company City"}
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              {showPersonalName && (
                <span className="font-bold">Akshit Aryanator</span>
              )}
              <span>aryan@dealflow.com</span>
              <span className="">
                {invoiceData?.streetAddress
                  ? invoiceData?.streetAddress
                  : "Company Street Address"}
              </span>
              <span className="">
                {invoiceData?.postalCode
                  ? invoiceData?.postalCode
                  : "Postal Code"}
              </span>
              <span className="">
                {invoiceData?.stateProvinceRegion
                  ? invoiceData?.stateProvinceRegion
                  : "State/Provice/Region"}
              </span>
            </div>
          </div>
          <span className="font-medium z-30 text-[13px]">
            Rupees 300,000 owed to Gotham on or before 16th Dec, 2028.
          </span>
          <span className="text-[10px] z-30">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </span>
          <div className="flex pt-5 items-center z-30 text-[10px] justify-between w-full">
            <div className="flex flex-col space-y-1">
              <span>Bank Name:</span>
              <span>Bank Address:</span>
              <span>Account Name: </span>
              <span>IBAN: </span>
            </div>
            <div className="flex flex-col space-y-1">
              <span>Bank Of Canada</span>
              <span>Maple Lane, Syrup Street</span>
              <span>Houser Smiley</span>
              <span>1231231231</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
