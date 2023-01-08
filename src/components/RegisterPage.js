import './RegisterPage.css'
import styled from 'styled-components';

export const RegisterPage = () =>{
    return (
    <div className = 'Register'>
        <MainContainer>
            <div className = 'Heading'>Sign Up Now!!</div>
        </MainContainer>
    </div>)
}
const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    height:80vh;
    width:30vw;
    background:rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    backdrop-filter:blur(8.5px);
    margin-left:34%;
    border-radius:15px;
    color:#ffffff;
    `;