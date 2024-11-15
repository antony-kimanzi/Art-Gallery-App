import React from "react";
import ArtCards from "../component/ArtCards";
import AddNewArt from "../component/AddNewArt";
import { useState, useEffect } from "react";
import HomeSearchBar from "../component/HomeSearchBar";
import "./Home.css";

export default function Home() {
  const [artworks, setArtworks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://art-gallery-app-p7bu.onrender.com/artworks")
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, []);

  const addArtWork = (newArt) => {
    setArtworks((prevArts) => [...prevArts, newArt]);
  };

  const filteredResults = artworks.filter(
    (art) =>
      art.title.toLowerCase().includes(query.toLowerCase()) ||
      art.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="montserrat-font">
      <div className="header-section">
        <h1 className="home-header">Main Gallery</h1>
        <HomeSearchBar query={query} setQuery={setQuery} />
        <AddNewArt addArtWork={addArtWork} />
      </div>
      <p className="home-text">
        Welcome to the Main Gallery, a carefully curated collection showcasing a
        diverse array of artwork from talented artists around the world. Here,
        you'll find pieces spanning various styles, mediums, and genres,
        offering something for every art enthusiast. Each artwork is presented
        with a high-resolution preview, allowing you to explore details and gain
        insight into the artist’s vision and technique.
      </p>
      <h2 className="home-subheader">Gallery</h2>
      <ArtCards artworks={filteredResults} />
    </div>
  );
}
