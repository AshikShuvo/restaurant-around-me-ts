import { createSlice } from "@reduxjs/toolkit";
import { UserLocation } from "../Model";
//act as an slice of redux store 
//all the logical action and mutation related to map can be managed here
const location=new UserLocation(23.8349877,90.41676420000002)
const mapSlice=createSlice({
    name:'mapState',
    initialState:{
        userLocation:location
    },
    reducers:{
        setUserLocation(state,action){
            state.userLocation=action.payload;
        }
    }
})

export const mapActions=mapSlice.actions;
export default mapSlice;