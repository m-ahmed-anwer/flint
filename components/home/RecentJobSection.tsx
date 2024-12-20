"use client";
import Form from "next/form";
import React, { useState } from "react";
import SearchInput from "../SearchInput";
import { Button } from "../ui/button";
import JobCard, { JobType } from "../JobCard";

const RecentJobSection = () => {
  const tags = [
    "UI/UX Design",
    "Sales",
    "Development",
    "Analytics",
    "Digital Media Specialist",
    "Data Operator",
    "Project Management",
    "Other",
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  var d = new Date();

  const job: JobType = {
    company: "Amazon",
    title: "Senior UI/UX Designer",
    location: "Colombo, Sri Lanka",
    type: "Part time",
    level: "Senior",
    postedAt: new Date(d.setDate(d.getDate() - 19)),
    contract: "Remote",
    languages: ["English", "Spanish"],
    tools: ["Figma", "Adobe XD"],
    logo: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl">
      <div className="text-center">
        <div className="text-sm font-semibold text-blue-600 ">
          Realize your Career Dreams
        </div>
        <div className="heading-2">
          Search and Discover <br />
          your Jobs Here
        </div>
      </div>

      {/* Tags Grid */}
      <div className="mt-6 w-full flex justify-center">
        <div className="flex flex-wrap gap-2 justify-center transition-all ease-in-out duration-300 max-w-3xl">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`inline-block px-4 py-2  rounded-full text-sm m-1 font-medium border transition-all ease-in-out duration-300 ${
                selectedTags.includes(tag)
                  ? "bg-blue-200 text-black border-blue-600 scale-110 mx-2"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-blue-100 hover:scale-105"
              }`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards Container */}
      <div className="mt-8 w-full max-w-7xl px-1 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentJobSection;
