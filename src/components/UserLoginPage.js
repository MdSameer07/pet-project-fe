import './LoginPage.css'
import { UserLoginForm } from './UserLoginForm';

export const UserLoginPage = () => {
    return (
        <div className='user-login-page'>
            <div className='login-form-outer'>
                <div className='login-heading'>Welcome</div>
                <UserLoginForm />
            </div>
        </div>
    )
}
