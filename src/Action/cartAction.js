import { addCartItem, addCartItemsuccess } from "../slice/cartSlice"


export const createCart = (id,price,qty) => async(dispatch) =>{
    try {
        dispatch(addCartItem())
        const res = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data =await  res.json();
        dispatch(addCartItemsuccess({
            id: data.id,
            name:data.name,
            image:data.image,
            price,
            qty,

        }))
        
    } catch (error) {
        
    }
   
    
}