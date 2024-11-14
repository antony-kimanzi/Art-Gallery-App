import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CollectionArt.css";

export default function CollectionArt() {
  const { id } = useParams();
  const [art, setArt] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/personalcollections/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
      });
  }, [id]);

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
        </div>
      </div>
    </div>
  );
}
