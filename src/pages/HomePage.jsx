import React from 'react'
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'

export const HomePage = () => {
    return (
        <section className='homepage'>
            <div className='content-wrapper'>
                <div className="img-container">
                    {[img1, img2, img3, img4].map(img => <img src={img} alt="" />)}
                </div>
                <div className="login-container">
                    <div className="login">
                        <div className='logo' >Instush</div>
                        <form className='register' action="">
                            <input type="text" autocomplete="off" name="username" placeholder="Username" />
                            <input type="text" />
                            <button className='log-in-btn btn-primary' disabled>Log In</button>
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
                    <div className="sign-up"></div>
                    <div className="get-app"></div>
                </div>
            </div>
        </section>
    )
}
