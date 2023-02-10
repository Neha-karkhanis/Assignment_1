import React, { useState } from 'react';
import './style.css';

function VolunteerRegistration() {
    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const [firstNameError, setFirstNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");

    const[disabled, setDisabled] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName") {
            setFirstName(value);
        }
        if (name === "lastName") {
            setLastName(value);
        }
        if (name === "email") {
            setEmail(value);
        }
        if (name === "phoneNumber") {
            setPhoneNumber(value);
        }
        
    }

    const checkEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    const checkPhoneNumber = new RegExp(
        '^[0-9]{10}$' 
    );

    const validate_text = e => {
        const { name, value } = e.target;
        if (name === "firstName") {
            if (!value) {
                setFirstNameError("First name is required");
                setDisabled(true);
            } else {
                setFirstNameError("");
                setDisabled(false);
            }
        }
        if (name === "email") {
            if (!value) {
                setEmailError("Email is required");
                setDisabled(true);
            } else if (!checkEmail.test(value)) {
                setEmailError("Enter a valid email");
                setDisabled(true);
            } else {
                setEmailError("");
                setDisabled(false);
            }
        }
      
        if (name === "phoneNumber") {
            if (!value) {
                setPhoneNumberError("Phone number is required");
                setDisabled(true);
            }  else if (!checkPhoneNumber.test(value)) {
                setPhoneNumberError("Enter a 10 digit phone number");
                setDisabled(true);
            } else {
                setPhoneNumberError("");
                setDisabled(false);
            }
        }
    }

    const handleSubmit = () => {
        if(firstNameError || emailError || phoneNumberError){
           return false;
        }else{
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
        }
    }

    return (
        <>
        <div className="border"></div>
        <div className="soul">
            <em>Without <b><span>VOLUNTEERS</span></b> we will be a nation without a <b><span>SOUL</span></b>!!!</em>
        </div>
        <div className="form">
            
            <div className="form-body">
            
                <table className='formTable'>
                <div class="sign_up">SIGN UP!</div>
                    <tr>
                        <td><label className="form_text" htmlFor="firstName">First Name<span className="a">*</span> </label></td>
                        <td><input className="input_text" type="text" value={firstName} name="firstName" onChange={(e) => handleInputChange(e)} onBlur={validate_text} placeholder="First Name" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{
                            <span className='err'>{firstNameError}</span>}</td>
                    </tr>

                    <tr>
                        <td><label className="form_text" htmlFor="lastName">Last Name </label></td>
                        <td><input className="input_text" type="text" name="lastName" value={lastName}  onChange={(e) => handleInputChange(e)} placeholder="LastName" /></td>
                    </tr>

                    <tr>
                        <td><label className="form_text" htmlFor="email">Email<span className="a">*</span></label></td>
                        <td><input className="input_text" type="email" name="email"  value={email} onChange={(e) => handleInputChange(e)} onBlur={validate_text} placeholder="Email" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{<span className='err'>{emailError}</span>}</td>
                    </tr>

                    <tr>
                        <td><label className="form_text" htmlFor="phoneNumber">PhoneNumber<span className="a">*</span></label></td>
                        <td><input className="input_text" type="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => handleInputChange(e)} onBlur={validate_text} placeholder="Phone Number" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{<span className='err'>{phoneNumberError}</span>}</td>
                    </tr>
                    <div className="submit">
                <button disabled={disabled} onClick={() => handleSubmit()} type="submit" className="submit_button">Register</button>
            </div>
                </table>
            </div>
           
        </div>
        </>
    )
}
export default VolunteerRegistration;



