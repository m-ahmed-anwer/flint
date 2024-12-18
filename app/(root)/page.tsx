import HeroSection from "@/components/HeroSection";
import FlintSection from "@/components/FlintSection";
import { Button } from "@/components/ui/button";
import React from "react";

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
    </div>
  );
};

export default Home;
