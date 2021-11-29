import { Link } from "react-router-dom";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_main}>ReactApp Chat</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chat</Link>
      </nav>
    </div>
  );
}
