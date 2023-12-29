import React from "react";
import { Card } from 'antd';

const Basket = () => {
    return (
        <div>
            <h1>Your Current Basket</h1> 
                <Card title="Shopping List">
                    <Card 
                        type="inner" 
                        title="Inner Card title" 
                        // extra={<a href="#">Delete</a>}
                    >
                        Inner Card content
                    </Card>
                    <Card
                        style={{
                            marginTop: 16,
                        }}
                        type="inner"
                        title="Inner Card title"
                        // extra={<a href="#">Delete</a>}
                    >
                        Inner Card content
                    </Card>
                </Card>
        </div>
    );
};

export default Basket;
