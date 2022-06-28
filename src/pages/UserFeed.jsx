import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar'
import { StoryList } from '../cmps/StoryList'
import { loadStories } from '../store/actions/srotyActions'

export const UserFeed = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadStories())
        return () => {
        }
    }, [])


    const { stories } = useSelector(state => state.storyModule)
    const { posts } = useSelector(state => state.postModule)
    const { loggedinUser } = useSelector(state => state.userModule)

    if (!loggedinUser) return <div>Loading......</div>

    return (
            <section className='user-feed'>
                <main>
                    <StoryList stories={stories}></StoryList>
                    <PostList posts={posts} user={loggedinUser}></PostList>
                </main>
                <SideBar loggedinUser={loggedinUser}></SideBar>
            </section>
    )
}
