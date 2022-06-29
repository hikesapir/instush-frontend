import React from 'react'
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'
import appStore from '../assets/img/app-store.png'
import googlePlay from '../assets/img/google-play.png'


export const HomePage = () => {
    return (
        <section className='homepage'>
            <div className='content-wrapper'>
                <div className="img-container">
                    {[img1, img2, img3, img4].map(img => <img src={img} alt="" />)}
                </div>
                <div className="login-container">
                    <div className="login container">
                        <div className='logo' >Instush</div>
                        <form className='register' action="">
                            <input type="text" autocomplete="off" name="username" placeholder="Username" />
                            <input type="password"  autocomplete="off" name="password" placeholder="Password" />
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
                    <div className="sign-up container">
                        <p> Don't have an account?
                            <a href="#/homepage" className='primary-txt'> Sign up</a>
                        </p>
                    </div>
                    <div className="get-app">
                        <p>Get the app.</p>
                        <div className='download-buttons-container'>
                            <img src={appStore} alt="" />
                            <img src={googlePlay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
