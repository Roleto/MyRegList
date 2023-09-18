import { ButtonInterface } from "../types"
import styles from './Button.module.css'

const Button = (props : ButtonInterface) => {
  const filledClass = props.filled ? styles.filled : "";
  return (
    <a href={props.href} className={`${styles.btn} ${styles[props.type.toLocaleLowerCase()]} ${filledClass}`} >
      <span>{props.text}</span>
      {props.icon}
      </a>
  )
}
export default Button