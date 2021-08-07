import { Layout } from 'antd';
import React from 'react'
const {Header}=Layout;
const TheHeader:React.FC = () => {
    return (
        <Header 
        className="header"
        style={{
            backgroundColor:"#0000FF",
        }}
        >
            <h2 style={{color:'#fff'}}><strong>Khamu Koi?</strong></h2>
        </Header>
    )
}

export default TheHeader
