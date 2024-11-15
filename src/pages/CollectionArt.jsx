import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CollectionArt.css";
import {toast} from 'react-toastify';
import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function CollectionArt() {
  const nav = useNavigate();
  const { id } = useParams();
  const [art, setArt] = useState({});

  useEffect(() => {
    fetch(`https://art-gallery-app-p7bu.onrender.com/personalcollections/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
      });
  }, [id]);
  
  function handleDelete() {
    fetch(`https://art-gallery-app-p7bu.onrender.com/personalcollections/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        nav("/personalcollection");
        toast.success("Art deleted successfully");
      });
  }
  return (
    <div className="art-page montserrat-font">
      <h1 className="header">
        <strong className="cormorant-garamond-regular-italic">Art Name: </strong>
        {art.title}
      </h1>
      <div className="art-container">
        <div className="image-container">
          <img src={art.image} alt={art.title} />
        </div>
        <div className="details-container">
          <h2>
            <strong className="cormorant-garamond-regular-italic">Artist: </strong>
            {art.artist}
          </h2>
          <p>
            <strong className="cormorant-garamond-regular-italic">Year: </strong>
            {art.year}
          </p>
          <p>
            <strong className="cormorant-garamond-regular-italic">Description: </strong>
            {art.description}
          </p>
          <p>
            <strong className="cormorant-garamond-regular-italic">Dimensions: </strong>
            {art.dimensions}
          </p>
          <p>
            <strong className="cormorant-garamond-regular-italic">Medium used: </strong>
            {art.medium}
          </p>
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
  );
}
