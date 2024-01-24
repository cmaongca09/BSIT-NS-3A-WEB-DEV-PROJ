import React, {useState} from "react";


export const LogIn = () => {
    const bodyStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        margin: '0',
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
    const titleStyle ={
        fontSize: '25px',
        fontWeight: 'bold',
    };

 const [showPassword, setShowPassword] = useState (false);
  function redirectSignup () {
    window.location.href= "/SignUp";
}
  return (
    <section>
      <div style={bodyStyle}>
      <form style={formStyle}>
                <label style={titleStyle}> Login Form </label>
                    <hr/>
                <label> TUP Student ID No. </label>
                    <br/>
                <input type="textbox" required id="studentCode" style={inputStyle}/>
                    <br/>

                <label> Password </label>
                    <br/>
                <input type={showPassword ? 'text' : 'password'} required id="password" style={inputStyle}/>
                <button type='button' onClick={() => {
                        return setShowPassword(!showPassword);
                    }}>
                        {showPassword ? 'Hide Password' : 'Show Password'}
                    </button>
                    <br/>
                    <br/>
                <button type="submit">Log-In</button>
                    <br/>
                    <br/>
                <button type="button" onClick={redirectSignup}> Sign-up </button>

            </form>
      </div>
    </section>
  );
};