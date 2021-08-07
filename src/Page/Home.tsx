import React, { FC } from 'react'
import { Layout } from 'antd';
import TheHeader from '../Component/UI/TheHeader';
import TheSideBar from '../Component/UI/TheSideBar';
import MainContent from '../Component/UI/MainContent';
const Home:FC = () => {
    return (
        <Layout>
            <TheHeader />
            <Layout>
                <TheSideBar/>
                <MainContent/>
            </Layout>
        </Layout>
    )
}

export default Home
