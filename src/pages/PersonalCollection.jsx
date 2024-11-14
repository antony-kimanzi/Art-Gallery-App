import { useEffect } from "react";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import CollectionSearchBar from "../component/CollectionSearchBar";
import "./PersonalCollection.css";

export default function PersonalCollection() {
  const [collection, setCollection] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/personalcollections")
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);

  const filteredCollection = collection.filter((art) => {
    return (
      (art.title?.toLowerCase().includes(query.toLowerCase()) || '') ||
      (art.artist?.toLowerCase().includes(query.toLowerCase()) || '')
    );
  });
  

  return (
    <div className="montserrat-font">
      <div className="header-section">
        <h1 className="personalcollection-header">Personal Collection</h1>
        <CollectionSearchBar query={query} setQuery={setQuery} />
      </div>
      <p className="personalcollection-text">
        Your Personal Collection is a curated gallery of artworks that have
        captured your interest and inspiration. This space allows you to easily
        revisit and enjoy the pieces that resonate with you most, creating a
        unique, personalized experience within the gallery. Whether it's
        specific artists, styles, or individual pieces, your Personal Collection
        reflects your own journey through the world of art.
      </p>
      <h2 className="personalcollection-subheader">My Collection</h2>
      <Row xs={1} md={4} className="g-4">
        {filteredCollection.map((artwork) => {
          return (
            <Link to={`/personalcollection/${artwork.id}`} key={artwork.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={artwork.image}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Art Name: </strong>
                    {artwork.title}
                  </Card.Title>
                  <Card.Text>
                    <strong>Artist: </strong>
                    {artwork.artist}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
        ;
      </Row>
    </div>
  );
}
