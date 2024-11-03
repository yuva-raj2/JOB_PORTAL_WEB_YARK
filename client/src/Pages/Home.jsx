import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import { useState } from "react";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import SideBar from "../Components/Sidebar/SideBar";
function Home() {
  const [query,setformchange]=useState("");
  const [searchjobs,setsearchjobs]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState(null);
  const [isLoading,setisLoading]=useState(true);
  const [currentPage,setcurrentPage]=useState(1);
  const itemsPerPage=6;
  useEffect(()=>{
    setisLoading(true);
    fetch("jobs.json").
    then(res=>res.json()).
    then(data=>{setsearchjobs(data);setisLoading(false)}),[]} ,[]);
  console.log(searchjobs);
  const handleonchangeform=(event)=>{
    setformchange(event.target.value);   
    console.log(event);
  }
  console.log(query);
  const filteredjobs=searchjobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1);
  console.log(filteredjobs);
    //Radio Button Filtering
    const handleonradiochange=(event)=>{
      setSelectedCategory(event.target.value);
    }
    //Buttone Filtering
    const handleonbtnclick=(event)=>{
      setSelectedCategory(event.target.value);
    }
  //Main functions
  const filteredJob=(searchjobs,selected,query)=>{
    let filterjob=searchjobs;
    if(query){
      filterjob=filteredjobs;
    }
    if(selected){
      filterjob=filterjob.filter(({jobTitle,maxPrice,salaryType,jobLocation,experienceLevel,employmentType})=>(
        jobTitle.toLowerCase()===selected.toLowerCase()||
        parseInt(maxPrice)<=parseInt(selected)||
        salaryType.toLowerCase()===selected.toLowerCase()||
        jobLocation.toLowerCase()===selected.toLowerCase()||
        experienceLevel.toLowerCase()===selected.toLowerCase()||
        employmentType.toLowerCase()===selected.toLowerCase()
      ));
      console.log(filterjob);
    }
    return filterjob.map((data,i)=><Card key={i} data={data}/>)
  }
  const result=filteredJob(searchjobs,selectedCategory,query);
  return (
    <div className="text-primary">
      <Banner query={query} handleonchangeform={handleonchangeform}/>
      <div className="bg-indigo-50 md:grid md:grid-cols-4 gap-8 mt-10 px-4 pt-4 lg:px-24 py-12">
        <div className="bg-white pl-4 p-10 m-5 rounded-lg"><SideBar handleonradiochange={handleonradiochange} handleonbtnclick={handleonbtnclick}/></div>
        <div className="bg-white m-5 col-span-2 rounded-lg">
          {isLoading?(<p>Loading ....</p>):result.length>0?
          <Jobs result={result}/>:
          <div className="text-lg ml-6 mt-6 font-semibold">
          <p>{result.length} job</p>
          <h3>No Data found!!!</h3></div>}
        </div>
        <div className="bg-white pl-4 p-10 m-5 rounded-lg">Right</div>
      </div>
    </div>
  )
}

export default Home