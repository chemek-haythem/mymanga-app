import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from 'antd';
import { ShoppingCardContext } from "../../context/ShoppingCardContext";
import BasketItem from "../../components/BasketItem/BasketItem";

const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const addToCartButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '90px',
    padding: '8px 16px',
  };

const Basket = () => {
    const [totalToPay, setTotalToPay] = useState(0);
    const { stateValue } = useContext(ShoppingCardContext);
    const { setStateValue } = useContext(ShoppingCardContext);

    const handleOnRemoveClick = (mangaToRemove) => {
        // Find the index of the manga item to be removed from state based on its id
        const indexToRemove = stateValue.findIndex(manga => manga.id === mangaToRemove.id);  
        if (indexToRemove !== -1) {
          // Create a copy of the state array
          const updatedState = [...stateValue];
          // Remove the item at the found index
          updatedState.splice(indexToRemove, 1);
          // console.log(updatedState); // Check if the correct item is removed
          setStateValue(updatedState); // Update the state
        }
    };

    useEffect(() =>{
        let total = 0;
        stateValue.map((manga) => (
            total = total + manga.price
        ));
        setTotalToPay(total);
    }, [stateValue]);

    return (
        <div>
            <h1>Your Current Basket</h1>
                <section>
                    <a href="MangaList">Explore Manga List</a>
                </section>
                <div className="mangalist">
                        {stateValue.map((manga, index) => (
                            <Row gutter={[16, 16]} key={`${manga.id}-${index}`}>
                                <Col key={manga.id} span={8} style={colStyle}>
                                        <BasketItem
                                            title={manga.title}
                                            description={manga.description}
                                            image={manga.image}
                                            price={manga.price}
                                        />
                                    <Row>
                                        <Col span={8}>
                                            <p>Price: {manga.price}</p>
                                        </Col>
                                        <Col span={8} offset={0}>
                                            <Button onClick={() => handleOnRemoveClick(manga)} style={{ ...addToCartButtonStyle, alignSelf: 'flex-start' }}>
                                                Remove
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        ))}
                </div>
                <section>
                    <h1 href="MangaList">CheckOut : </h1>
                        <Row> 
                            <Col span={8}>
                                <h2>Total to pay: {totalToPay}</h2>
                            </Col>
                        </Row>
                </section>
        </div>
    );
};

export default Basket;
