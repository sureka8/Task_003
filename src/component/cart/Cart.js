import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreaseQty,
  IncreaseQty,
  removeItemfromCart,
} from "../../slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { items } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log(items);

  const decreaseQuantity = (item) => {
    const count = item.qty;
    if (count == 1) return;
    dispatch(DecreaseQty(item.id));
  };

  const handleAdd = () =>{
navigate('/confirm/order')
  }
  return (
    <div className="bg-slate-100 h-auto">
      <div className="container mx-auto px-8 py-10">
        <div className="flex md:flex-row flex-col ">
          <div className="md:w-3/4  w-full md:px-10">
            <h3 className="text-2xl font-bold py-2">Shoping Bags</h3>
            <p>
              {" "}
              <span className="font-bold"> {items.length} Items </span>in Your
              Bag
            </p>
            <div className="">
              <div className="mt-10 md:col-span-2 col-span-1 bg-white rounded-xl shadow-xl w-full s   sm:block hidden py-3">
                <table className="w-full table-auto   px-5 py-10 ">
                  <thead className="  ">
                    <tr className="text-sm text-left text-gray-500 dark:text-gray-400  py-3">
                      <th className="  flex items-center px-6 pb-3 font-medium dark:text-gray-400 md:flex-row flex-col">
                        <span>Product</span>
                      </th>
                      <th className="px-3 pb-3 font-medium">Product Name</th>

                      <th className=" px-3 pb-3 font-medium">Price</th>
                      <th className=" px-3 pb-3 font-medium">Quantity</th>
                      <th className=" px-3 pb-3 font-medium">Total</th>
                      <th className=" px-3 pb-3 font-medium">Action</th>
                    </tr>
                  </thead>

                  {items.map((item) => (
                    <tbody>
                      <tr className="border-b-2 border-b-primary ">
                        <td className="px-3 py-5 font-medium ">
                          {" "}
                          <img
                            src={item.image}
                            alt="s"
                            className="h-24 object-cover rounded-md w-24"
                          />
                        </td>
                        <td className="px-3 py-5 font-medium ">
                          {" "}
                          <p>{item.name}</p>
                        </td>

                        <td className="px-3 py-5 font-medium ">
                          {" "}
                          <p>${item.price}</p>
                        </td>
                        <td className="px-3 py-5 font-medium ">
                          <div>
                            <button
                              className="px-2 rounded-md border-gray-500 border-2 "
                              onClick={() => decreaseQuantity(item)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="w-7 ml-3"
                              value={item.qty}
                            />
                            <button
                              className="px-1 rounded-md border-gray-500 border-2 "
                              onClick={() => dispatch(IncreaseQty(item.id))}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-3 py-5 font-medium text-primary ">
                          ${item.price * item.qty}
                        </td>
                        <td className="px-3 py-5 font-medium ">
                          {" "}
                          <button
                            className="text-sm text-black border-2 border-gray-600 rounded-md px-3 py-2 hover:text-red-500 bg-slate-300"
                            onClick={() =>
                              dispatch(removeItemfromCart(item.id))
                            }
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            {/* for mobile */}
              <div className="md:hidden ">
              <div className='md:hidden  w-full table-auto  mt-5'>
 {items.map((item) =>(
<div className='flex flex-row space-x-5 ' >
<img src={item.image} alt='s' className='h-28 w-28'/>
<div className='flex flex-col space-y-3'><p>{item.name}</p>

<p>${item.price}</p>
<div className='flex space-x-3'>
<div >
    <button className='bg-amber-500 hover:bg-amber-600 px-2  rounded-l w-6 text-white font-semibold text-lg text-center' onClick={()=>decreaseQuantity(item)} >-</button>
    <input type='number' className='w-7 ml-5' value={item.qty} />
    <button className='bg-amber-500 hover:bg-amber-600 px-2  rounded-r w-5 text-white font-semibold text-lg' onClick={()=>dispatch(IncreaseQty(item.id))}>+</button>
  </div>
  <button onClick={() => dispatch(removeItemfromCart(item.id))} className='text-lg text-red-500'><MdDelete /></button>
  </div>
  </div>
</div>
))}

  </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/4 w-full md:mt-20 ">
            <div className=" bg-cart mt-10 rounded-xl  h-auto p-3">
              <p className="text-xl font-bold">Cart Total</p>
              <div className="flex justify-between px-5 mt-3">
                <p>Sub Total</p>
                <p>
                  ${items.reduce((acc, item) => acc + item.qty * item.price, 0)}
                </p>
              </div>
              <div className="flex justify-between px-5 mt-3">
                <p>Discount(10%)</p>
                <p className="text-white">
                  - $
                  {items.reduce(
                    (acc, item) => acc + item.qty * item.price * 0.1,
                    0
                  )}
                </p>
              </div>

              <div className="flex justify-between px-5 mt-3 ">
                <p className="font-bold">Cart Total</p>
                <p className=" text-2xl">
                  {" "}
                  $
                  {items.reduce(
                    (acc, item) =>
                      acc + item.qty * item.price - item.qty * item.price * 0.1,
                    0
                  )}
                </p>
              </div>

              <div className="flex items-center justify-center my-3 ">
              <button className="bg-white text-black rounded-2xl w-full py-1 mt-2  font-bold hover:bg-black hover:text-white"
              onClick={() => handleAdd()}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
