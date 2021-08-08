import {  Layout} from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import CardItem from './CardItem';
import { restaurantsSelector } from '../../Store';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../Model';
const {Sider}=Layout;

const TheSideBar:React.FC = () => {
    const [searchParam,setSearchParam]=useState('')
    const {restaurants}= useSelector(restaurantsSelector)
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
         {restaurants.length>0&& restaurants.filter((item:Restaurant)=>item.name.toLowerCase().includes(searchParam.toLowerCase())).map((item:Restaurant) =><CardItem key={item.id} restaurantData={item}/>)}
      </Sider>
    )
   
}

export default TheSideBar
