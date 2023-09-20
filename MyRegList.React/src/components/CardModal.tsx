import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IItem } from "../types";
import { Col, Container, Form, Row } from "react-bootstrap";
import React from "react";

export interface ICardModalProps {
  items: IItem[];
  show: boolean;
  handleClose: () => void;
  handleSave: (item:IItem[]) => void;
  handleDelete: (id?:number) => void;
  
  editMode?: boolean;
}
export interface ICardModalState {
  items : IItem[];
}

class  CardModal extends React.Component<ICardModalProps,ICardModalState> {
  constructor(props:ICardModalProps) {
    super(props);
      this.state = {
        items: props.items
      };
  }

  //   const handleShow = () => setShow(true);
  render(): React.ReactNode {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>  {this.state.items[0].id === -1 ? "Create Card" : "Card Info"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.items.map((item: IItem) => (
              <Container key={item.id}>
                <Row>
                  <Col sm="3">Name :</Col>
                  <Col>
                    {this.props.editMode && (
                      <Form.Control
                        id={item.id.toString()}
                        type="text"
                        value={item.name}
                        onChange={(ev) =>{
                        let editedItems = this.state.items;
                        editedItems[editedItems.findIndex(x => x.id === item.id)].name = ev.target.value;
                        this.setState({items : editedItems});
                          }
                        }
                      />
                    )}
                    {!this.props.editMode && item.name}
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">Type :</Col>
                  <Col>
                    {this.props.editMode && (
                      <Form.Control
                        id={item.id.toString()}
                        type="text"
                        value={item.type}
                        onChange={(ev) =>{
                          let editedItems = this.state.items;
                          editedItems[editedItems.findIndex(x => x.id === item.id)].type = ev.target.value;
                          this.setState({items : editedItems});
                            }
                          }
                      />
                    )}
                    {!this.props.editMode && item.type}
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">Image :</Col>
                  <Col>{item.imageUrl ?? "There are no image uploaded"}</Col>
                </Row>
                <Row>
                  <Col sm="3">Descripton :</Col>
                </Row>
                <Row>
                  <Col>
                    {this.props.editMode && (
                      <Form.Control
                        id={item.id.toString()}
                        type="textarea"
                        value={item.description}
                        onChange={(ev) =>{
                          let editedItems = this.state.items;
                          editedItems[editedItems.findIndex(x => x.id === item.id)].description = ev.target.value;
                          this.setState({items : editedItems});
                            }
                          }
                      />
                    )}
                    {!this.props.editMode && item.description}
                  </Col>
                </Row>
              </Container>
            ))}
          </Modal.Body>
          <Modal.Footer>
            {this.props.items.length === 1 && this.props.editMode && this.props.items[0].id !== -1 &&(
              <Button variant="danger" onClick={() => this.props.handleDelete(this.props.items[0].id)}>
                Delete
              </Button>
            )}
            <Button variant="secondary" onClick={() =>{
                  this.props.handleClose();
                }
              }>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.props.handleSave(this.state.items)}>
            {/* <Button variant="primary" onClick={() => console.log( ApiService.GetById(this.state.items[0].id))}> */}
              {this.state.items[0].id === -1 ? "Create new" : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CardModal;
