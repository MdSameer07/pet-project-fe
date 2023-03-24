import { AdminLoginForm } from "./AdminLoginForm"
import "./LoginPage.css"
export const AdminLoginPage = () =>{
    return (
        <div className='admin-login-page'>
            <div className = 'login-form-outer'>
                <div className='login-heading'>Welcome</div>
                <AdminLoginForm/>
            </div>
        </div>
    )
}