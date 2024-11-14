import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./GalleryArt.css";
export default function GalleryArt() {
  const nav = useNavigate();
  const { id } = useParams();
  const [art, setArt] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
      });
  }, [id]);

  const handleAddArt = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/personalcollections", {
      method: "POST",
      body: JSON.stringify({
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
      .then((json) => console.log(json));
  };

  function handleDelete() {
    fetch(`http://localhost:3000/artworks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        nav("/");
        toast.success("Art deleted successfully");
      });
  }
  return (
    <div>
      <div className="main-content montserrat-font">
        <h1 className="art-header">
          <strong className="cormorant-garamond-regular-italic">
            Art Name:
          </strong>
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
              </strong>
              {art.artist}
            </h2>
            <p>
              <strong className="cormorant-garamond-regular-italic">
                Year:
              </strong>
              {art.year}
            </p>
            <p>
              <strong className="cormorant-garamond-regular-italic">
                Description:
              </strong>
              {art.description}
            </p>
            <p>
              <strong className="cormorant-garamond-regular-italic">
                Dimensions:
              </strong>
              {art.dimensions}
            </p>
            <p>
              <strong className="cormorant-garamond-regular-italic">
                Medium used:
              </strong>
              {art.medium}
            </p>
            <Button variant="primary" onClick={handleAddArt}>
              Add art to personal collection
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
