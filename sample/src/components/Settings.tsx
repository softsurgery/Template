import { Container, Row, Col } from "react-bootstrap";
import { Dashboard } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { Details } from "./Details";

export const Settings = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={3} style={{ backgroundColor: "gray" }}>
            <Sidebar />
          </Col>
          <Col xs={6} style={{ backgroundColor: "red" }}>
            <Dashboard />
          </Col>
          <Col xs={3} style={{ backgroundColor: "blue" }}>
            <Details />
          </Col>
        </Row>
      </Container>
    </>
  );
};
