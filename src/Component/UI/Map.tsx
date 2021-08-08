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
    const {userLocation,direction,targetLocation}=useSelector(mapSelector)
    const {restaurants}=useSelector(restaurantsSelector)
    const mapRef = useRef(null); //reference to the div where the map will be mounted
    let userLatlng = new google.maps.LatLng(userLocation.latitude, userLocation.longitude);//used by google place api
    const directionService = new window.google.maps.DirectionsRenderer();
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

            const drawRoute = () => {
                new window.google.maps.DirectionsService().route({
                    origin: userLatlng,
                    destination: new window.google.maps.LatLng(targetLocation.lat, targetLocation.lng),
                    travelMode: 'DRIVING'
                }, (response:any, status:any) => {
                    if (status === 'OK') {
                        directionService.setDirections(response);
                    } else {
                        console.log("couldn't find route");
                    }
                });
            }
            if(direction){
                const selectedAddress = new window.google.maps.LatLng(targetLocation.lat, targetLocation.lng);
            directionService.setMap(map)
            drawRoute();
            let bounds = new window.google.maps.LatLngBounds();
            bounds.extend(selectedAddress);
            bounds.extend(userLatlng);
            map.fitBounds(bounds);
            }
           
        }
    }
    return (
        <>
        {userLocation&&<div style={{ height: "100%", width: "100%" }} ref={mapRef} />}
        </>
    )
}

export default Map
