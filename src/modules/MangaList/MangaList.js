import React, { useContext} from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Col, Row } from "antd";
import MangaCard from "../../components/MangaCard/MangaCard";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const addToCartButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '8px 16px',
};

const MangaList = () => {
  const mangaListData = useLoaderData();
  const { setStateValue } = useContext(ShoppingCardContext);

  const handleOnAddTocartClick = (manga) => {
    setStateValue((prevItems) => [...prevItems, manga]);
  };

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const mangaColumns = chunkArray(mangaListData, 3);

  return (
    <div className="mangalist">
      {mangaColumns.map((column, columnIndex) => (
        <Row gutter={[16, 16]} key={columnIndex}>
          {column.map((manga) => (
            <Col key={manga.id} span={8} style={colStyle}>
              <Link to={manga.id.toString()} style={{ flexGrow: 1 }}>
                <MangaCard
                  title={manga.title}
                  description={manga.description}
                  image={manga.image}
                  price={manga.price}
                />
              </Link>
              <Row>
                <Col span={8}>
                  <p>Price: {manga.price}</p>
                </Col>
                <Col span={8} offset={0}>
                  <Button onClick={() => handleOnAddTocartClick(manga)} style={{ ...addToCartButtonStyle, alignSelf: 'flex-start' }}>
                    Add To Cart
                  </Button>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default MangaList;
