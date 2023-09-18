import { BadgeInterface } from "../types"
import styles from './Badge.module.css'

const Badge = (props : BadgeInterface) => {
    const filledClass = props.filled ? styles.filled : "";
  return (
    <small className={`${styles.badge} ${filledClass}`} >{props.text}</small>
  )
}
export default Badge