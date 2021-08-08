import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Restaurant } from '../../Model';
import { mapSelector, restaurantsSelector } from '../../Store';
import restaurantIcon from '../../assets/restaurantMarker.svg';
declare global{
    interface Window {
        google:any;
    }
}


const { google} = window; //window got accessed to google map related services api via script attached in public/index.html
const Map:React.FC = () => {
    const {userLocation}=useSelector(mapSelector)
    const {restaurants}=useSelector(restaurantsSelector)
    const mapRef = useRef(null); //reference to the div where the map will be mounted
    let userLatlng = new google.maps.LatLng(userLocation.latitude, userLocation.longitude);//used by google place api
    useEffect(() => {
        initGoogleMap();
    });
    const initGoogleMap = () => {
        //initializing google map provided by google place api
        let map = new google.maps.Map(mapRef.current, {
            zoom: 15,
            center: userLatlng
        });
        new google.maps.Marker({
            //positioning the marker on users current location
            position: userLatlng,
            title: "User Location",
            map: map
        },[]);

        if (restaurants) {
            let icon = {
                url: restaurantIcon,
                size: new google.maps.Size(100, 100),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 45)
            };

            restaurants.forEach(({ name, location }:Restaurant) => {
                //marking restaurants location
                new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lng),
                    animation: google.maps.Animation.DROP,
                    icon,
                    map: map,
                    label:name,
                });
            });
        }
    }
    return (
        <>
        {userLocation&&<div style={{ height: "100%", width: "100%" }} ref={mapRef} />}
        </>
    )
}

export default Map
