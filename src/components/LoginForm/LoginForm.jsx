import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

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
            <Form>
                <Field name="email" type="email" placeholder="Email" />
                <Field name="password" type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
}

export default LoginForm;
