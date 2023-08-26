import React from "react";
import { FaBuffer, FaCalendarAlt, FaLink, FaCalendar } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import LinkToModal from "../LinkToModal";
const Card = ({ item }) => {
  const {
    clientImage,
    clientName,
    personImage,
    personName,
    description,
    secondPersonImage,
    thirdPersonImage,
    messageCount,
    linkedCount,
    date,
    _id,
    type,
  } = item || {};

  return (
    <div className=" mx-auto  bg-white  rounded-md shadow-md  p-4 overflow-y-auto mt-5">
      <div className=" flex justify-between">
        <div className="flex items-center">
          <img src={clientImage} className="w-6 rounded-full" alt="" />
          <p className="text-[14px] font-semibold">{clientName}</p>
        </div>
        <div className="flex items-center">
          <img src={personImage} className="w-6 rounded-full" alt="" />
          <p className="text-[14px] font-semibold">{personName}</p>
        </div>
      </div>
      <div className="max-h-48 overflow-y-auto flex justify-between py-5 text-gray-700">
        <div className="flex gap-2 items-center">
          <FaBuffer size={13}></FaBuffer>
          <p className="text-[12px]">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendar />
          <p className="text-[12px]">1/2</p>
        </div>
      </div>
      <div className="flex gap-5 text-sm">
        <img src={secondPersonImage} className="w-6 rounded-full" alt="" />
        <img src={thirdPersonImage} className="w-6 rounded-full" alt="" />
        <p className="bg-gray-200 rounded-full px-1 py-1 text[12px]">12+</p>

        <div className="flex items-center gap-1 text-[12px]">
          <TiMessages />
          <p> {messageCount}</p>
        </div>
        <LinkToModal id={_id} type={type} linkedCount={linkedCount} />
        <div className="flex items-center gap-1">
          <FaCalendarAlt size={12}></FaCalendarAlt>
          <p className="text-[12px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
