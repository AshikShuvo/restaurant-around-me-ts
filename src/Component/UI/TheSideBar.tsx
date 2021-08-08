import { Card, Col, Layout, Menu, Row, Space} from 'antd';
import React from 'react';
import { Input } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Avatar from 'antd/lib/avatar/avatar';
const {Sider}=Layout;

const TheSideBar:React.FC = () => {
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
            
                <Input placeholder="search for restaurants"  style={{backgroundColor:"#00008B",color:'#fff'}}/>
               
                <Card
                    hoverable
                    style={{ width: 250, marginTop: 16,marginLeft:25 }}
                >
                   <Meta
              avatar={
                <Avatar src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" />
              }
              title="Card title"
              description="This is the description"
            />
                </Card>
                  
               
                                
                
             
             
               
        
            
      </Sider>
    )
   
}

export default TheSideBar
