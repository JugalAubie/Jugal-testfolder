import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from '../components/FormikControl';
import * as Yup from "yup";
import axios from 'axios';
import '../App.css'
import { templateUrl } from '../utils/API';


function Template(props) {

    const initialValues = {
        name: '',
        email: '',
        selectOption: '',
        checkboxOption: [],
        radioOption: '',
    }
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'React', value: 'React' },
        { key: 'Node', value: 'Node' },
        { key: 'Python', value: 'Python' }
    ]
    const checkboxOptions = [
        { key: 'FrontEnd', value: 'FrontEnd' },
        { key: 'BackEnd', value: 'BackEnd' },
        { key: 'FullStack', value: 'FullStack' }
    ]
    const radioOptions = [
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' },

    ]
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Formate').required('Pleas Enter Email'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),

    })

    const onSubmit = values => {
        console.log('Form data', values)
        axios.post(templateUrl, values)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        window.alert('Template Created')
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <div className='form-control'>
                        <FormikControl
                            control='input'
                            type='input'
                            label='Name'
                            name='name'
                            className='field col-md-6'
                        />
                    </div>
                    <div className='form-control'>
                        <FormikControl
                            control='input'
                            type='input'
                            label='Email'
                            name='email'
                            className='field'
                        />
                    </div>
                    <div className='form-control'>
                        <FormikControl
                            control='select'
                            label='Technology : '
                            name='selectOption'
                            options={dropdownOptions}
                            className='field'
                        /></div>
                    <div className='form-control'>
                        <FormikControl
                            control='checkbox'
                            label='Field : '
                            name='checkboxOption'
                            options={checkboxOptions}
                        />
                    </div>

                    <div className='form-control'>
                        <FormikControl
                            control='radio'
                            label='Gender'
                            name='radioOption'
                            options={radioOptions}
                        />
                    </div>
                    <button type='submit'
                        className='btn btn-primary mt-4'
                        disabled={!formik.isValid}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}


export default Template;