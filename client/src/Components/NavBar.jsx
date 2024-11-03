import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXbox} from "react-icons/fa6";
function NavBar() {
  const [menunav,setmenunav]=useState(false);
  const handlemenu=()=>{
    setmenunav(!menunav);
  }
  const navbars=[
    {path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"/salary",title:"Salary Estimation"},
    {path:"/post-jobs",title:"Post a Jobs"}
  ]
  return (
    <header className="container max-w-screen-2xl px-4 md:px-24 mx-auto">
        <nav className="flex gap-2 justify-between items-center py-4">
            <a href="/" className="flex gap-2 items-center">
            <svg xmlns="https://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <circle cx="12.0143" cy="12.5143" r="#3575E2" fillOpacity="0.4"/>
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"/></svg><span>Job Portal</span></a>
            <ul className="md:flex hidden gap-20 items-center">
              {navbars.map(({path,title})=>(
                <li key={path} className="text-base text-primary">
                  <NavLink to={path} className={({isActive,isPending})=>
                  isActive?"active":
                  isPending?"pending":
                  ""
                  }>
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="font-medium text-primary text-base hidden lg:block space-x-5">
              <Link to="/login" className="rounded border py-2 px-10">Login</Link>
              <Link to="/sign-up" className="text-white rounded border py-2 px-10 bg-blue">Sign Up</Link>
            </div>
            <div className="md:hidden block">
              <button  onClick={handlemenu}>
              {menunav ? <FaXbox className="w-5 h-10 md:hidden block"/>:
              <FaBarsStaggered className="w-5 h-10 md:hidden block"/>
              }
              </button>
            </div>
        </nav>
        <div className={`px-4 py-5 rounded-md bg-emerald-300 md:hidden block ${menunav?"":"hidden"}`}>
          <nav className="text-base text-primary first:text-white py-1">
            <ul>
              {navbars.map(({path,title})=>(
                <li key={path}>
                  <Link to={path} className={({isActive})=>isActive?"active":""}>
                    {title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default NavBar