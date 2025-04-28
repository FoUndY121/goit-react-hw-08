import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

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
            <Form>
                <Field name="name" placeholder="Name" />
                <Field name="email" type="email" placeholder="Email" />
                <Field name="password" type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}

export default RegistrationForm;
