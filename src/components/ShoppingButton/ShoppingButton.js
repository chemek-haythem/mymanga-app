import React from "react";
import { Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const ShoppingButton = ({itemNum}) => {
    console.log(itemNum);
    return (
        <>
            <Button
                shape="circle"
                icon={<ShoppingOutlined />}
                style={{ backgroundColor: 'grey', borderColor: 'grey', color: 'white' }}
            
            >
                <div
                    style={{
                    position: 'absolute',
                    bottom: '10px', // Adjust as needed to position the circle
                    right: '-10px', // Adjust as needed to position the circle
                    backgroundColor: 'red',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '12px',
                    }}
                >
                    {itemNum}
                </div>
            </Button>
        </>

    )
}

export default ShoppingButton;