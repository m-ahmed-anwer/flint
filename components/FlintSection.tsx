import React from "react";

const FlintSection = () => {
  return (
    <section className="features-section">
      <div className="mt-8 sm:mt-12">
        <dl className="features-grid">
          {/* First Feature */}
          <div className="features-grid-item">
            <dd className="features-percentage">91%</dd>
            <dt className="features-text-bold">Skills Aligned</dt>
            <p className="features-text-light">
              Many job seekers match their skills to the right jobs.
            </p>
          </div>

          {/* Second Feature */}
          <div className="features-grid-item">
            <dd className="features-percentage">90%</dd>
            <dt className="features-text-bold">Fast and Efficient</dt>
            <p className="features-text-light">
              Company data filtering is quick and efficient.
            </p>
          </div>

          {/* Third Feature */}
          <div className="features-grid-item">
            <dd className="features-percentage">89%</dd>
            <dt className="features-text-bold">Wide Range</dt>
            <p className="features-text-light">
              Top employers interacting with many job seekers.
            </p>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default FlintSection;
