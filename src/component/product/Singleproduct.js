import React, { useEffect ,useState} from 'react'
import Swal from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getsingleProduct } from '../../Action/ProductAction';
import RatingStar from '../RatingStar';
import { createCart } from '../../Action/cartAction';


const Singleproduct = () => {
  const {id} = useParams();
  const {singleProduct} =useSelector((state) =>state.productState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() =>{
    
  dispatch(getsingleProduct(id))
    
  },[dispatch])
  console.log(singleProduct);
  const [price,setPrice] = useState(10)
  const [qty,setQty] = useState(1)

  const handleClick = (id,price,qty) =>{
    dispatch(createCart(id,price,qty))
    Swal.fire("Item Added To Cart");
 
  }
  return (
    <div className='md:container md:mx-auto  xl:max-w-5xl md:h-screen h-auto  mb-5'>
      <div className='flex md:flex-row flex-col mt-20 md:h-96 h-auto md:space-x-16'>
        <div className=' md:w-1/2 w-full px-2 h-96' >
          <img src={singleProduct.image} alt='single product' className=' object-cover rounded-xl' />
         
        </div>
        <div className='md:w-1/2 w-full  md:px-8 flex flex-col space-y-5'>
          <h1 className='text-2xl font-bold mt-5'>{singleProduct.name}</h1>
          <RatingStar rating={singleProduct.rating} className='mt-5 text-3xl' />
          <p>Meal Type : {singleProduct.mealType}</p>
          <p>Cook Time Minutes : {singleProduct.cookTimeMinutes}</p>
          <div className='mt-10 flex flex-row justify-between w-1/2 items-center'>
            <div>
              <p className='text-slate-300 text-lg '>Price</p>
              <p className='text-primary text-3xl'>$ {price}</p>

            </div>
           
            
          </div>
          
         
         

          <div>
          <button className='mt-5 bg-primary rounded-lg text-white px-8 py-2 hover:bg-secondary' onClick={() => handleClick(id,price,qty)}>Add to Cart</button>
          </div>
        </div>

      </div>
     
      
    </div>
  )
}

export default Singleproduct
