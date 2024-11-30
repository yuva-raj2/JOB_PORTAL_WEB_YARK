import React from "react"
import InputField from "./InputField"
function WorkMode({handleonradiochange}) {
  return (
    <div className="mt-4">
    <h3 className="font-bold">Mode of Work</h3>
    <label className="sidebar-label-container mt-1">
      <input type="radio" id="text" name="text" value="" onChange={handleonradiochange}/>
      <span className="checkmark"></span><p>All</p>
    </label>
    <InputField handleonradiochange={handleonradiochange} value="Full-time" title="Full-time" name="text"/>
    <InputField handleonradiochange={handleonradiochange} value="Part-time" title="Part-time" name="text"/>
    <InputField handleonradiochange={handleonradiochange} value="Temporary" title="Temporary" name="text"/>
</div>
  )
}

export default WorkMode