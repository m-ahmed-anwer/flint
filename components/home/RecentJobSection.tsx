"use client";

import React, { useState } from "react";
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

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: any) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  var d = new Date();

  // Different job listings
  const jobs: JobType[] = [
    {
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
    },
    {
      company: "Google",
      title: "Software Engineer",
      location: "Mountain View, California, USA",
      type: "Full time",
      level: "Mid",
      postedAt: new Date(d.setDate(d.getDate() - 5)),
      contract: "On-site",
      languages: ["English", "French"],
      tools: ["Java", "Spring Boot", "Kubernetes"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Google_2015_logo.svg",
    },
    {
      company: "Microsoft",
      title: "Data Scientist",
      location: "Seattle, Washington, USA",
      type: "Full time",
      level: "Junior",
      postedAt: new Date(d.setDate(d.getDate() - 10)),
      contract: "Hybrid",
      languages: ["English", "German"],
      tools: ["Python", "R", "TensorFlow"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      company: "Netflix",
      title: "Product Manager",
      location: "Los Angeles, California, USA",
      type: "Part time",
      level: "Senior",
      postedAt: new Date(d.setDate(d.getDate() - 12)),
      contract: "Remote",
      languages: ["English", "Spanish"],
      tools: ["Jira", "Aha!", "Slack"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      company: "Apple",
      title: "Marketing Specialist",
      location: "Cupertino, California, USA",
      type: "Full time",
      level: "Mid",
      postedAt: new Date(d.setDate(d.getDate() - 7)),
      contract: "On-site",
      languages: ["English", "Chinese"],
      tools: ["Google Analytics", "HubSpot", "SEO"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_2.svg",
    },
    {
      company: "Tesla",
      title: "Mechanical Engineer",
      location: "Palo Alto, California, USA",
      type: "Full time",
      level: "Senior",
      postedAt: new Date(d.setDate(d.getDate() - 15)),
      contract: "On-site",
      languages: ["English"],
      tools: ["AutoCAD", "SolidWorks", "MATLAB"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    },
  ];

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
                  ? "bg-gradient-to-r from-blue-200 to-sky-100 text-black scale-110 mx-2"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gradient-to-r from-sky-100 to-blue-50 hover:scale-105"
              }`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards Container */}
      <div className="mt-8 w-full max-w-7xl px-1 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentJobSection;
