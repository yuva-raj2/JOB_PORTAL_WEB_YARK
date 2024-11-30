import React from "react";
import Button from "./Button";
import InputField from "./InputField";
function Salary({handleonradiochange,handleonbtnclick}) {
  return (
    <div className="mt-2">
        <h4 className="font-semibold">Salary</h4>
        <div className="flex">
          <Button onclickhandler={handleonbtnclick} value="" title="Yearly"/>
          <Button onclickhandler={handleonbtnclick} value="Monthly" title="Monthly"/>
          <Button onclickhandler={handleonbtnclick} value="Hourly" title="Hourly"/>
        </div>
        <div className="mt-4 ml-3">
        <label className="sidebar-label-container mt-1">
          <input type="radio" id="text" name="text" value="" onChange={handleonradiochange}/>
          <span className="checkmark"></span><p>All</p>
        </label>
        <InputField handleonradiochange={handleonradiochange} value={30} title="<30000k" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value={50} title="<50000k" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value={75} title="<75000k" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value={120} title="<120000k" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value={80} title="<80000k" name="text"/>
        </div>
    </div>
  )
}

export default Salary