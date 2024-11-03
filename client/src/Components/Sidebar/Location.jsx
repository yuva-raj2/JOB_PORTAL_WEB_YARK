import React from "react";
import InputField from "./InputField";
function Location({handleonradiochange}) {
  return (
    <div className="mt-2">
        <h3>Location</h3>
        <label className="sidebar-label-container mt-1">
          <input type="radio" id="text" name="text" value="" onChange={handleonradiochange}/>
          <span className="checkmark"></span><p>All</p>
        </label>
        <InputField handleonradiochange={handleonradiochange} value="london" title="London" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value="Brussels" title="Brussels" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value="San Francisco" title="San Francisco" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value="Seattle" title="Seattle" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value="Boston" title="Boston" name="text"/>
        <InputField handleonradiochange={handleonradiochange} value="Madrid" title="Madrid" name="text"/>
    </div>
  )
}

export default Location