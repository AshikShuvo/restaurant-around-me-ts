import { Layout} from 'antd';
import React from 'react';
import Map from './Map';
const {Content}=Layout;
const MainContent:React.FC = () => {
    return (
        <Content
            
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                backgroundColor:'#fff'
            }}
            >
            <Map/>
            </Content>
    )
}

export default MainContent
