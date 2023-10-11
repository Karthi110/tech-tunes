import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={`/${url ? url : "/"}`}>
      <button className={styles.btn}>{text}</button>
    </Link>
  );
};

export default Button;
