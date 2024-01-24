import React, {useState} from 'react';

function passwordCheck (){
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    if (password !== confirmPassword) {
        confirmPassword.setCustomValidity("Passwords don't match")
    }
    else {
        confirmPassword.setCustomValidity("")
    }
}
    

export const SignUp = () => {

    const bodyStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        margin: '5',
    };

    const formStyle = {
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'lightgray',
        textAlign: 'left',
    };

    const inputStyle = {
        width: '100%',
    };
    const title ={
        fontSize: '25px',
        fontWeight: 'bold',
    };
    const [showPassword, setShowPassword] = useState (false);
    return (
    <section>
        <div style={bodyStyle}>
            <form style={formStyle}> 
                <label id='title' style={title}> Sign-Up Form</label>
                <hr/>

                <label> First Name </label>
                <br/>
                <input type='text' required style={inputStyle}/>
                <br/>

                <label> Middle Initial </label>
                <br/>
                <input type='text' maxLength={2} required style={inputStyle}/>
                <br/>

                <label> Last Name </label>
                <br/>
                <input type='text' required style={inputStyle}/>
                <br/>

                <label> TUP Student ID No. </label>
                <br/>
                <input type='text' required style={inputStyle}/>
                <br/>

                <label> Password</label>
                <br/>
                <input type={showPassword ? 'text' : 'password'} required id='password' style={inputStyle}/>
                <br/>

                <label> Confirm Password</label>
                <br/>
                <input type={showPassword ? 'text' : 'password'} required id='confirmPassword' style={inputStyle}/>

                <button type='button' onClick={() => {
                        return setShowPassword(!showPassword);
                    }}>
                        {showPassword ? 'Hide Password' : 'Show Password'}
                    </button>
                <br/>
                <br/>
                <button type='submit' onClick={passwordCheck}> Sign-Up </button> 
            </form>
        </div>
        </section>
    );
    }