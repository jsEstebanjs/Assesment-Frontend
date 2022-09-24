import { createSlice } from '@reduxjs/toolkit'



export const CardSlice = createSlice({
    name:"card",
    initialState:{
        loading:false,
        card:[],
        error:null
    },
    reducers:{
        changeId:(state,action) => {
            state.id= action.payload
        },
        PostSucces:(state,action)=>{
            state.card = action.payload
        },
        PostLoading:(state,action)=>{
            state.loading = action.payload
        },
        PostError:(state,action)=>{
            state.error = action.payload
        }
    }
})
export const { PostLoading , PostSucces , changeId , PostError} = CardSlice.actions;

export default CardSlice.reducer;