import styles from "./HomePage.module.css";
const Homepage = () => {
    return (
      <div className={styles.homeContainer}>
        <h1 className={styles.title}>
          Don't want to forget all your contacts? No worries! This place is for
          you😄
        </h1>
      </div>
    );
}

export default Homepage;