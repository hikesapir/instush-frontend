import React from 'react'

export const Login = ({register, handleChange}) => {


    return (
        <div className="login container">
            <div className='logo' >Instush</div>
            <form className='register'  >
                <input type="text" autoComplete="off" name="username" placeholder="Username" onChange={handleChange} value={register.username} />
                <input type="password" autoComplete="off" name="password" placeholder="Password" onChange={handleChange} value={register.password} />
                <button className='log-in-btn btn-primary' type='submit' disabled={!register.username || !register.password}>Log In</button>
            </form>
            <div className="space">
                <div className="line"></div>
                <p className='subtxt'> OR </p>
                <div className="line"></div>
            </div>
            <div className='facebook-log-in'>
                <span className="facebook-icon"></span>
                <span>Log in with Facebook</span>
            </div>
            <div className='dark-blue-txt'>Forgot password?</div>
        </div>
    )
}
