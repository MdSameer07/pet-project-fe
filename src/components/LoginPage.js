import './LoginPage.css'
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
    return (
        <div className='Login'>
            <div className='form'>
                <div className='headinG'>Welcome</div>
                <LoginForm />
            </div>
        </div>
    )
}
