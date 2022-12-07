import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
const SentMail = () => {
  const sentData = useSelector((state) => state.compose.sentData);

  console.log(sentData);
  const sentList = sentData.map((data) => {
    return (
      <div>
        <Container>
          <Row xs={3} className="bg-light border p-3">
            <Col>
              <div>To:{data.To}</div>
            </Col>
            <Col>
              <div>Message:{data.message}</div>
            </Col>
            <Col>
              <Button variant="danger" className="deletebtn">
                Delete
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
  return <div>{sentList}</div>;
};

export default SentMail;
