
import React, { useState } from "react";
import logo from "../image/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";


const Footer = () => {
    function getDate() {
        const today = new Date();
        const year = today.getFullYear();
      
        return `${year}`;
      }
    
      const [currentDate, setCurrentDate] = useState
      (getDate());
  return (
    <div className="bg-cart">
 <footer className="container mx-0 md:mx-auto  mt-10 text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-full p-5">
        <div className=" ml-5 h-max flex flex-col justify-center items-center p-4 md:justify-start md:items-start space-y-5">
       
          <img
              src={logo}
              alt="logo"
              className="md:cursor-pointer h-[5.5rem] "
            />
           
           
            <div>
            <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li className="bg-primary hover:bg-secondary rounded-full p-2">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white"
              >
               <FaFacebookF className="h-5 w-5"/>
              </a>
            </li>

            <li className="bg-primary hover:bg-secondary rounded-full p-2">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white"
              >
               <FaInstagram className="h-5 w-5"/>
              </a>
            </li>

            <li className="bg-primary hover:bg-secondary rounded-full p-2">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </li>

            <li className="bg-primary hover:bg-secondary rounded-full p-2">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white"
              >
               <FaLinkedinIn className="h-5 w-5" />
              </a>
            </li>

            <li className="bg-primary hover:bg-secondary rounded-full p-2">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white"
              >
                <FaDribbble className="h-5 w-5" />
              </a>
            </li>
          </ul>
            </div>
        </div>

        <div className="  h-max flex flex-row justify-start space-y-5 ">
         <div className=" w-1/2 mt-5">
         <p className=" font-bold text-xl">Other Pages</p>
          <ul className="mt-3 " >
            <li >
              <Link className="flex flex-row space-x-2  hover:text-slate-300  hover:font-semibold  mt-3" to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>Home</p>
              </Link>
            
            </li>
            <li >
              <Link className="flex flex-row space-x-2 hover:font-semibold  hover:text-slate-300  mt-3" to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>About Us</p>
              </Link>
            
            </li>
            <li >
              <Link className="flex flex-row space-x-2 hover:font-semibold  hover:text-slate-300  mt-3 " to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>Menu</p>
              </Link>
            
            </li>
            <li >
              <Link className="flex flex-row space-x-2 hover:font-semibold  hover:text-slate-300  mt-3" to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>Contact Us</p>
              </Link>
            
            </li>
          </ul>
         </div>
         <div className=" w-1/2 mt-5">
          <p className=" font-bold text-xl">Quick Links</p>
          <ul className="mt-3 " >
            <li >
              <Link className="flex flex-row space-x-2 hover:font-semibold  hover:text-slate-300 mt-3" to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>Privacy Policy</p>
              </Link>
            
            </li>
            <li >
              <Link className="flex flex-row space-x-2 hover:font-semibold  hover:text-slate-300  mt-3" to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>Term of Service</p>
              </Link>
            
            </li>
            <li >
              <Link className="flex flex-row space-x-2 hover:font-semibold  hover:text-slate-300  mt-3 " to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>Credits</p>
              </Link>
            
            </li>
            <li >
              <Link className="flex flex-row space-x-2 hover:font-semibold  hover:text-slate-300  mt-3" to={"/"}>
              <IoIosArrowForward  className="mt-1 text-primary font-bold"/>
               <p>FAQ</p>
              </Link>
            
            </li>
          </ul>
         </div>
        </div>
        <div className=" h-max flex flex-col justify-center items-center p-4 md:justify-start md:items-start space-y-5">
          <p className=" font-bold text-xl">Newsletter</p>
          <p></p>
         
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full  md:w-3/4 border-transparent shadow-sm rounded-md focus:z-10  focus:border-amber-500 border-2"
                    placeholder="Enter your email"
                  />
                  <button className="uppercase  w-full md:w-3/4 py-3 bg-primary rounded-md hover:bg-secondary text-white font-semibold">
                  Subscribe
                  </button>
        </div>
      </div>
      <div className="p-10 ">
        <div  className="border-b-[1px] border-slate-500 mt-5"></div>
        <p className="text-center text-sm text-white   py-5">
            Copyright &copy; {currentDate} | All rights reserved. | Web
            Design & Development by 
          </p>
      </div>
     
    </footer>
    </div>
  )
}

export default Footer
