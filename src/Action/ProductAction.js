import {
    SingleproductRequset,
  SingleproductSuccess,
  productFail,
  productRequest,
  productSuccess,
  singleProductFail,
} from "../slice/productSlice";

export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch(productRequest());
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();

    dispatch(productSuccess(data));
  } catch (error) {
    dispatch(productFail(error));
  }
};


export const getsingleProduct = (id) =>async(dispatch) =>{
  try {
    dispatch(SingleproductRequset())
    const res = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data =await  res.json()
    dispatch(SingleproductSuccess(data))
    
  } catch (error) {
    dispatch(singleProductFail(error))
  }  

}