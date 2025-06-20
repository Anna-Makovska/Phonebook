import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Please log in</h2>
          <LoginForm />
        </div>
      </div>
    );
}

export default LoginPage;


