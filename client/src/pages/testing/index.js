import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    mobileNumber: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    address: Yup.string().required('Required'),
    password: Yup
        .string()
        .required('Please enter your password.')
        .min(8, 'Your password is too short.'),
    retypePassword: Yup
        .string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.')
});


const userRegistration = async(values)=> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
    const res = await fetch('http://localhost:8000/testing',requestOptions)
   }

const Testing = () => (
    <div>
        <h1>Register</h1>
        <Formik
            initialValues={{
                fullName: '',
                mobileNumber: '',
                address: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                userRegistration(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="fullName" placeholder="Full Name" />
                    {errors.fullName && touched.fullName ? (
                        <div>{errors.fullName}</div>
                    ) : null}
                    <br />
                    <Field name="mobileNumber" type="number" placeholder="Mobile Number" />
                    {errors.mobileNumber && touched.mobileNumber ? (
                        <div>{errors.mobileNumber}</div>
                    ) : null}
                    <br />
                    <Field name="address" type="address" placeholder="Address" />
                    {errors.address && touched.address ? <div>{errors.address}</div> : null}
                    <br />
                    <Field name="password" placeholder="password" />
                    {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                    ) : null}
                    <br />
                    <Field name="retypePassword" placeholder="retypePassword" />
                    {errors.retypePassword && touched.retypePassword ? (
                        <div>{errors.retypePassword}</div>

                    ) : null}
                      <br />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);
export default Testing