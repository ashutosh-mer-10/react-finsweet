import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import twocolumnimg from "../images/twocolumn-img.png";
const Twocolumnsecone = (props) => {
  return (
    <>
      <div className="two-column-wrap section">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="content-box">
                <h2 className="h2 title">{props.title}</h2>
                <div className="info">{props.info}</div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img-box">
                <img
                  src={twocolumnimg}
                  alt="sec-img"
                  width={710}
                  height={496}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Twocolumnsecone;
