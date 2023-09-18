import { ICardInterFace } from "../types";
import Badge from "./Badge";
import Button from "./Button";
import styles from "./Card.module.css";
// import "bootstrap/dist/css/bootstrap.cs";

const Card = (props: ICardInterFace) => {
  return (
    <div>
      /*{" "}
      <article className={`stack-lg ${styles.card}`}>
        {props.indicator && (
          <small className={styles.indicator}>{props.indicator}</small>
        )}

        {props.badge && (
          <Badge text={props.badge.text} filled={props.badge.filled} />
        )}
        {props.image && (
          <img src={props.image} alt="Random Image" className={styles.image} />
        )}
        <div className="stack-sm">
          <h3 className={styles.title}>{props.title} </h3>
          {props.subtitle && (
            <small className={styles.subtitle}>{props.subtitle} </small>
          )}
        </div>
        <p className={styles.body}>{props.body}</p>
        <Button
          href={props.btn.href}
          text={props.btn.text}
          filled={props.btn.filled}
          type={props.btn.type}
          icon={props.btn.icon}
        />
      </article>{" "}
      */
    </div>
  );
};

export default Card;

{
}
