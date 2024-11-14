import React from 'react'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function SingleArt() {
    const{id} = useParams()
    const [art,setArt] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data)
    });
    },[])

  return (
    <div>
          <Col >
          <Card >
            <Card.Img variant="top" src={art.image} className="card-img-top"/>
            <Card.Body>
              <Card.Title><strong>Title: </strong>{art.title}</Card.Title>
              <Card.Text><strong>Artist: </strong>{art.artist}</Card.Text>
              <Card.Text><strong>Art Description: </strong>{art.description}</Card.Text>
              <Card.Text><strong>Year: </strong>{art.year}</Card.Text>
              <Card.Text><strong>Dimension: </strong>{art.dimensions}</Card.Text>
              <Card.Text><strong>Medium used to paint: </strong>{art.medium}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </div>
  )
}
