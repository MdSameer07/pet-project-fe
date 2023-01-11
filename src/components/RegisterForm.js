import { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './RegisterForm.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsLoggedIn } from "../Recoil/IsLoggedIn";

export const RegisterForm = () =>{
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useRecoilState(IsLoggedIn)

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
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
    });


    const handleFormSubmit = (values) => {
        console.log("Submitted values", values)
        setIsLoggedIn(true)
        navigate('/home')
    }

    return (
        <Fragment>

            <div className="containeR">
                <div className="inner-containeR">
                    <Formik initialValues={formInitialSchema} validationSchema={formValidationSchema} 
                        onSubmit={(values => handleFormSubmit(values))}>
                        {({ values }) =>
                            <Form className = 'FoRm'>
                                <div className = 'ComP'>
                                    <div className="inpuT">Name</div>
                                    <Field type="text" name="name" placeholder="Enter your Name" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="name" />
                                    </p>
                                </div>
                                <div className = 'ComP'>
                                    <div className="inpuT">Email</div>
                                    <Field type="text"  name="email" placeholder="Enter your Email" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                                <div className = 'ComP'>
                                    <div className="inpuT">Password</div>
                                    <Field type="password" name="password" placeholder="Enter your Password" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>
                                <div className = 'ComP'>
                                    <div className="inpuT">Confirm Password</div>
                                    <Field type="password" name="confirmPassword" placeholder="Confirm your Password" className="form-controL" />
                                    <p className="text-dangeR">
                                        <ErrorMessage name="confirmPassword" />
                                    </p>
                                </div>
                                <div className="enD">
                                    <button className="buttoN" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                                <div className = 'footeR'>
                                    <div>Already a User?<NavLink className = 'LinK' to = '/login'>Login Now!</NavLink></div>
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </Fragment >
    )
}