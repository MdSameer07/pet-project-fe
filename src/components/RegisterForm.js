import { Fragment, useContext, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './RegisterForm.css'
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import { WatchListRecoil } from "../Recoil/WatchListRecoil";
import { useRecoilState } from "recoil";

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const [WatchList, setWatchList] = useRecoilState(WatchListRecoil)

    const formInitialSchema = {
        name: '',
        email: '',
        password: '',
        confirmPassword: "",
    }

    const formValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        password: yup.string().required('Please Enter your password').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Be Atleast 8 Characters, Contain One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
    });


    const handleFormSubmit = (values) => {
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.password).then(res => {
            setSubmitButtonDisabled(false)
            const user = res.user;
            updateProfile(user, {
                displayName: values.name,
            })
            localStorage.setItem('email', values.email)
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('' + values.email, JSON.stringify([]))
            const interest = {
                'thriller': 0,
                'action': 0,
                'comedy': 0,
                'horror': 0,
                'romance': 0
            }
            localStorage.setItem(values.email + 'movies', JSON.stringify(interest))
            console.log(JSON.parse(localStorage.getItem(values.email + 'movies')))
            setWatchList([])
            navigate('/home')
        }).catch(err => {
            setErrorMsg(err.message)
            setSubmitButtonDisabled(false)
        })
    }

    return (
        <Fragment>
            <div className="containeR">
                <div className="inner-containeR">
                    <Formik initialValues={formInitialSchema} validationSchema={formValidationSchema}
                        onSubmit={(values => handleFormSubmit(values))}>
                        {({ values }) =>
                            <Form className='FoRm'>
                                <div className='ComP'>
                                    <div className="inpuT">Name</div>
                                    <Field type="text" name="name" placeholder="Enter your Name" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="name" />
                                    </p>
                                </div>
                                <div className='ComP'>
                                    <div className="inpuT">Email</div>
                                    <Field type="text" name="email" placeholder="Enter your Email" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                                <div className='ComP'>
                                    <div className="inpuT">Password</div>
                                    <Field type="password" name="password" placeholder="Enter your Password" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>
                                <div className='ComP'>
                                    <div className="inpuT">Confirm Password</div>
                                    <Field type="password" name="confirmPassword" placeholder="Confirm your Password" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="confirmPassword" />
                                    </p>
                                </div>
                                <div className='error-message'>{errorMsg}</div>
                                <div className="enD">
                                    <button className="buttoN" type="submit" disabled={submitButtonDisabled}>
                                        Sign Up
                                    </button>
                                </div>
                                <div className='footeR'>
                                    <div>Already a User?<NavLink className='LinK' to='/login'>Login Now!</NavLink></div>
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </Fragment >
    )
}