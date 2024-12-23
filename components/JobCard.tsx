import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import {
  HiOutlineComputerDesktop,
  HiOutlineBuildingOffice2,
  HiOutlineClock,
} from "react-icons/hi2";
import { PiClockCountdown } from "react-icons/pi";
import { dateCalc } from "@/lib/utils";

export type JobType = {
  company: string;
  title: string;
  location: string;
  type: string;
  level: string;
  postedAt: Date;
  contract: string;
  languages: string[];
  tools: string[];
  logo: string;
};
const JobCard = ({ job }: { job: JobType }) => {
  const {
    company,
    title,
    location,
    type,
    level,
    postedAt,
    contract,
    languages,
    tools,
    logo,
  } = job;

  return (
    <div className="max-w-sm mx-auto bg-peach-light p-2 rounded-3xl shadow-md border border-gray-200 mt-2">
      <div className="rounded-3xl bg-blue-200 p-5 py-8">
        <div className="text-gray-500 text-xs mb-3 bg-white w-fit p-1 px-3 rounded-full flex items-center gap-1 justify-center">
          <HiOutlineClock size={12} />
          {dateCalc(postedAt)}
        </div>
        <h2 className="text-sm font-medium text-gray-800 mt-4">{company}</h2>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-gray-900 mt-1 max-w-48 ">
            {title}
          </h3>
          <Avatar className="size-12 bg-gray-100 p-1">
            <AvatarImage src={logo} alt={"comapny"} />
            <AvatarFallback> </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-wrap gap-2 mt-8 ">
          <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full flex justify-center items-center gap-1">
            <PiClockCountdown />
            {type}
          </span>
          <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full flex justify-center items-center gap-1">
            {level}
          </span>
          <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full flex justify-center items-center gap-1">
            {contract === "On-site" ? (
              <>
                <HiOutlineBuildingOffice2 />
                {contract}
              </>
            ) : (
              <>
                <HiOutlineComputerDesktop />
                {contract}
              </>
            )}
          </span>
        </div>
      </div>
      <div className="px-5 py-4 items-end flex justify-between ">
        <div className="item-center ">
          <div className="text-lg font-semibold text-gray-800 ">$250/hr</div>
          <div className="text-gray-400 text-sm max-w-32">{location}</div>
        </div>
        <Button className="mt-6 ">Quick Apply</Button>
      </div>
    </div>
  );
};

export default JobCard;
