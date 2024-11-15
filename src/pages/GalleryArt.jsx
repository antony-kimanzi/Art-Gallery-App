import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./GalleryArt.css";

export default function GalleryArt() {
  const nav = useNavigate();
  const { id } = useParams();
  const [art, setArt] = useState({});
  const [isInCollection, setIsInCollection] = useState(false); 

  useEffect(() => {
    fetch(`http://localhost:3000/artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
      });

    fetch(`http://localhost:3000/personalcollections`)
      .then((res) => res.json())
      .then((personalCollection) => {

        const isAlreadyInCollection = personalCollection.some(
          (item) => item.id === parseInt(id)
        );
        setIsInCollection(isAlreadyInCollection);
      });
  }, [id]);

  const handleAddArt = (e) => {
    e.preventDefault();
    if (isInCollection) return; // Do nothing if already in collection
  
    fetch("http://localhost:3000/personalcollections", {
      method: "POST",
      body: JSON.stringify({
        id: art.id, // Include the id to match with artworks
        title: art.title,
        artist: art.artist,
        image: art.image,
        description: art.description,
        year: art.year,
        dimensions: art.dimensions,
        medium: art.medium,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setIsInCollection(true); // Update the state to disable button
        toast.success("Art added to personal collection!");
      });
  };
  
  const handleDelete = () => {
    fetch(`http://localhost:3000/artworks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        nav("/");
        toast.success("Art deleted successfully");
      });
  };

  return (
    <div>
      <div className="main-content montserrat-font">
        <h1 className="art-header">
          <strong className="cormorant-garamond-regular-italic">
            Art Name:
          </strong>{" "}
          {art.title}
        </h1>
        <div className="art-section">
          <div className="image-section">
            <img src={art.image} alt={art.title} />
          </div>
          <div className="details-section">
            <h2>
              <strong className="cormorant-garamond-regular-italic">
                Artist:
              </strong>{" "}
              {art.artist}
            </h2>
            <p>
              <strong className="cormorant-garamond-regular-italic">Year:</strong>{" "}
              {art.year}
            </p>
            <p>
              <strong className="cormorant-garamond-regular-italic">
                Description:
              </strong>{" "}
              {art.description}
            </p>
            <p>
              <strong className="cormorant-garamond-regular-italic">
                Dimensions:
              </strong>{" "}
              {art.dimensions}
            </p>
            <p>
              <strong className="cormorant-garamond-regular-italic">
                Medium used:
              </strong>{" "}
              {art.medium}
            </p>
            <Button
              variant="primary"
              onClick={handleAddArt}
              disabled={isInCollection}
              style={{
                backgroundColor: isInCollection ? 'gray' : '',
                borderColor: isInCollection ? 'gray' : '',
                cursor: isInCollection ? 'not-allowed' : 'pointer'
              }}
            >
              {isInCollection ? "Already in Personal Collection" : "Add to Personal Collection"}
            </Button>
            <Button
              variant="danger"
              className="delete-button"
              onClick={handleDelete}
            >
              Remove Art
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
