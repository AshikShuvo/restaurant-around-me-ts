import React, { FC, useEffect } from 'react'
import TheHeader from '../Component/UI/TheHeader';
import TheSideBar from '../Component/UI/TheSideBar';
import { Layout} from 'antd';
import MainContent from '../Component/UI/MainContent';
import { useDispatch,useSelector } from 'react-redux';
import { mapActions } from '../Store/map-slice';
import axios from 'axios';
import { UserLocation } from '../Model';
import { mapSelector } from '../Store';
const Home:FC = () => {
    const dispatch=useDispatch();
      const {userLocation}=useSelector(mapSelector)
    // console.log(userLocation)
    useEffect(() => {
        getCurrentLocation()      
    },[])
    useEffect(()=>{
        fetchRestaurantData();
    },[userLocation])

    const getCurrentLocation=():void=>{ 
        //function to get user location and populate the local state named userLocation
        if (navigator && navigator.geolocation) {//check first if the browser support navigator
            navigator.geolocation.getCurrentPosition((currentPosition) => {
                    const location=new UserLocation(currentPosition.coords.latitude,currentPosition.coords.longitude)
                 dispatch(mapActions.setUserLocation(location));
            });
        }
    }

    // fetch restaurant related data
    const fetchRestaurantData=():void=>{
        axios.get(`https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=20180805&limit=50&ll=${userLocation.latitude},${userLocation.longitude}&radius=${3000}&query=food`)
        .then((res) => {
            const restaurants:any=[];
          res.data.response.groups[0].items.forEach((item:any)=>{
              const {id,name,location,}=item.venue;
              const restaurant={
                  id,
                  name,
                  location:{
                      lat:location.lat,
                      lng:location.lng,
                      address:location.formattedAddress.toString()
                  },
                  distance:location.distance/1000
              };
            //   const restaurant= id,name,location.distance/1000,{lat:location.lat,lng:location.lng,formattedAddress:location.formattedAddress})
              restaurants.push(restaurant);

          })
          //dispatching an action to populate restaurantsState belongs to root state in the redux store with all fetched restaurants data
        //   dispatch(restaurantsActions.setRestaurants(restaurants))
        console.log(JSON.stringify(restaurants));
        })
        .catch(err => console.error(err));
    }

    return (
        <Layout>
        <TheHeader/>
        <Layout>
            <TheSideBar/>
            <Layout style={{ padding: '0 24px 24px', marginTop:24 }}>
                <MainContent/>
            </Layout>
        </Layout>
      </Layout>
    )
}

export default Home
