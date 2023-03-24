import { Fragment, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './RegisterForm.css'
import { NavLink, useNavigate } from "react-router-dom";
import { WatchListRecoil } from "../Recoil/WatchListRecoil";
import { useRecoilState } from "recoil";

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const [WatchList, setWatchList] = useRecoilState(WatchListRecoil)
    const phoneRegExp = /^[+]?\d{1,3}[.-\s]?\d{1,3}[.-\s]?\d{3}[.-\s]?\d{4}$/;

    const formInitialSchema = {
        name: '',
        email: '',
        phoneNumber : '',
        password: '',
        confirmPassword: "",
    }

    const formValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
        password: yup.string().required('Please Enter your password').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Be Atleast 8 Characters, Contain One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
    });

    const handleFormSubmit = async (values) =>{
        setSubmitButtonDisabled(true)
        const reqBody = {
            name : String(values.name),
            email : String(values.email),
            password : String(values.password),
            phone_number : String(values.phoneNumber)
        }

        const response = await fetch('user/register',{
            method : "POST",
            headers : {
                "COntent-Type" : "application/json"
            },
            body : JSON.stringify(reqBody)
        })
        if (!response.ok){
            setErrorMsg("Error while registering")
            setSubmitButtonDisabled(false)
            return
        }
        const output = await response.json()
        console.log(output.user.id)
        navigate('/home')
        localStorage.setItem('isLoggedIn',true)
        localStorage.setItem('userLoggedIn',true)
        localStorage.setItem('userId',output.user.id)
        console.log(localStorage.getItem('userId'))
        setSubmitButtonDisabled(false)
    }

    // const handleFormSubmit = (values) => {
    //     setSubmitButtonDisabled(true)
    //     const reqBody = {
    //         name : String(values.name),
    //         email : String(values.email),
    //         password : String(values.password),
    //         phone_number : String(values.phoneNumber)
    //     }
    //     fetch('user/register',{
    //         method : 'POST',
    //         headers : {
    //             'Content-Type' : 'application/json',
    //         },
    //         body : JSON.stringify(reqBody)
    //     }).then(response=>{
    //         if (!response.ok){
    //             setErrorMsg("Error while registering")
    //             return
    //         }
    //         navigate('/home')
    //         localStorage.setItem('isLoggedIn', true)
    //         localStorage.setItem('userLoggedIn',true)
    //         // localStorage.setItem('' + values.email, JSON.stringify([]))
    //         // const interest = {
    //         //     'thriller': 0,
    //         //     'action': 0,
    //         //     'comedy': 0,
    //         //     'horror': 0,
    //         //     'romance': 0
    //         // }
    //         // localStorage.setItem(values.email + 'movies', JSON.stringify(interest))
    //         // setWatchList([])
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
                        <Form className='register-form'>
                            <div className='comp'>
                                <div className="input">Name</div>
                                <Field type="text" name="name" placeholder="Enter your Name" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="name" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Email</div>
                                <Field type="text" name="email" placeholder="Enter your Email" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Phone Number</div>
                                <Field type="text" name="phoneNumber" placeholder="Enter your Phone Number" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="phoneNumber" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Password</div>
                                <Field type="password" name="password" placeholder="Enter your Password" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="password" />
                                </p>
                            </div>
                            <div className='comp'>
                                <div className="input">Confirm Password</div>
                                <Field type="password" name="confirmPassword" placeholder="Confirm your Password" className="form-control" />
                                <p className="text-danger">
                                    <ErrorMessage name="confirmPassword" />
                                </p>
                            </div>
                            <div className='error-message'>{errorMsg}</div>
                            <div className="end">
                                <button className="register-button" type="submit" disabled={submitButtonDisabled}>
                                    Sign Up
                                </button>
                            </div>
                            <div className='register-footer'>
                                <div>Already a User?<NavLink className='link-to-login' to='/login'>Login Now!</NavLink></div>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </Fragment >
    )
                }