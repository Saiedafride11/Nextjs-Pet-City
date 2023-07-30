import { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = ({ data }) => {
  const {
    githubProfile,
    linkedInProfile,
    portfolio,
    resumeLink,
    selectedSkills,
    role,
  } = data;

  const [complete, setComplete] = useState("50%");
  const graphData = [
    { title: "maininfo", value: 10, color: "#E38627" },
    { title: "updateinfo", value: 15, color: "#C13C37" },
    { title: "skilltest", value: 20, color: "#6A2135" },
  ];

  useEffect(() => {
    if (role === "candidate") {
      if (
        githubProfile &&
        linkedInProfile &&
        portfolio &&
        resumeLink &&
        selectedSkills.length
      ) {
        setComplete("100%");
      } else if (
        (githubProfile && linkedInProfile && portfolio && resumeLink) ||
        (githubProfile &&
          linkedInProfile &&
          portfolio &&
          selectedSkills.length) ||
        (githubProfile &&
          linkedInProfile &&
          resumeLink &&
          selectedSkills.length) ||
        (githubProfile && portfolio && resumeLink && selectedSkills.length) ||
        (linkedInProfile && portfolio && resumeLink && selectedSkills.length)
      ) {
        setComplete("90%");
      } else if (
        (githubProfile && linkedInProfile && portfolio) ||
        (githubProfile && resumeLink && selectselectedSkills.lengthedSkills) ||
        (portfolio && resumeLink && selectedSkills.length) ||
        (portfolio && linkedInProfile && selectedSkills.length) ||
        (linkedInProfile && portfolio && resumeLink)
      ) {
        setComplete("75%");
      } else if (
        githubProfile ||
        linkedInProfile ||
        portfolio ||
        resumeLink ||
        selectedSkills.length
      ) {
        setComplete("60%");
      } else {
        setComplete("50%");
      }
    } else {
      setComplete("99%");
    }
  }, []);

  return (
    <>
      <section>
        <div className="ml-0 md:ml-8 lg:ml-12 px-2">
          <div className="grid md:grid-cols-1 gap-4">
            <div>
              <div className="container">
                <h2 className="mb-6 ml-1 font-semibold">
                  Your Profile Complete: {complete}
                </h2>
                <div className="progressbar-container">
                  <div
                    className="progressbar-complete"
                    style={{ width: `${complete}` }}
                  >
                    <div className="progressbar-liquid"></div>
                  </div>
                  <span className="progress text-white font-bold">
                    {complete}
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="container">
              <h2 className="mb-6 ml-1 font-semibold">
                Your Profile Complete avarage:
              </h2>
              <div className="flex justify-center items-center">
                <div className="right_chart">
                  <PieChart
                    data={graphData}
                    label={({ dataEntry }) => dataEntry.value}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <style jsx>
          {`
            @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
            body {
              background-color: #2b2b2b;
              color: #fff;
              font-family: "Roboto", sans-serif;
            }
            .container {
              max-width: 500px;
              margin: 30px auto 0px auto;
            }
            .container h1 {
              text-align: center;
            }
            .container .progressbar-container {
              position: relative;
              width: 100%;
              height: 50px;
              border: 1px solid #fff;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              background: #ecf0f1;
            }
            .container .progressbar-container .progressbar-complete {
              position: absolute;
              left: 0;
              top: 0px;
              height: 100%;
              background-color: #5225bd;
              border-radius: 10px;
              animation: g 2500ms infinite ease-in-out;
              z-index: 2;
            }
            .container
              .progressbar-container
              .progressbar-complete
              .progressbar-liquid {
              z-index: 1;
              width: 70px;
              height: 70px;
              animation: g 2500ms infinite ease-in-out,
                r 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
              position: absolute;
              right: -5px;
              top: -10px;
              background-color: #5225bd;
              border-radius: 40%;
            }
            .container .progressbar-container .progress {
              z-index: 2;
            }
            @keyframes g {
              0% {
                background-color: #686de0;
              }
              50% {
                background-color: #607e9e;
              }
              100% {
                background-color: #5225bd;
              }
            }
            @keyframes r {
              from {
                transform: rotate(0deg);
              }
              from {
                transform: rotate(360deg);
              }
            }

            .right_chart {
              width: 60%;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default Chart;
