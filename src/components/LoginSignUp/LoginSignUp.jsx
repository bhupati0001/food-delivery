import React, { useState } from 'react';
import './LoginSignUp.css';
import { assets } from '../../assets/assets';

const LoginSignUp = ({ setShowLogIn }) => {
    const [haveAccount, setHaveAccount] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        emailOrUsername: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (haveAccount) {
            console.log("Logging in with:", formData.emailOrUsername, formData.password);
        } else {
            console.log("Signing up with:", formData);
        }
    };

    return (
        <div className='login-signup-container'>
            <div className="login-signup-form-container">
                <h1 className='login-signup-heading'>{haveAccount ? 'Log in' : 'Sign up'}</h1>
                <img src={assets.cross_icon} alt="Close" onClick={() => setShowLogIn(false)} />
                <form className='login-signup-form' onSubmit={handleSubmit}>
                    {!haveAccount && (
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder='Your Name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    )}
                    <input
                        type={haveAccount ? 'text' : 'email'}
                        name="emailOrUsername"
                        required
                        placeholder={haveAccount ? 'Username/email' : 'Your email'}
                        value={formData.emailOrUsername}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {!haveAccount && (
                        <input
                            type='password'
                            name="confirmPassword"
                            required
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    )}
                    <button type='submit'>{haveAccount ? 'Log in' : 'Sign up'}</button>
                </form>
                {!haveAccount && (
                    <div className="term-condition-container">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            required
                        />
                        <label className="condition-statement">
                            by clicking this checkbox, you confirm that you have read, understood, and agree to abide by all our Terms and Conditions
                        </label>
                    </div>
                )}
                <p className='create-or-signUp-statement'>
                    {haveAccount ? 'Create a new account?' : 'Already have an account?'}{' '}
                    <span onClick={() => setHaveAccount(!haveAccount)}>Click here</span>
                </p>
            </div>
        </div>
    );
}

export default LoginSignUp;
