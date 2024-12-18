import React from "react";

const FlintSection = () => {
  return (
    <section className="skills-section">
      <div className="mt-8 sm:mt-12">
        <dl className="skills-grid">
          {/* First Feature */}
          <div className="skills-grid-item">
            <dd className="skills-percentage">91%</dd>
            <dt className="skills-text-bold">Skills Aligned</dt>
            <p className="skills-text-light">
              Many job seekers match their skills to the right jobs.
            </p>
          </div>

          {/* Second Feature */}
          <div className="skills-grid-item">
            <dd className="skills-percentage">90%</dd>
            <dt className="skills-text-bold">Fast and Efficient</dt>
            <p className="skills-text-light">
              Company data filtering is quick and efficient.
            </p>
          </div>

          {/* Third Feature */}
          <div className="skills-grid-item">
            <dd className="skills-percentage">89%</dd>
            <dt className="skills-text-bold">Wide Range</dt>
            <p className="skills-text-light">
              Top employers interacting with many job seekers.
            </p>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default FlintSection;
