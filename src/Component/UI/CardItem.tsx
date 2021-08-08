import { Card } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

const CardItem:React.FC = () => {
    return (
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
    )
}

export default CardItem
