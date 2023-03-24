import { Fragment, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './LoginForm.css'
import { NavLink, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { WatchListRecoil } from "../Recoil/WatchListRecoil";
// import { useRecoilState } from "recoil";

export const UserLoginForm = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    // const [watchList, setWatchList] = useRecoilState(WatchListRecoil)

    const formInitialSchema = {
        email: '',
        password: '',
    }

    const formValidationSchema = yup.object().shape({
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        password: yup.string().required('Please Enter your password').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"),
    });

    // const handleFormSubmit = (values) => {
    //     setSubmitButtonDisabled(true)
    //     signInWithEmailAndPassword(auth, values.email, values.password).then(res => {
    //         setSubmitButtonDisabled(false)
    //         localStorage.setItem('email', values.email)
    //         localStorage.setItem('isLoggedIn', true)
    //         setWatchList(JSON.parse(localStorage.getItem('' + values.email)))
    //         navigate('/home')
    //     }).catch(err => {
    //         setErrorMsg(err.message)
    //         setSubmitButtonDisabled(false)
    //     })
    // }

    // const handleFormSubmit = (values) => {
    //     setSubmitButtonDisabled(true)
    //     const reqBody = {
    //         email : String(values.email),
    //         password : String(values.password)
    //     }
    //     fetch('user/login',{
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
    //         localStorage.setItem('userLoggedIn', true)
    //         // localStorage.setItem('userId',)
    //         // setWatchList(JSON.parse(localStorage.getItem('' + values.email)))
    //     }).catch(err=>{
    //         setErrorMsg(err.message)
    //     }).finally(()=>{
    //         setSubmitButtonDisabled(false)
    //     })
    // }

    const handleFormSubmit = async (values) =>{
        setSubmitButtonDisabled(true)
        const reqBody = {
            email : String(values.email),
            password : String(values.password)
        }

        const response = await fetch('user/login',{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(reqBody)
        })
        if (response.status!=200){
            setErrorMsg("Error while Logging In")
            setSubmitButtonDisabled(false)
            return
        }
        const output = await response.json()
        navigate('/home')
        localStorage.setItem('isLoggedIn',true)
        localStorage.setItem('userLoggedIn',true)
        localStorage.setItem('userId',output.id)
        setSubmitButtonDisabled(false)
    }

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