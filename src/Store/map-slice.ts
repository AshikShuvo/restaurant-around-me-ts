import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { UserLocation } from "../Model";
//act as an slice of redux store 
//all the logical action and mutation related to map can be managed here
const location=new UserLocation(23.8349877,90.41676420000002)
const mapSlice=createSlice({
    name:'mapState',
    initialState:{
        userLocation:location,
        searchArea:3000,
        direction:false,
        targetLocation:{lat:0,lng:0,id:''},
        reRenderer:false
    },
    reducers:{
        setUserLocation(state,action){
            state.userLocation=action.payload;
        },
        setToShowDirection(state,action){
            const {lat,lng,id}:any=action.payload;
            if(state.targetLocation.id!==id){
                state.direction=true;
                state.targetLocation={lat:lat,lng:lng,id:id};
                state.reRenderer=!state.reRenderer;
            }else{
                state.direction=false;
                state.reRenderer=!state.reRenderer;
            }
            

        }
    }
})

export const mapActions=mapSlice.actions;
export default mapSlice;