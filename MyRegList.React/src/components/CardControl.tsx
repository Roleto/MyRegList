import { Button, Card } from "react-bootstrap";
import { IItem } from "../types";
import styles from "./CardControl.module.css";

export interface ICardControlProps {
  item: IItem;
  onClick: (item: IItem, button: number, editMode?: boolean) => void;
  selectMode?: boolean;
  hasIndicator: boolean;
  isIndicatorFilled: boolean;
}

export function CardControl(props: ICardControlProps) {
  return (
    <>
      <Card
        key={props.item.id}
        style={{ width: "18rem" }}
        onClick={(ev:any) => { // nem müköödik ev: React.MouseEvent<HTMLElement, MouseEvent> ??
          props.onClick(props.item, 0, ev.target.type == "button");
        }}
        // onContextMenu={(ev: any) => { right click
        //   if (ev.target.type == "button") {
        //     return;
        //   }
        //   props.onClick(props.item, 2, false);
        // }}
      >
        {props.hasIndicator && (
          <small
            className={`${styles.indicator} ${
              props.isIndicatorFilled ? styles.filled : ""
            }`}
          ></small>
        )}
        <Card.Img
          variant="top"
          src={
            props.item.imageUrl && props.item.imageUrl !== ""
              ? props.item.imageUrl
              : "https://random.imagecdn.app/450/300"
          }
        />
        <Card.Body className="bg-secondary">
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.description}</Card.Text>
          <Button 
              variant="info"
             onClick={() => { 
              props.onClick(props.item, 0, true,);
            }}>
              Edit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
