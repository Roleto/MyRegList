import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IItem } from "../types";
import { Col, Container, Form, Row } from "react-bootstrap";

export interface ICardModalProps {
  item: IItem;
  show: boolean;
  handleClose: () => void;
  handleSave: () => void;
  editMode?: boolean;
}

function CardModal(props: ICardModalProps) {
  const [item, setItem] = useState<IItem>(props.item);

  //   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Card Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm="3">Name :</Col>
              <Col>
                {props.editMode && (
                  <Form.Control
                    id={item.id.toString()}
                    type="text"
                    value={item.name}
                    onChange={(ev) =>
                      setItem({ ...item, name: ev.target.value })
                    }
                  />
                )}
                {!props.editMode && item.name}
              </Col>
            </Row>
            <Row>
              <Col sm="3">Type :</Col>
              <Col>
                {props.editMode && (
                  <Form.Control
                    id={item.id.toString()}
                    type="text"
                    value={item.type}
                    onChange={(ev) =>
                      setItem({ ...item, type: ev.target.value })
                    }
                  />
                )}
                {!props.editMode && item.type}
              </Col>
            </Row>
            <Row>
              <Col sm="3">Image :</Col>
              <Col>{item.imageUrl}</Col>
            </Row>
            <Row>
              <Col sm="3">Descripton :</Col>
            </Row>
            <Row>
              <Col>
                {props.editMode && (
                  <Form.Control
                    id={item.id.toString()}
                    type="textarea"
                    value={item.description}
                    onChange={(ev) =>
                      setItem({ ...item, description: ev.target.value })
                    }
                  />
                )}
                {!props.editMode && item.description}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {props.editMode && (
            <Button variant="danger" onClick={props.handleClose}>
              Delete
            </Button>
          )}
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardModal;
