import React from "react";
import { RxFileText } from "react-icons/rx";
import { BsFiletypePdf } from "react-icons/bs";
import LottieComponent from "../LottieComponent";

const FlintComponentSection = () => {
  return (
    <section className="component-section">
      <div className="component-grid">
        {/* Left Section */}
        <div className="component-grid-left">
          <div
            className="rounded-circle"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 500,
            }}>
            <div id="dot-1" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-2" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-3" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-4" className="dot">
              <LottieComponent
                url={
                  "https://lottie.host/5e2f0ee4-5886-465c-aa37-d499071f3f81/qoVRxt6xZd.lottie"
                }
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="component-grid-right">
          <div className="vertical-line-hidden"></div>
          <div className="component-icon">
            <RxFileText size={80} />
          </div>

          <div className="component-text-bold">
            Complete your <br />
            Profile
          </div>
          <div className="small-text-light">
            Complete your profile so that recruiters can see your skills and
            experience.
          </div>
          <div className="vertical-line-bottom"></div>
        </div>
      </div>

      <div className="component-grid">
        {/* Left Section */}
        <div className="component-grid-left">
          <div
            className="rounded-circle"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 500,
            }}>
            <div id="dot-1" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-2" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-3" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-4" className="dot">
              <LottieComponent
                url={
                  "https://lottie.host/5e2f0ee4-5886-465c-aa37-d499071f3f81/qoVRxt6xZd.lottie"
                }
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="component-grid-right">
          <div className="vertical-line"></div>
          <div className="component-icon">
            <RxFileText size={80} />
          </div>
          <div className="component-text-bold">
            Directly Upload <br />
            Resume
          </div>
          <div className="small-text-light">
            You can upload your resume or CV, and recruiters will be able to
            review.
          </div>
          <div className="vertical-line-bottom"></div>
        </div>
      </div>
      <div className="component-grid">
        {/* Left Section */}
        <div className="component-grid-left">
          <div
            className="rounded-circle"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 500,
            }}>
            <div id="dot-1" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-2" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-3" className="dot">
              <BsFiletypePdf size={35} />
            </div>
            <div id="dot-4" className="dot">
              <LottieComponent
                url={
                  "https://lottie.host/5e2f0ee4-5886-465c-aa37-d499071f3f81/qoVRxt6xZd.lottie"
                }
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="component-grid-right">
          <div className="vertical-line"></div>
          <div className="component-icon">
            <RxFileText size={80} />
          </div>
          <div className="component-text-bold">
            Directly Upload <br />
            Resume
          </div>
          <div className="small-text-light">
            You can upload your resume or CV, and recruiters will be able to
            review.
          </div>
          <div className="vertical-line-hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default FlintComponentSection;
