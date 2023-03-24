import { ErrorMessage, Field, Form, Formik } from "formik";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import * as yup from 'yup';

export const AdminLoginForm = () =>{
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

    const formInitialSchema = {
        email: '',
        password: '',
    }

    const formValidationSchema = yup.object().shape({
        email: yup.string().required('Email is required').email("Please enter Valid email"),
    });

    const handleFormSubmit = async (values) => {
        setSubmitButtonDisabled(true)
        const reqBody = {
            email : String(values.email),
            password : String(values.password)
        }
        const response = await fetch('admin/login',{
            method : "POST",
            headers : {
                "COntent-Type" : "application/json"
            },
            body : JSON.stringify(reqBody)
        })
        if (response.status!=200){
            setErrorMsg("Error while logging In")
            setSubmitButtonDisabled(false)
            return
        }
        const output = await response.json()
        navigate('/home')
        localStorage.setItem('isLoggedIn',true)
        localStorage.setItem('adminLoggedIn',true)
        localStorage.setItem('adminId',output.adminId)
        setSubmitButtonDisabled(false)
    }

    // const handleFormSubmit = (values) => {
    //     setSubmitButtonDisabled(true)
    //     const reqBody = {
    //         email : String(values.email),
    //         password : String(values.password)
    //     }
    //     fetch('admin/login',{
    //         method : 'POST',
    //         headers : {
    //             'Content-Type' : 'application/json',
    //         },
    //         body : JSON.stringify(reqBody)
    //     }).then(response=>{
    //         if (response.status!=200){
    //             setErrorMsg("Error while logging in")
    //             return
    //         }
    //         navigate('/home')
    //         localStorage.setItem('isLoggedIn',true)
    //         localStorage.setItem('adminLoggedIn', true)
    //         // setWatchList(JSON.parse(localStorage.getItem('' + values.email)))
    //     }).catch(err=>{
    //         setErrorMsg(err.message)
    //     }).finally(()=>{
    //         setSubmitButtonDisabled(false)
    //     })
    // }

    return (
        <Fragment>
            <div className="container">
                <Formik initialValues={formInitialSchema} validationSchema={formValidationSchema}
                    onSubmit={(values => handleFormSubmit(values))}>
                    {({ values }) =>
                        <Form className="login-form">
                            <div className='comp'>
                                <div className="input">Email</div>
                                <Field type="text" name="email" placeholder="Enter your Email"
                                    className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Password</div>
                                <Field type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="password" />
                                </p>
                            </div>
                            <div className='error-message'>{errorMsg}</div>
                            <div className="end">
                                <button className="login-button" type="submit" disabled={submitButtonDisabled}>
                                    Login
                                </button>
                            </div>
                            <div className='login-footer'>
                                <div>New User?<NavLink className='link-to-register' to='/register'>Register Now!</NavLink></div>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </Fragment >
    )
}