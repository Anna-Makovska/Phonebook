import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import s from "../ContactForm/ContactForm.module.css";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
// import ContactSchema from "./ContactSchema";

const RegistrationForm = () => {
    const fieldId = useId();


    const dispatch = useDispatch();
    
  const handleRegister = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  }
  
    return (
      <Formik
            initialValues={{
                name: '',
                email: '',
            password: '',
            }}
            onSubmit={handleRegister}
        // validationSchema={ContactSchema}
      >
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label htmlFor={`${fieldId}-username`} className={s.label}>
              Name
            </label>
            <Field
              className={s.inputUp}
              type='text'
              name='username'
              id={`${fieldId}-username`}
            ></Field>

            <ErrorMessage
              name='username'
              component='span'
              className={s.error}
              style={{ display: 'block', color: 'red', marginBottom: '10px' }}
            />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={`${fieldId}-email`} className={s.label}>
              Email
            </label>

            <Field
              className={s.inputDown}
              type='email'
              name='email'
              id={`${fieldId}-email`}
            ></Field>
            <ErrorMessage
              className={s.error}
              name='email'
              component='span'
              style={{ color: 'red' }}
            />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={`${fieldId}-password`} className={s.label}>
              Password
            </label>

            <Field
              className={s.inputDown}
              type='password'
              name='password'
              id={`${fieldId}-password`}
            ></Field>
            <ErrorMessage
              className={s.error}
              name='password'
              component='span'
              style={{ color: 'red' }}
            />
          </div>
          <button className={s.button} type='submit'>
            Register
          </button>
        </Form>
      </Formik>
    );
}
export default RegistrationForm;