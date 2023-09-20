import { IBadge } from "../types";
import styles from "./Badge.module.css";

const Badge = (props: IBadge) => {
  const filledClass = props.filled ? styles.filled : "";
  return (
    <small className={`${styles.badge} ${filledClass}`}>
      {props.text ? props.text : ""}
    </small>
  );
};
export default Badge;
