import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { IItem } from "../types";
// import { useState } from "react";
import styles from "./CardContainer.module.css";
import { CardControl } from "./CardControl";
import CardModal from "./CardModal";
import React from "react";
import ApiService from "./ApiService";

export interface ICardContainerProps {
  items: IItem[];
}
export interface ICardContainerState {
  items: IItem[];
  showModal: boolean;
  selectedItems: IItem[];
  editMode?: boolean;
  selectMode?: boolean;
}
class CardContainer extends React.Component<
  ICardContainerProps,
  ICardContainerState
> {
  constructor(props: ICardContainerProps) {
    super(props);
    this.state = {
      items: this.props.items,
      showModal: false,
      selectedItems: [],
    };
  }

  // props: ICardInterFace
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });

  componentDidMount(): void {
    this.setState({
      items: this.props.items,
      showModal: false,
    });
  }
  handleSave = async (items:IItem[] ) => {
    if(items.length === 1){
      if(items[0].id === -1)
        await ApiService.AddItem(items[0]);
      else
        await ApiService.UpdateItem(items[0]);
      
    }else{
      // todo save with array
    }
    // const valami = await ApiService.GetById(item.id);
    // console.log(valami);

    // const newItems = await ApiService.GetAll();

    this.setState({
      items: await ApiService.GetAll(),
      selectedItems: [],
      showModal: false,
      editMode: false,
    });
  }

  handleDelete = async (id?:number) => {
    if(id === undefined){
     if(this.state.selectedItems.length === 1){
        await ApiService.DeleteItem(this.state.selectedItems[0].id);

     }
    }else{
      await ApiService.DeleteItem(id);
    }

    this.setState({
      items: await ApiService.GetAll(),
      selectedItems: [],
      showModal: false,
      editMode: false,
    });
  }
  handleCardClicked = (item: IItem, button: number, editMode?: boolean) => {
    if (button == 0) {
      if (this.state.selectMode) {
        if(editMode){
          // console.log(this.state.selectedItems);
          
          // this.setState({showModal:true});
        }  
        if (this.state.selectedItems.length == 0) {
          this.setState({ selectedItems: [item] });
        } else if (this.state.selectedItems.filter((x) => x.id === item.id).length > 0) {
            this.setState({selectedItems: this.state.selectedItems.filter((x) => x.id !== item.id)});
          }else{
            this.setState({selectedItems: [...this.state.selectedItems,item]});
          }
      } else {
        this.setState({
          selectedItems: [item],
          editMode: editMode,
          showModal: true,
        });
      }
    } else if (button == 2) {
      console.log(this.state.items.filter((x) => x.id === item.id));

      if (this.state.selectedItems.filter((x) => x.id === item.id).length > 0) {
        const newItem: IItem = { ...item };
        const newItems = this.state.selectedItems.filter(
          (x) => x.id !== item.id
        );
        newItems.push(newItem);
        // this.setstate({items: newItems.sort((a, b) => a.id - b.id)});
        this.setState({ items: newItems.sort((a, b) => a.id - b.id) });
      } else {
        const newItem = { ...item };
        this.setState({
          selectedItems: [...this.state.selectedItems, newItem],
        });
      }
    }
  };
  render(): React.ReactNode {
    return (
      <div>
        <Container fluid className={styles.cardContainer}>
          <Row className={styles.headerRow}>
            <Col sm="2">
              <Stack direction="horizontal" gap={3}>
                <Button  
                  variant="secondary"
                  onClick={() => this.setState({
                    selectedItems:[{id:-1,name:"",type:"",description:""}],
                    showModal:true,
                    selectMode:false,
                    editMode:true
                  })}
                >New
                </Button>
                <Button
                  onClick={() =>
                    this.setState({selectedItems:[], selectMode: !this.state.selectMode })
                  }
                  variant="secondary">
                  Select
                </Button>
              </Stack>
            </Col>
            <Col sm="5" />
            <Col sm="5">
            <Stack direction="horizontal" gap={3} >
              <Form.Control className="" placeholder="Search for item" />{" "}
              <Button className={styles.deleteBtn} onClick={() => this.handleDelete()} variant="danger">Delete</Button>{" "}
              </Stack>
            </Col>
            {/* <Col sm="1">
            </Col> */}
          </Row>
          <Row>
            {this.state.items.map((mItem: IItem) => (
              <Col key={mItem.id} md="4" className={styles.col}>
                {this.props.items.length > 0 && (
                  <CardControl
                    item={mItem}
                    onClick={this.handleCardClicked}
                    hasIndicator={this.state.selectMode ?? false}
                    isIndicatorFilled={this.state.selectedItems.filter(x => x.id === mItem.id).length > 0}
                  />
                )}
              </Col>
            ))}
          </Row>
        </Container>
        {this.state.selectedItems.length > 0 && (
          <CardModal
            items={this.state.selectedItems}
            show={this.state.showModal}
            handleClose={() =>
              this.setState({
                items:this.props.items,
                selectedItems: [],
                showModal: false,
                editMode: false,
              })
            }
            handleSave={this.handleSave}
            handleDelete={this.handleDelete}
            editMode={this.state.editMode}
          />
        )}
      </div>
    );
  }
}
export default CardContainer;
