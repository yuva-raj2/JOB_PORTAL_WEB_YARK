import React from "react";
import InputField from "./InputField";
function JobPostingData({handleonradiochange}) {
  const now=new Date();
  console.log(now);
  const twentyfourhoursagonow=new Date(now-24*60*60*1000);
  const sevendaysagonow=new Date(now-7*24*60*60*1000);
  const thirtydaysagonow=new Date(now-30*24*60*60*1000);
  //Convert date to string
  const twentyfourhoursagodate=twentyfourhoursagonow.toISOString().slice(0,10);
  console.log(twentyfourhoursagodate);
  const sevendaysagodate=sevendaysagonow.toISOString().slice(0,10);
  console.log(sevendaysagodate);
  const thirtydaysagodate=thirtydaysagonow.toISOString().slice(0,10);
  console.log(thirtydaysagodate);
  return (
    <div className="mt-8">
        <h3 className="font-bold">Job Posting Data</h3>
        <div className="mt-4 ml-3">
            <label className="sidebar-label-container">
              <input type="radio" id="text" value="" name="text" onChange={handleonradiochange}/>
              <span className="checkmark"></span>
              <p>All time</p>
            </label>
            <InputField handleonradiochange={handleonradiochange} value={twentyfourhoursagodate} title="Last 24 hours" name="text"/>
            <InputField handleonradiochange={handleonradiochange} value={sevendaysagodate} title="Last 7 days" name="text"/>
            <InputField handleonradiochange={handleonradiochange} value={thirtydaysagodate} title="Last Month" name="text"/>
        </div>
    </div>
  )
}

export default JobPostingData