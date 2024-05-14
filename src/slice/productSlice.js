import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice ({
    name: "product",
    initialState:{
        product : [],
        loading:false,
        singleProduct: {}
    },
   
     reducers:{
        productRequest(state,action){
            return{
                ...state,
              loading:true
            }
        },
        productSuccess(state, action){
            return {
                ...state,
                loading: false,
                product: action.payload.recipes
            }
        },
        productFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        SingleproductRequset(state,action) {
            return{
                ...state,
                loading:true
            }
        },
        SingleproductSuccess(state,action) {
            return{
                ...state,
                loading:false,
                singleProduct:action.payload
            }
        },
        singleProductFail(state,action){
            return{
                ...state,
                loading: false,
                error:  action.payload
            }
        }
     }
})

const {actions,reducer} = productSlice

export const {productRequest,productSuccess,productFail,
    SingleproductRequset,SingleproductSuccess,singleProductFail
} = actions

export default reducer;