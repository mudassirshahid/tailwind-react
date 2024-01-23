import React, { useState } from "react";
import Button from "./Button";
import { Link } from 'react-router-dom'


const Navbar = () => {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/services"},
    {name:"ABOUT",link:"/about"},
    {name:"BLOG'S",link:"/blogs"},
    {name:"CONTACT",link:"/contact"},
  ];

  const [open, setOpen] = useState(false)
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      {/* <TailwindCSSButton title="Tailwind Button" /> */}
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
        <Link to="/"><span className="text-3xl text-indigo-600 mr-1 pt-2 relative top-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Developer</Link>
        </div>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul className={` md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0 `}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500 lg:text-base text-xs font-[Poppins]'>{link.name}</Link>
            </li>
          ))
        }
        <Link to="/get-started"><Button children="Get Started"/></Link>
        {/* <Button children="Read More"/> */}
        </ul>
      </div>
    </div>
  );
};
// function TailwindCSSButton(props){
//     return(
//         <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600'>
//         {props.title}
//         </button>
//     )
// }

export default Navbar;

// FOR ICONS

// GO TO IONIC ICONS
// COPY <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
// ND PASTE IN index.HTML in head
