import React from "react";
import SearchForm from "./SearchForm";

const HeroSection = ({ query }: { query?: string }) => {
  return (
    <section className="blue_container">
      <h1 className="heading">
        Modernizing the Job <br /> Search Experience
      </h1>
      <p className="sub-heading !max-w-2xl">
        Search and find your dream job easier than ever, you can simply browse
        and find a job if you need it
      </p>
      <SearchForm query={query} placeholder="Search for a Job..." />
    </section>
  );
};

export default HeroSection;
