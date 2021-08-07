import { Layout} from 'antd';
import React from 'react';
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
        >
      </Sider>
    )
   
}

export default TheSideBar
