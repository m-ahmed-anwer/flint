import HeroSection from "@/components/HeroSection";
import FlintSection from "@/components/FlintSection";
import React from "react";
import RecentJobSection from "@/components/RecentJobSection";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <div className="sm:p-3 md:p-6 p-1">
      <HeroSection query={query} />
      <FlintSection />
      <RecentJobSection />
    </div>
  );
};

export default Home;
