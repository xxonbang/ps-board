import React from 'react';
import '../../assets/scss/home/cate-cards.scss'

import { Card } from 'react-bootstrap'

export const CategoryCards = ({ data }) => {
  return (
    <div className="card-wrapper">
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">{data.title}</Card.Title>
          <Card.Text>
            {data.contents}
          </Card.Text>
          <Card.Link href={'' + data.link}>Link to Board</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}
