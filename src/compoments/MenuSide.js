import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function MenuSide() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col xs={12} className="mb-2">
        <Toast
          bg="dark"
          style={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            padding: "5px",
            paddingLeft: "25px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          {showA === true ? (
            <h6
              className="me-auto"
              style={{ color: "white", whiteSpace: "nowrap" }}
            >
              Journey Board
            </h6>
          ) : (
            ""
          )}
          <Button
            className="me-2 mb-1 ms-5"
            onClick={toggleShowA}
            variant="dark"
          >
            <i className="fa-solid fa-bars"></i>
          </Button>
        </Toast>

        {showA === true ? (
          <Toast
            style={{ width: "fit-content", height: "814px" }}
            show={showA}
            onClose={toggleShowA}
          >
            <Toast.Body style={{ width: "235px" }}>
              <div style={{ margin: "15px" }}>
                <h6>1. demo task</h6>
                <hr style={{ width: "135px" }} />
                <ul style={{ width: "135px" }}>
                  <li>Task Heading 1</li>
                  <hr />
                  <li>Task Heading 1</li>
                  <hr />
                  <li>Task Heading 1</li>
                  <hr />
                  <li>Task Heading 1</li>
                  <hr />
                  <li>Task Heading 1</li>
                  <hr />
                  <li>Task Heading 1</li>
                  <hr />
                  <li>Task Heading 1</li>
                  <hr />
                </ul>
              </div>
            </Toast.Body>
          </Toast>
        ) : (
          <Toast
            style={{ width: "fit-content", height: "814px" }}
            show={!showA}
          >
            <Toast.Body style={{ width: "124px" }}>
              <Button variant="outline-primary">1</Button>{" "}
            </Toast.Body>
          </Toast>
        )}
      </Col>
    </Row>
  );
}

export default MenuSide;
