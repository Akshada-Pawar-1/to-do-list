import Logo from "../Logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <h2>To-Do List</h2>
    </div>
  );
}
