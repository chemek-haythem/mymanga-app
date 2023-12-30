import React from "react";
import { Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const ShoppingButton = () => {
    return (
        <Button
            shape="circle"
            icon={<ShoppingOutlined />}
            style={{ backgroundColor: 'grey', borderColor: 'grey', color: 'white' }}
        
        >
        </Button>
    )
}

export default ShoppingButton;