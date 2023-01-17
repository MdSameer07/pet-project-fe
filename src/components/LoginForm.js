import { Fragment, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './LoginForm.css'
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { WatchListRecoil } from "../Recoil/WatchListRecoil";
import { useRecoilState } from "recoil";

export const LoginForm = () =>{
    const navigate = useNavigate();
    const [errorMsg,setErrorMsg] = useState("")
    const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false)
    const [watchList,setWatchList] = useRecoilState(WatchListRecoil)

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
    
    const handleFormSubmit = (values) => {
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth,values.email,values.password).then(res=>{
            setSubmitButtonDisabled(false)
            localStorage.setItem('email',values.email)
            localStorage.setItem('isLoggedIn',true)
            setWatchList(JSON.parse(localStorage.getItem(''+values.email)))
            navigate('/home')
        }).catch(err=>{
            setErrorMsg(err.message)
            setSubmitButtonDisabled(false)
        })
    }

    return (
        <Fragment>
            <div className="container">
                <div className="inner-container">
                    <Formik initialValues={formInitialSchema} validationSchema={formValidationSchema}
                        onSubmit={(values => handleFormSubmit(values))}>
                        {({ values }) =>
                            <Form className="FORM">
                                <div className = 'Comp'>
                                    <div className="input">Email</div>
                                    <Field type="text" name="email" placeholder="Enter your Email"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                                <div className = 'Comp'>
                                    <div className="input">Password</div>
                                    <Field type="password"
                                        name="password"
                                        placeholder="Enter your Password"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>
                                <div className = 'error-message'>{errorMsg}</div>
                                <div className="end">
                                    <button className="Button" type="submit" disabled = {submitButtonDisabled}>
                                        Login
                                    </button>
                                </div>
                                <div className = 'footer'>
                                    <div>New User?<NavLink className = 'linK' to = '/register'>Register Now!</NavLink></div>
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </Fragment >
    )
}