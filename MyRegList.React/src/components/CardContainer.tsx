import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { IItem } from "../types";
// import { useState } from "react";
import styles from "./CardContainer.module.css";
import { CardControl } from "./CardControl";
import { useState } from "react";
import CardModal from "./CardModal";

export interface ICardContainerProps {
  items: IItem[];
}
export interface ICardContainerState {
  items: IItem[];
  showModal: boolean;
  selectedItems: IItem[];
  editMode?: boolean;
}
// props: ICardInterFace
function CardContainer(props: ICardContainerProps) {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  // const [data, setData] = useState("")
  //   const [data, setData] = useState<{ stateData: ICardInterFace[] }>({
  //     stateData: [],
  //   });
  const [state, setstate] = useState<ICardContainerState>({
    items: props.items,
    showModal: false,
    selectedItems: [],
  });
  function handleCardClicked(
    item: IItem,
    button: number,
    editMode?: boolean
  ): void {
    if (button == 0) {
      setstate({
        ...state,
        selectedItems: [item],
        editMode: editMode,
        showModal: true,
      });
    } else if (button == 2) {
      console.log(state.items.filter((x) => x.id === item.id));

      if (state.selectedItems.filter((x) => x.id === item.id).length > 0) {
        const newItem: IItem = { ...item, selected: true };
        const newItems = state.selectedItems.filter((x) => x.id !== item.id);
        newItems.push(newItem);
        setstate({
          ...state,
          items: newItems.sort((a, b) => a.id - b.id), //itt tartasz kell egy: IBadge + loading imagehez
        });
      } else {
        const newItem = { ...item, selected: true };
        setstate({
          ...state,
          // items: [
          //   ...state.items
          //     .filter((x) => x.id !== item.id)
          //     .sort((x, y) => x.id - y.id),
          //   newItem,
          // ],
          selectedItems: [...state.selectedItems, newItem],
        });
      }
    }
  }

  //   const handleShow = () => setShow(true);
  return (
    <div>
      <Container className={styles.cardContainer}>
        <Row className={styles.headerRow}>
          <Col sm="2">
            <Stack direction="horizontal" gap={3}>
              <Button variant="secondary">New</Button>
              <Button variant="secondary">Select</Button>
            </Stack>
          </Col>
          <Col sm="6" />
          <Col sm="3">
            <Form.Control className="" placeholder="Search for item" />{" "}
          </Col>
          <Col sm="1">
            <Button variant="danger">Delete</Button>{" "}
          </Col>
        </Row>
        <Row>
          {state.items.map((mItem: IItem) => (
            <Col key={mItem.id} md="3" className={styles.col}>
              {props.items.length > 0 && (
                <CardControl item={mItem} onClick={handleCardClicked} />
              )}
            </Col>
          ))}
        </Row>
      </Container>
      {state.selectedItems.length > 0 && (
        <CardModal
          item={state.selectedItems[0]}
          show={state.showModal}
          handleClose={() =>
            setstate({
              ...state,
              selectedItems: [],
              showModal: false,
              editMode: false,
            })
          }
          handleSave={() => ({})}
          editMode={state.editMode}
        />
      )}
    </div>
  );
}
export default CardContainer;
