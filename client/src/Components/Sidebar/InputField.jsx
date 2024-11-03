import React from "react";
function InputField({handleonradiochange,title,value,name}) {
  return (
    <div>
        <label className="sidebar-label-container">
            <input type="radio" name={name} value={value} onChange={handleonradiochange}/>
        <span className="checkmark"></span>
        <p>{title}</p>
        </label>
    </div>
  )
}

export default InputField