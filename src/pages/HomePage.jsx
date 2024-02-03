import React, {useState, useEffect} from 'react';
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";

import moment from "moment";
  
  import { faker } from "@faker-js/faker";
import CountUp from 'react-countup';
import {BarGraph} from "../components/common/BarGraph"
import {DonutGraph} from "../components/common/DonutGraph"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const HomePage = () => {
    const [mfData, setMfData] = useState();
    useEffect(() => {
      fetch("https://api.mfapi.in/mf/122640")
        .then((res) => res.json())
        .then((data) => setMfData(data));
    }, []);
  
  const cardsInfo = [
    {
      title: "Views",
      count: 7265,
      percent: 11.02,
    },
    {
      title: "Visits",
      count: 3671,
      percent: -0.03,
    },
    {
      title: "New Users",
      count: 156,
      percent: 15.03,
    },
    {
      title: "Active Users",
      count: 2318,
      percent: 6.08,
    },
  ];
 

  const options = {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: mfData?.meta?.fund_house,
      },
    },
  };

  const labels = mfData?.data
    .slice(0, 365)
    .map((data) => moment(data.date, "DD-MM-YYYY").format("MMM Do YY"));

  const chartData = {
    labels,
    datasets: [
      {
        label: mfData?.meta.scheme_name,
        data: mfData?.data.map((data) => data.nav),
        borderColor: "black",
        backgroundColor: "black",
        tension: 0.1,
        borderWidth: 0.1
      },
    ],
  };

  const websites = [
    "Google",
    "Youtube",
    "Instagram",
    "Pinterest",
    "Facebook",
    "Twitter",
  ];

    return (
        <div className="p-4">
          <h2 className="text-[#1C1C1C] font-inter font-semibold">Overview</h2>
          <div className="flex gap-6 mt-4">
            {cardsInfo.map((card, index) => {
              return (
                <div
                  className={`p-6 rounded-2xl w-[200px] ${
                    index % 2 == 0 ? "bg-[#E3F5FF]" : "bg-[#E5ECF6]"
                  }`}
                >
                  <div className="text-[#1C1C1C] font-inter text-[12px]">
                    {card.title}{" "}
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-[#1C1C1C] text-[24px] font-inter font-semibold">
                    <CountUp start={0} end={card.count} />
                      
                    </div>
                    <div className='flex gap-2'>
                    <div className="text-[#1C1C1C] text-[12px] font-inter my-auto">
                      {card.percent + "%"}
                    </div>
                    <svg
                      className="my-auto"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex">
            <div className="w-[650px] h-[360px] bg-[#F7F9FB] rounded-2xl mt-8">
              {mfData && <Line options={options} data={chartData} />}
            </div>
            <div className="rounded-2xl mt-8 ml-6 bg-[#F7F9FB] p-4 w-[200px]">
              {websites.map((website) => {
                return (
                  <div className="flex gap-2 mt-4 hover:translate-x-2 duration-500">
                    <p className="w-[100px]">{website}</p>
                    <svg
                      width="80"
                      height="35"
                      viewBox="0 0 80 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 17.1667C0 16.5223 0.522334 16 1.16667 16H8.54762C9.19195 16 9.71429 16.5223 9.71429 17.1667C9.71429 17.811 9.19195 18.3333 8.54762 18.3333H1.16667C0.522333 18.3333 0 17.811 0 17.1667Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M11.7144 17.1667C11.7144 16.5223 12.2367 16 12.881 16H20.262C20.9063 16 21.4286 16.5223 21.4286 17.1667C21.4286 17.811 20.9063 18.3333 20.262 18.3333H12.881C12.2367 18.3333 11.7144 17.811 11.7144 17.1667Z"
                        fill="#1C1C1C"
                        fill-opacity="0.4"
                      />
                      <path
                        d="M23.4285 17.1667C23.4285 16.5223 23.9508 16 24.5951 16H31.9761C32.6204 16 33.1428 16.5223 33.1428 17.1667C33.1428 17.811 32.6204 18.3333 31.9761 18.3333H24.5951C23.9508 18.3333 23.4285 17.811 23.4285 17.1667Z"
                        fill="#1C1C1C"
                        fill-opacity="0.1"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-8 mb-8">
            <div className="w-[470px] h-[300px] bg-[#F7F9FB] rounded-2xl mt-8">
              <BarGraph />
            </div>
            <div className="w-[370px] h-[300px] flex justify-center bg-[#F7F9FB] rounded-2xl mt-8">
              <DonutGraph/>
            </div>
          </div>
        </div>
    );
};

export default HomePage;
