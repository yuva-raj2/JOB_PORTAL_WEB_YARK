import React from "react";
import {Link} from "react-router-dom";
import { FiMapPin,FiClock,FiDollarSign,FiCalendar } from "react-icons/fi";
function Card({data}) {
  const {id,companyLogo,companyName,jobTitle,jobLocation,minPrice,maxPrice,employmentType,postingDate,description}=data;
  return (
   <section className="card">
      <Link to={"/"} className="flex sm:flex-row flex-col items-start gap-4">
        <img src={companyLogo} alt="company-logo" />
        <div className="card-details">
          <h4 className="text-primary mb-1 text-base font-bold">{companyName}</h4>
          <h3 className="text-primary">{jobTitle}</h3>
          <div className="flex flex-wrap gap-1">
            <span className="flex items-center gap-1"><FiMapPin/>{jobLocation}</span>
            <span className="flex items-center gap-1"><FiClock/>{employmentType}</span>
            <span className="flex items-center gap-1"><FiDollarSign/>{minPrice} - {maxPrice}</span>
            <span className="flex items-center gap-1"><FiCalendar/>{postingDate}</span>
            <span>{description}</span>
          </div>
        </div>
      </Link>
   </section>
  )
}

export default Card