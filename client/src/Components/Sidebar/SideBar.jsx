import React from "react";
import Location from "./Location";
function SideBar({handleonradiochange,handleonbtnclick}) {
  return (
    <div className="space-x-5 mt-2">
        <h2 className="text-primary font-semibold">Filter</h2>
        <Location handleonradiochange={handleonradiochange}/>
    </div>
  )
}

export default SideBar