import { useState } from "react";
// import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import CardContainer from "./components/CardContainer";
import { IItem } from "./types";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  // const [data, setData] = useState([]);
  const [state, setState] = useState<{ data: IItem[] }>({
    data: [],
  });
  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:5244/api/Item/GetAll", {
        method: "GET",
      });
      const jsonData: IItem[] = await data.json();
      console.log(jsonData);
      setState({ data: jsonData });
    };

    api();
  }, []);

  if (state.data == null || !(state.data.length > 0)) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="bg-dark">
      <Container fluid data-bs-theme="dark">
        <Row>
          <Header />
        </Row>
        <Row>
          <Col className={styles.col1} md="2"></Col>
          <Col md="8">
            <CardContainer items={state.data} />
          </Col>
          <Col className={styles.col1} md="2"></Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default App;
