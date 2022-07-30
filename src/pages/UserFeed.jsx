import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar'
import { StoryList } from '../cmps/StoryList'
import { useEffectUpdate } from '../hooks/useEffectUpdate'
import { loadPosts, setFilterBy } from '../store/actions/postActions'
import { loadStories } from '../store/actions/srotyActions'

export const UserFeed = ({ onChangeFilter, loading }) => {
    const dispatch = useDispatch()
    const { postInfo } = useSelector(state => state.postModule)

    const [pageNum, setPageNum] = useState(0);

    useEffect(() => {
        dispatch(loadStories())
        return () => {
        }
    }, [])


    useEffect(() => {
        console.log(pageNum);
        loadAgain()
        return () => {
        }
    }, [pageNum])

    const nextPage = () => {
        if (postInfo.maxPage <= pageNum + 1) return
        setPageNum(no => no + 1)
    }

    const loadAgain = async () => {
        await dispatch(setFilterBy({ page: pageNum }))
        dispatch(loadPosts())
    }

    const { stories } = useSelector(state => state.storyModule)
    const { posts } = useSelector(state => state.postModule)
    const { loggedinUser } = useSelector(state => state.userModule)

    if (!loggedinUser || !posts) return <div>Loading......</div>

    return (
        <section className='user-feed'>
            <main>
                <StoryList stories={stories} loading={loading}></StoryList>
                <PostList posts={posts} user={loggedinUser} nextPage={nextPage} ></PostList>
            </main>
            <SideBar loggedinUser={loggedinUser}></SideBar>
        </section>
    )
}
