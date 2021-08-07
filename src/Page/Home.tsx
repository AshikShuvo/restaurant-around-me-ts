import React, { FC } from 'react'
 import TheHeader from '../Component/UI/TheHeader';
 import TheSideBar from '../Component/UI/TheSideBar';
import { Layout} from 'antd';
 import MainContent from '../Component/UI/MainContent';


const Home:FC = () => {
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
