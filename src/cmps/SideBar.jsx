import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { loadUsers } from '../store/actions/userActions'
import { FollowBtn } from './FollowBtn'
import { UserPreview } from './UserPreview'

export function SideBar({ loggedinUser }) {
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadUsers())


    }, [])
    let { users } = useSelector(state => state.userModule)

    const goTOProfile = () => {
        history.push(`/feed/${loggedinUser._id}`)
    }

    if (!loggedinUser || !users) return <div>Loading...</div>
    users = users.filter(user => !loggedinUser.following.some(userFollew => userFollew._id === user._id) && loggedinUser._id !== user._id).slice(0, 5)
    const emptyContent = []
    for (let i = 0; i < 4 - users.length; i++) {
        emptyContent.push(<li className='empty' key={i}>
            <div className="img"></div>
            <div className='line-container'>
                <div className="long-line"></div>
                <div className="short-line"></div>
            </div>
        </li>)
    }
    return (
        <section className='side-bar'>
            <header>
                <img className='pointer img-larg' onClick={goTOProfile} src={loggedinUser.imgUrl} alt="" />
                <span className='bold'>{loggedinUser.username}</span>
            </header>
            <div className="content">
                <h1 className='title'>Suggestions For You</h1>
                <ul>
                    {users?.map(user => {
                        return (
                            <li key={user._id}>
                                <UserPreview user={user} />
                                <FollowBtn loggedinUser={loggedinUser} userToFollow={user} />
                            </li>
                        )
                    })
                    }
                    {
                        (users.length < 4) ? emptyContent : <></>
                    }
                </ul>
            </div>
        </section>
    )
}
