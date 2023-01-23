import './RegisterPage.css'
import { RegisterForm } from './RegisterForm';

export const RegisterPage = () => {
    return (
        <div className='register-page'>
            <div className='register-form-outer'>
                <div className='register-heading'>Sign Up Now</div>
                <RegisterForm />
            </div>
        </div>
    )
}