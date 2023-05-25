import React from 'react';
import SignInImg  from "../../assets/signinImg.png";
import GoogleLogo  from '../../assets/GoogleLogo.png';
import PageButton from '../../Components/PageButton/PageButton';
import './Signin.scss';
import Input from '../../Components/Input/Input';




function Signin() {
  return (
    <div className='container'>

        <div>
            <img src={ SignInImg } className='signinImg' alt='' />
        </div>



        <div className='signinForm'>
        <h1>Welcome Back!</h1>
        <h3>Sign In</h3>

            <form>
                <Input
                    type={"email"}
                    label="Email*"
                    placeholder="Email"
                    onChange={"onChange"}
                />
                <br/>
                <Input
                    type={"password"}
                    label="Password*"
                    placeholder="Password"
                    onChange={"onChange"}
                />
                <br/>
                <PageButton 
                    title={"Sign In"} 
                    id={"signin"}
                />
                <br/>
                <PageButton 
                    image={ GoogleLogo } 
                    id={"google"}
                    title={"Sign In with Google"} 
                />
       
                <p>Don't have an account? <span>Sign up</span> </p>
            </form>
        </div>
    </div>
  )
}

export default Signin
