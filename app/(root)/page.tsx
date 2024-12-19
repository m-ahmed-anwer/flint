import HeroSection from "@/components/home/HeroSection";
import FlintSection from "@/components/home/FlintSection";
import React from "react";
import RecentJobSection from "@/components/home/RecentJobSection";
import ComponentSection from "@/components/home/ComponentSection";

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
      <ComponentSection />
    </div>
  );
};

export default Home;
