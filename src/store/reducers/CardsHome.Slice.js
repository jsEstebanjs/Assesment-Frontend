import { createSlice } from '@reduxjs/toolkit'



export const HomeCardsSlice = createSlice({
    name:"homeCards",
    initialState:{
        cards:[],
        loading:false,
        error:null
    },
    reducers:{
        PostLoading:(state,action) => {
            state.loading = action.payload
        },
        PostSucces:(state,action)=>{
            state.cards = action.payload
        },
        PostError:(state,action)=>{
            state.error = action.payload
        }
    }
})
export const {PostLoading , PostSucces , PostError} = HomeCardsSlice.actions;

export default HomeCardsSlice.reducer;