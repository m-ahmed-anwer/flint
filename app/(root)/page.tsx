import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
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
      <SkillsSection />
    </div>
  );
};

export default Home;
