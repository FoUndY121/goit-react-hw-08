import React from 'react';
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps.js"; // новий імпорт

function FormComponent() {
    const initialValues = {
        name: '',
        number: ''
    };

    const dispatch = useDispatch();

    const handleSubmit = (values, options) => {
        dispatch(addContact(values));
        options.resetForm();
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name="name" placeholder="Name" />
                    <Field name="number" placeholder="Number" />
                    <button type="submit">Add Contact</button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormComponent;
