
import React from 'react';
import ArtCards from '../component/ArtCards';
import {useState, useEffect} from 'react';
import "./Home.css";

export default function Home() {
  const [artworks, setArtworks] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/artworks")
    .then((res)=> res.json())
    .then((data) => setArtworks(data));
  },[]);
  
  
  return (
    <div className='main montserrat-font'>
      <h1 className='home-header'>Main Gallery</h1>
      <p className='home-text'>Welcome to the Main Gallery, a carefully curated collection showcasing a diverse array of artwork from talented artists around the world. Here, you'll find pieces spanning various styles, mediums, and genres, offering something for every art enthusiast. Each artwork is presented with a high-resolution preview, allowing you to explore details and gain insight into the artist’s vision and technique.</p>
      <h2 className='home-subheader'>Gallery</h2>
      <ArtCards artworks={artworks}/>
    </div>
  )
}

