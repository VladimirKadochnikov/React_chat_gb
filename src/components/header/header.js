import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { firebaseApp } from "../../api/firebase";

const signOut = () => {
  return firebaseApp.auth().signOut;
};

export function Header({ session }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_main}>ReactApp Chat</h1>
      <nav>
        <Link to="/">Home</Link>
        {!!session && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/gists">Gists</Link>
          </>
        )}

        {!!session && <button onClick={signOut}>LOG OUT</button>}

        {!session && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign-up</Link>
          </>
        )}
      </nav>
    </div>
  );
}
