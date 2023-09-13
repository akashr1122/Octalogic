import React, { useEffect, useState } from "react";
import { EnrollTable } from "../../Table/EnrollTable";

import user from "../../assets/ic_baseline-people.svg";
import { StudentTable } from "../../Table/StudentTable";

function Overview() {

 

  return (
    <>
      <div className="w-[full] px-10 m-auto flex flex-col h-[100vh] overflow-auto gap-10 relative">
        <div className="top text-[28px] text-[#83858B]">
          <span>Overview</span>
        </div>
        <div className="card flex flex-row gap-3">
          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">
                  {12}
                </span>
                <span className="text-[12px] text-[#83858B]">
                  from $4400 last month
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>
          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">12</span>
                <span className="text-[12px] text-[#83858B]">
                  total number of courses
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>

          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">$2000</span>
                <span className="text-[12px] text-[#83858B]">
                  total amount earned
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>

          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">Guitar</span>
                <span className="text-[12px] text-[#83858B]">
                  best performing course
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>
          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">Flute</span>
                <span className="text-[12px] text-[#83858B]">
                  worst performing course
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="course-data flex flex-col gap-2">
            <div className="heading flex flex-row justify-between">
              <div className="heading text-[16px] text-[#83858B]">
                <h1 className="font-sanss font-bold text-light text-sm tracking-[0.4px]">
                  LATEST ENROLMENTS
                </h1>
              </div>
              <div className="text-[#901E75]">
                <span>View All Courses</span>
              </div>
            </div>
            <div
              className="tabledata p-5 rounded-xl"
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
            >
              <EnrollTable />
            </div>
          </div>
        </div>
        <div className="second">
          <div className="course-data flex flex-col gap-2">
            <div className="heading flex flex-row justify-between">
              <div className="heading text-[16px] text-[#83858B]">
                <h1 className="font-sanss font-bold text-light text-sm tracking-[0.4px]">
                  BEST STUDENTS
                </h1>
              </div>
              <div className="text-right text-[#901E75]">
                <span>View All Students</span>
              </div>
            </div>
            <div
              className="tabledata  p-5 rounded-xl"
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
            >
              
              <StudentTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
