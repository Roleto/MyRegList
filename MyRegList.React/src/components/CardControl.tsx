import { Button, Card } from "react-bootstrap";
import { IItem } from "../types";
import styles from "./CardControl.module.css";

export interface ICardControlProps {
  item: IItem;
  onClick: (item: IItem, button: number, editMode?: boolean) => void;
  selectMode?: boolean;
}

export function CardControl(props: ICardControlProps) {
  return (
    <>
      <Card
        key={props.item.id}
        style={{ width: "18rem" }}
        onClick={(ev: any) => {
          props.onClick(props.item, 0, ev.target.type == "button");
        }}
        onContextMenu={(ev: any) => {
          if (ev.target.type == "button") {
            return;
          }
          props.onClick(props.item, 2, false);
        }}
      >
        <small
          className={`${styles.indicator} ${
            props.item.selected ? styles.filled : ""
          }`}
        ></small>
        <Card.Img
          variant="top"
          src={
            props.item.imageUrl && props.item.imageUrl !== ""
              ? props.item.imageUrl
              : "https://random.imagecdn.app/450/300"
          }
        />
        <Card.Body>
          <Card.Title>{props.item.type}</Card.Title>
          <Card.Text>{props.item.description}</Card.Text>
          <Button variant="info">Edit</Button>
        </Card.Body>
      </Card>
    </>
  );
}
