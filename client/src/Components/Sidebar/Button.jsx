import React from "react"
function Button({onclickhandler,value,title}) {
  return (
    <div>
        <button onClick={onclickhandler} value={value} className="mt-4 px-1 py-1 bg-blue ml-1 text-white hover:text-blue hover:bg-white text-base">{title}</button>
    </div>
  )
}

export default Button