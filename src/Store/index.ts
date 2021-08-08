import { configureStore } from "@reduxjs/toolkit";
 import mapSlice from "./map-slice";
import restaurantsSlice from "./restaurants-slice";
//redux store exported with different slice of store and reducer powered by @reduxjs/toolkit
const Store=configureStore({
    reducer:{mapState:mapSlice.reducer,restaurantsState:restaurantsSlice.reducer}
});
type RootState=ReturnType<typeof Store.getState>
export const mapSelector=(state:RootState)=>state.mapState;
export const restaurantsSelector=(state:RootState)=>state.restaurantsState;
export default Store;