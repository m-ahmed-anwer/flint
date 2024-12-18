import React from "react";

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-item">
        <div className="skills-percent">91%</div>
        <div className="skills-text-bold">Skills Aligned</div>
        <div className="skills-text-light">
          Many job seekers match their skills to the right jobs.
        </div>
      </div>

      <div className="skills-item">
        <div className="skills-percent">90%</div>
        <div className="skills-text-bold">Fast and Efficient</div>
        <div className="skills-text-light">
          Company data filtering is quick and efficient.
        </div>
      </div>

      <div className="skills-item">
        <div className="skills-percent">89%</div>
        <div className="skills-text-bold">Wide Range</div>
        <div className="skills-text-light">
          Top employers interacting with many job seekers.
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
