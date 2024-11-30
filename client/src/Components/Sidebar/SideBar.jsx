import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPostingData from "./JobPostingData";
import WorkExperience from "./WorkExperience";
import WorkMode from "./WorkMode";
function SideBar({handleonradiochange,handleonbtnclick}) {
  return (
    <div className="space-x-5 mt-2">
        <h2 className="text-primary font-semibold">Filter</h2>
        <Location handleonradiochange={handleonradiochange}/>
        <Salary handleonradiochange={handleonradiochange} handleonbtnclick={handleonbtnclick}/>
        <JobPostingData handleonradiochange={handleonradiochange}/>
        <WorkExperience handleonradiochange={handleonradiochange}/>
        <WorkMode handleonradiochange={handleonradiochange}/>
    </div>
  )
}

export default SideBar