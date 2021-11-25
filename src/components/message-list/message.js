import styles from "./message-list.module.css";

export const Message = ({ message }) => {
  return (
    <div className={styles.message}>
      <h2 className={styles.name}>{message.author}</h2>
      <p className={styles.text}>{message.message}</p>
      <p className={styles.text}>{message.date.toLocaleTimeString()}</p>
    </div>
  );
};
