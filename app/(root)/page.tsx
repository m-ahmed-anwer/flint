import HeroSection from "@/components/home/HeroSection";
import FlintSection from "@/components/home/FlintSection";
import React from "react";
import RecentJobSection from "@/components/home/RecentJobSection";
import FlintComponentSection from "@/components/home/FlintComponentSection";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <div className="sm:p-3 md:p-4 p-1 mt-[-90px]">
      <HeroSection query={query} />
      <FlintSection />
      <RecentJobSection />
      <FlintComponentSection />
    </div>
  );
};

export default Home;
