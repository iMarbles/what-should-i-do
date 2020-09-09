import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import activites from "./activities.json";

const style = {
  content: {
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  }
};

function ResultModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {activites[props.randomNum].Activity}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{activites[props.randomNum].Description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <Jumbotron fluid style={style.content}>
        <h1 style={{ fontFamily: "McLaren" }}>What Should I Do Generator</h1>
        <p style={{ fontFamily: "Raleway" }}>A random activity generator</p>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Generate
        </Button>
      </Jumbotron>

      <ResultModal
        show={showModal}
        onHide={() => setShowModal(false)}
        randomNum={Math.floor(Math.random()*activites.length)}
      ></ResultModal>
    </div>
  );
}

export default App;
