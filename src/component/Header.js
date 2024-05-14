import React, { useState } from 'react'
import logo from '../image/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";


const Header = () => {
    const item =[
        {id:1,name:"Home", link:'/'},
        {id:2,name:"About Us",link:'/about'},
        {id:3,name:"Menu", link:'/menu'},
        {id:4,name:"Contact Us", link:'/contctus'}
    ]
    const { items: cartItems } = useSelector((state) => state.cartState);
    const [open,setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open);
      };
  return (
   <nav>
     <div className='bg-white shadow-md px-2 '>
    <div className=' flex flex-row  justify-between   md:mx-auto md:container items-center  text-xl'>

        <div className='md:hidden' onClick={() =>setOpen(!open)}>
            {open? <RxCross1 /> :  <HiBars3 />}
        </div>
            <img src={logo} alt="Log" className='h-24' />
       
        <div className='md:flex flex-row md:space-x-12 text-black hidden  '>
            {item.map((item)=>(
 <ul >
    <Link to={item.link}>
 <li className='hover:text-white hover:bg-primary hover:rounded-full hover:px-3 hover:py-1 hover:text-lg  '>{item.name}</li>
 </Link>
</ul>
            ))}
          
        </div>
        <div className='flex flex-row items-center space-x-5'>
  <Link to={'/cart'}> 
 
                  <div class=" flex justify-center items-center">
                    <div class="relative ">
                      <div class="t-0 absolute left-3">
                        <p class="flex h-2 w-2 items-center justify-center rounded-full bg-primary p-2 text-xs text-white">
                          {cartItems.length || 0}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="file: mt-2 h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>
                  </div>
               
  </Link> 
  <button  className='bg-primary rounded-full px-8 py-1 text-lg text-white hover:bg-secondary hidden md:block '>Login</button>
        </div>
     
    </div>
    </div>

    <div>
       
  <ul
  className={`
md:hidden bg-white z-10 fixed w-full h-56 top-20 overflow-y-auto bottom-0  pb-10 pl-4 justify-center 
duration-500  ${open ? "left-0" : "left-[-100%]"} 
`}
>
{item.map((item) =>(
   <Link to={item.link} onClick={toggleMenu}>
<li className='text-blace py-2'>{item.name}</li>
<hr />
</Link>
  ))}
  </ul>
      
  
    </div>
   </nav>

   
  )
}

export default Header
