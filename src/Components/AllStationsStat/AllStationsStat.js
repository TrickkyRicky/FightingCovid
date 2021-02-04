import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Classes from "./AllStationsStat.Module.css";

import { GiSoap } from "react-icons/gi";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoThermometerOutline } from "react-icons/io5";
import { Doughnut } from "react-chartjs-2";

const allstationStat = (props) => {
  const image1 = `${process.env.PUBLIC_URL}/assets/images/coming-soon-1.png`;
  const image2 = `${process.env.PUBLIC_URL}/assets/images/coming-soon-2.png`;
  // const image3 = `${process.env.PUBLIC_URL}/assets/images/coming-soon-3.png`;
  const image4 = `${process.env.PUBLIC_URL}/assets/images/coming-soon-4.png`;
  return (
    <div className={Classes.AllStationsStat}>
      <div className={Classes.AllSS3}>
        <div className={Classes.Card}>
          <div className={Classes.Padding}>
            <h5>Solution Per Hour</h5>
            <div className={Classes.Content}>
              <div className={Classes.CardContent1}>
                <h3>5 Mg/Hr</h3>
                <BsArrowUp size={30} color={"#00d25b"} />
              </div>
              <div className={Classes.CardContent2}>
                <GiSoap size={60} />
              </div>
            </div>
            <p>3% Increase From Yestardays Statistics</p>
          </div>
        </div>
        <div className={Classes.Card}>
          <div className={Classes.Padding}>
            <h5>Total Usage</h5>
            <div className={Classes.Content}>
              <div className={Classes.CardContent1}>
                <h3>2760 Users</h3>
                <BsArrowDown
                  size={30}
                  color={"#fc424a"}
                  className={Classes.Icon}
                />
              </div>
              <div className={Classes.CardContent2}>
                <FiUser size={60} />
              </div>
            </div>
            <p>15% Decrease From Yestardays Statistics</p>
          </div>
        </div>
        <div className={Classes.Card}>
          <div className={Classes.Padding}>
            <h5>Highest Daily Temp.</h5>
            <div className={Classes.Content}>
              <div className={Classes.CardContent1}>
                <h3>101&deg;F</h3>
                <BsArrowUp size={30} color={"#00d25b"} />
              </div>
              <div className={Classes.CardContent2}>
                <IoThermometerOutline size={60} />
              </div>
            </div>
            <p>8&deg;F Higher Than Yestardays Statistics</p>
          </div>
        </div>
      </div>

      <div className={Classes.AllSS2}>
        <div className={Classes.HU_Container}>
          <div className={Classes.Padding}>
            <h5>Hourly Usage Breakdown</h5>
            <Doughnut
              data={props.stationsStats}
              options={{
                legend: {
                  display: true,
                  position: "bottom",
                  labels: {
                    fontColor: "lightgrey",
                  },
                },
              }}
            />
            <div className={Classes.HU}>
              <div className={Classes.HU_Square}>
                <div>
                  <h6>Total Hourly Usage</h6>
                  <p>Last Updated: 29 Nov 2020</p>
                </div>
                <h6>3 Per/Hr</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={[Classes.CA_Container]}>
          <div className={Classes.Padding}>
            <h5>Station Images</h5>
            <div className={Classes.Size_Carousel}>
              <AliceCarousel
                autoPlay={true}
                infinite={true}
                disableButtonsControls={true}
                autoPlayInterval="3000"
              >
                <img
                  src={image1}
                  className={Classes.SliderImg}
                  alt={"coming soon"}
                />
                <img
                  src={image2}
                  className={Classes.SliderImg}
                  alt={"coming soon"}
                />
                <img
                  src={image4}
                  className={Classes.SliderImg}
                  alt={"coming soon"}
                />
              </AliceCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default allstationStat;
