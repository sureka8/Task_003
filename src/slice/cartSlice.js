import { createSlice } from "@reduxjs/toolkit";

const  cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        loading:false
    },
    reducers:{
        addCartItem(state,action){
         return{
            ...state,
            loading:true
         }
        },
        addCartItemsuccess(state,action){
            const item= action.payload;
            const isItemExist = state.items.find((i)=> i.id === item.id)
            if (isItemExist) {
                state = {
                  ...state,
                  loading: false,
                };
              } else {
                state = {
                  items: [...state.items, item],
                  loading: false,
                };
                localStorage.setItem("cartItems", JSON.stringify(state.items));
              }
              return state;
            
        },
        removeItemfromCart(state,action){
            const filterItem = state.items.filter((item) =>{
                return item.id !== action.payload
            })
            localStorage.setItem('cartItems', JSON.stringify(filterItem))
            return{
                ...state,
                items: filterItem
            }
        },
        IncreaseQty(state,action){
          state.items = state.items.map((item) => {
            if (item.id === action.payload) {
              item.qty = item.qty + 1;
            }
            return item;
          });
          localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        DecreaseQty(state,action){
          state.items = state.items.map((item) => {
            if (item.id === action.payload) {
              item.qty = item.qty - 1;
            }
            return item;
          });
          localStorage.setItem("cartItems", JSON.stringify(state.items));
        },

        clearCart(state,action){
          localStorage.removeItem('cartItems');
          return{
            items:[],
            loading:false,
         
          }
        }
    }
})

const {actions,reducer} = cartSlice

export const {addCartItem,addCartItemsuccess,removeItemfromCart,IncreaseQty,DecreaseQty,clearCart} =actions

export default reducer