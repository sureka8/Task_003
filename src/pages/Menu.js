import React, { useEffect, useState } from 'react'
import RatingStar from '../component/RatingStar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from '../Action/ProductAction';


const Menu = () => {
  const [food,setFood] =useState([])
  const {product =[]} =useSelector((state) =>state.productState)
  const dispatch = useDispatch()
  console.log(product);
  useEffect(() =>{
    dispatch(getAllProduct())
    
  },[dispatch])
  console.log(food);
  const [price,setPrice] = useState(10)
  return (

    <div className='container mx-auto px-2'>
      <h2 className='text-center text-6xl font-semibold mt-10'> Delicious <span className='text-primary'>Dishes</span></h2>
      <div className='grid md:grid-cols-4 grid-col-1 gap-12 mt-10 px-8 md:px-0'>
      {product.map((item) =>(
        <Link to={`/menu/singleproduct/${item.id}`} >
        <div className='  mt-5 h-auto rounded-xl shadow-md hover:scale-110 duration-300 '>
          <img src={item.image} alt=""  className='h-48 w-full object-cover rounded-t-xl'/>
          <div className='p-5 mt-3'>
          <p className='font-bold text-lg border-b border-b-slate-300 pb-3'>{item.name}</p>
          <p className='text-lg text-slate-400 my-3'>CookTimeMinutes:{item.cookTimeMinutes}</p>
          <RatingStar rating={item.rating} />
          <div className='flex flex-row justify-between my-3' > 
             <p>$ {price}</p>
             <button  className='px-3 rounded-xl text-sm hover:bg-secondary text-white bg-primary'>Buy Now</button>
             </div>
          </div>
          
        </div>
        </Link>
      ))

      }
    
    </div>
    </div>
  )
}

export default Menu
