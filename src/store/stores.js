import { configureStore } from "@reduxjs/toolkit";
import  HomeCardsSlice  from "./reducers/CardsHome.Slice";
import CardSlice from "./reducers/Card.Slice";

export const store = configureStore({
    reducer:{
      homeCards:HomeCardsSlice,
      card:CardSlice
    }
})