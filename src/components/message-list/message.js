import classNames from "classnames";
import styles from "./message-list.module.css";

export const Message = ({ message }) => {
  return (
    <div
      className={classNames(styles.message, {
        [styles.bot_message]: message.author === "Bot",
      })}
    >
      <h2 className={styles.name}>{message.author}</h2>
      <p className={styles.text}>{message.message}</p>
      <p className={styles.time}>{message.date.toLocaleTimeString()}</p>
    </div>
  );
};
