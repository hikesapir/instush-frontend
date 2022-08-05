import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'
import appStore from '../assets/img/app-store.png'
import googlePlay from '../assets/img/google-play.png'
import { Login } from '../cmps/Login'
import { useForm } from '../hooks/useForm'
import { login } from '../store/actions/userActions'


export const HomePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [register, handleChange] = useForm({
        username: '',
        password: ''
    })

    const onLogin = async (ev) => {
        try {
            ev.preventDefault()
            await dispatch(login(register))
            history.push('/feed')

        } catch (err) {
            console.log('HomePage.onLogin:', err)
        }
    }

    return (
        <section className='homepage'>
            <div className='content-wrapper'>
                <div className="img-container">
                    {[img1, img2, img3, img4].map(img => <img src={img} alt="" key={img} />)}
                </div>
                <div className="login-container">
                    <Login register={register} handleChange={handleChange} onLogin={onLogin} />
                    <div className="sign-up container">
                        <p> Don't have an account?
                            <a href="#/homepage" className='primary-txt'> Sign up</a>
                        </p>
                    </div>
                    <div className="get-app">
                        <p>Get the app.</p>
                        <div className='download-buttons-container'>
                            <img src={appStore} />
                            <img src={googlePlay} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
