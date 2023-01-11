import './RegisterPage.css'
import styled from 'styled-components';
import { RegisterForm } from './RegisterForm';

export const RegisterPage = () =>{
    return (
        <div className = 'Register'>
        <div className = 'forM'>
            <div className = 'HeadinG'>Sign Up Now</div>
            <RegisterForm/>
        </div>
    </div>
    )
}