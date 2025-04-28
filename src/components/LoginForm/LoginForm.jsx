import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import s from './LoginForm.module.css';
function LoginForm() {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, actions) => {
                dispatch(login(values));
                actions.resetForm();
            }}
        >
            <Form className={s.form}>
                <Field name="email" type="email" placeholder="Email" className={s.input}/>
                <Field name="password" type="password" placeholder="Password" className={s.input}/>
                <button type="submit" className={s.button}>Login</button>
            </Form>
        </Formik>
    );
}

export default LoginForm;
