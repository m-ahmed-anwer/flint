import React from "react";
import { RxFileText } from "react-icons/rx";

const ComponentSection = () => {
  return (
    <section className="component-section">
      <div className="component-grid">
        {/* Left Section */}
        <div className="component-grid-left hover:animate-pulse">
          <div className="inside-card">Inside card one</div>
        </div>

        {/* Right Section */}
        <div className="component-grid-right">
          <div className="component-icon">
            <RxFileText size={80} />
          </div>
          <div className="component-text-bold ">Complete your Profile</div>
          <div className="component-text-light">
            Complete your profile so that recruiters can see your skills and
            experience.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentSection;
