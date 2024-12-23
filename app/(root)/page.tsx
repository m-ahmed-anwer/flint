import React from "react";
import RecentJobSection from "@/components/home/RecentJobSection";
import { RxFileText } from "react-icons/rx";
import { BsFiletypePdf } from "react-icons/bs";
import SearchForm from "@/components/SearchForm";
import LottieComponent from "@/components/LottieComponent";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <div className="sm:px-3 md:px-4 px-1 ">
      <section className="blue_container">
        <h1 className="heading">
          Modernizing the Job <br /> Search Experience
        </h1>
        <p className="sub-heading !max-w-2xl mb-4">
          Search and find your dream job easier than ever, you can simply browse
          and find a job if you need it
        </p>
        <SearchForm query={query} placeholder="Search for a Job..." />
      </section>

      <section className="features-section">
        <div className="mt-8 sm:mt-12">
          <dl className="features-grid">
            {/* First Feature */}
            <div className="features-grid-item">
              <dd className="features-percentage">91%</dd>
              <dt className="features-text-bold">Skills Aligned</dt>
              <p className="small-text-light">
                Many job seekers match their skills to the right jobs.
              </p>
            </div>

            {/* Second Feature */}
            <div className="features-grid-item">
              <dd className="features-percentage">90%</dd>
              <dt className="features-text-bold">Fast and Efficient</dt>
              <p className="small-text-light">
                Company data filtering is quick and efficient.
              </p>
            </div>

            {/* Third Feature */}
            <div className="features-grid-item">
              <dd className="features-percentage">89%</dd>
              <dt className="features-text-bold">Wide Range</dt>
              <p className="small-text-light">
                Top employers interacting with many job seekers.
              </p>
            </div>
          </dl>
        </div>
      </section>
      <RecentJobSection />
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
    </div>
  );
};

export default Home;
