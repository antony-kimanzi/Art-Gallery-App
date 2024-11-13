import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ArtCards.css"

export default function ArtCards({ artworks }) {
  return (
    <Row xs={1} md={4} className="g-4">
      {artworks.map((artwork) => {
        return (
          <Col key={artwork.id}>
          <Card>
            <Card.Img variant="top" src={artwork.image} className="card-img-top"/>
            <Card.Body>
              <Card.Title><strong>Title: </strong>{artwork.title}</Card.Title>
              <Card.Text><strong>Artist: </strong>{artwork.artist}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        );
      })}
      ;
    </Row>
  );
}
