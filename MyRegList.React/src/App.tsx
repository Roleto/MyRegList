import { useState } from "react";
// import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import CardContainer from "./components/CardContainer";
import { IItem } from "./types";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Header from "./components/Header";
import ApiService from "./components/ApiService";

function App() {
  // const [data, setData] = useState([]);
  const [state, setState] = useState<{ data: IItem[] }>({
    data: [],
  });
  useEffect(() => {
    const api = async () => {
      const data = await ApiService.GetAll();
      setState({ data: data });
    };
    api();
  }, []);

  return (
    <div className="bg-dark">
      <Container fluid data-bs-theme="dark">
        <Row>
          <Header />
        </Row>
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            { state.data == null || !(state.data.length > 0) &&
             <Spinner variant="primary" animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
           </Spinner>
            }
            {state.data !=null && state.data.length > 0 &&
            <CardContainer items={state.data} />
            }
          </Col>
          <Col  md="2"></Col>
        </Row>
        <Row></Row>
      </Container> 
    </div>
  );
}

export default App;
