import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import s from './ RegistrationForm.module.css';
function RegistrationForm() {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values, actions) => {
                dispatch(register(values));
                actions.resetForm();
            }}
        >
            <Form className={s.form}>
                <Field name="name" placeholder="Name" className={s.input} />
                <Field name="email" type="email" placeholder="Email" className={s.input}/>
                <Field name="password" type="password" placeholder="Password" className={s.input}/>
                <button type="submit" className={s.button}>Register</button>
            </Form>
        </Formik>
    );
}

export default RegistrationForm;
