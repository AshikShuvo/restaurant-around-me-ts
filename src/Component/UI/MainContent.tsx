import { Layout} from 'antd';
import React from 'react'
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
            Content
            </Content>
    )
}

export default MainContent
