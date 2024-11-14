import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddNewArt({addArtWork}) {
  const [addArt, setAddArt] = useState(false);
  const [artTitle, setArtTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [artDescription, setArtDescription] = useState("");
  const [year, setYear] = useState("");
  const [dimension, setDimension] = useState("");
  const [mediumUsed, setMediumUsed] = useState("");

  const handleShow = () => setAddArt(true);
  const handleClose = () => setAddArt(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/artworks", {
      method: "POST",
      body: JSON.stringify({
        title: artTitle,
        artist: artist,
        image: image,
        description: artDescription,
        year: year,
        dimension: dimension,
        medium: mediumUsed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((newArt) => {
        addArtWork(newArt);
        console.log("success");

        setArtTitle("");
        setArtist("");
        setImage("");
        setArtDescription("");
        setYear("");
        setDimension("");
        setMediumUsed("");

        handleClose()

      });
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new art
      </Button>

      <Modal show={addArt} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>New Art</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder=" Art Title"
                value={artTitle}
                onChange={(e) => setArtTitle(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="url"
                placeholder="Image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Art description"
                value={artDescription}
                onChange={(e) => setArtDescription(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Dimension"
                value={dimension}
                onChange={(e) => setDimension(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Medium used to paint"
                value={mediumUsed}
                onChange={(e) => setMediumUsed(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
