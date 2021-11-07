import styles from "./Feature.module.css";

const Features = () => {
  return (
    <div className={styles.features__wrapper}>
      <div className={styles.feature__wrapper}>
        <i className="fas fa-user-plus"></i>
        <h1>Multiple People Support</h1>
        <h2>One-Chat Rooms can handle several people together</h2>
      </div>
      <div className={styles.feature__wrapper}>
        <i className="fas fa-compress-alt"></i>
        <h1>Ease of joining and creating rooms.</h1>
        <h2>You can join or create a room with just the room name.</h2>
      </div>
      <div className={styles.feature__wrapper}>
        <i className="far fa-clock"></i>
        <h1>Message Info</h1>
        <h2>
          In a message , the sender of the message and time the message was sent
          is diplayed.
        </h2>
      </div>
      <div className={styles.feature__wrapper}>
        <i className="far fa-grin-wink"></i>
        <h1>Emoji Support</h1>
        <h2>Emojis can be used in chat.</h2>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.upcoming}>
        <big>Upcoming Features</big>
        <h2>1)Spam Detection</h2>
        <h2>2)Images as messages</h2>
        <h2>3)Host system ( a single host can admit and kick out users. )</h2>
      </div>
    </div>
  );
};

export default Features;
