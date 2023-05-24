import React from 'react';
import SignUpImg  from "../../assets/signupImg.png";
import GoogleLogo  from '../../assets/GoogleLogo.png';
import PageButton from '../../Components/PageButton/PageButton';
import './Signup.scss';
import Input from '../../Components/Input/Input';




function Signup() {
  return (
    <div className='container'>

        <div>
            <img src={ SignUpImg } className='signupImg' alt='' />
        </div>



        <div className='signupForm'>
        <h1>Sign Up</h1>

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
                <Input
                    type={"password"}
                    label="Password*"
                    placeholder="Confirm Password"
                    onChange={"onChange"}
                />
                <br/>
                <PageButton 
                    title={"Sign Up"} 
                    id={"signup"}
                />
                <br/>
                <PageButton 
                    image={ GoogleLogo } 
                    id={"google"}
                    title={"Sign Up with Google"} 
                />
       
                <p>Already has an account? <span>Sign in</span> </p>
            </form>
        </div>
    </div>
  )
}

export default Signup
