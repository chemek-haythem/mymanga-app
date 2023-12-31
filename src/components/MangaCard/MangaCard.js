import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;


const MangaCard = (manga) => (
  <>
  <Card
      hoverable
      style={{
      width: 240,
      }}
      cover={<img alt={manga.title} src={manga.image} />}
  >
    <Meta title={manga.title} description={manga.description}/>
  </Card>
  </>
);
export default MangaCard;