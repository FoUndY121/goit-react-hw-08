import React from 'react';
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps.js";
import s from './FormComponent.module.css';
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
        <div className={s.formContainer}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                <Form className={s.form}>
                    <Field name="name" placeholder="Name"  className={s.input}/>
                    <Field name="number" placeholder="Number" className={s.input} />
                    <button type="submit" className={s.addButton}>Add Contact</button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormComponent;
