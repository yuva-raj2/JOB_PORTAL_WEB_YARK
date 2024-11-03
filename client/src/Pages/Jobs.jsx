import React from "react";
const Jobs=({result})=>{
  return (
    <div>
      <h3 className="text-lg ml-6 mt-6 font-semibold">{result.length} jobs</h3>
      <section>
        {result}
      </section>
    </div>
  )
}

export default Jobs