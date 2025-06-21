import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import styles from "./RegisterPage.module.css";


const RegisterPage = () => {
  
  
    return (
      <div className={styles.pageContainer}>
        <h2 className={styles.title}>Register your account</h2>
        <RegistrationForm />
      </div>
    );
}

export default RegisterPage;