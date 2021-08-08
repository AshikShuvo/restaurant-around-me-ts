import {  Layout} from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import CardItem from './CardItem';
import { restaurantsSelector } from '../../Store';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from '../../Model';
import { restaurantsActions } from '../../Store/restaurants-slice';
import { mapActions } from '../../Store/map-slice';
const {Sider}=Layout;

const TheSideBar:React.FC = () => {
    const [searchParam,setSearchParam]=useState('');
    const {restaurants}= useSelector(restaurantsSelector);
    const dispatch=useDispatch();
    const clickHandler=(id:string)=>{
        const targetRestaurant:Restaurant|any=restaurants.find((item:Restaurant)=>item.id===id);
        const {location}=targetRestaurant;
         dispatch(mapActions.setToShowDirection({lat:location.lat,lng:location.lng,id:id}));
    }
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '573px',
                left: 0,
              
                backgroundColor:'	#00008B'
            }}
            width={300}
        >
            
         <Input onChange={(e=>setSearchParam(e.target.value))} placeholder="search for restaurants"  style={{backgroundColor:"#00008B",color:'#fff'}}/>
         {restaurants.length>0&& restaurants.filter((item:Restaurant)=>item.name.toLowerCase().includes(searchParam.toLowerCase())).map((item:Restaurant) =><CardItem key={item.id} restaurantData={item} clickHandler={clickHandler}/>)}
      </Sider>
    )
   
}

export default TheSideBar
