import React from "react"
import InputField from "./InputField"
function WorkExperience({handleonradiochange}) {
  return (
    <div className="mt-4">
    <h3 className="font-bold">Mode of Employment</h3>
    <label className="sidebar-label-container mt-1">
      <input type="radio" id="text" name="text" value="" onChange={handleonradiochange}/>
      <span className="checkmark"></span><p>All</p>
    </label>
    <InputField handleonradiochange={handleonradiochange} value="Any Experience" title="Any Experience" name="text"/>
    <InputField handleonradiochange={handleonradiochange} value="Internship" title="Internship" name="text"/>
    <InputField handleonradiochange={handleonradiochange} value="Work remotely" title="Work remotely" name="text"/>
</div>
  )
}

export default WorkExperience