import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostList } from '../cmps/PostList'
import { SideBar } from '../cmps/SideBar'
import { StoryList } from '../cmps/StoryList'
import { clearPosts, loadPosts, setFilterBy } from '../store/actions/postActions'
import { loadStories } from '../store/actions/srotyActions'

export const UserFeed = ({ onChangeFilter, loading }) => {
    const dispatch = useDispatch()

    const { stories } = useSelector(state => state.storyModule)
    const { posts } = useSelector(state => state.postModule)
    const { loggedinUser } = useSelector(state => state.userModule)
    const { postInfo } = useSelector(state => state.postModule)

    const [lastElement, setLastElement] = useState(null);
    const [pageNum, setPageNum] = useState(0);

    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
            setPageNum((no) => no + 1);
        }
    },
        {
            threshold: 0.5,
        }

    ))

    useEffect(() => {
        dispatch(loadStories())
        return () => {
            dispatch(clearPosts())
        }
    }, [])

    useEffect(() => {
        // console.log(postInfo, pageNum);
        if (!pageNum || postInfo.maxPage >= pageNum + 1) {
            loadAgain()
        }
        return () => {
        }
    }, [pageNum])

    const nextPage = () => {
        if (4 <= pageNum + 1) return
        setPageNum(no => no + 1)
    }

    const loadAgain = async () => {
        await dispatch(setFilterBy({
            page: pageNum,
            pageSize: 3
        }))
        dispatch(loadPosts())
    }

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    if (!loggedinUser || !posts) return <div>Loading......</div>

    return (
        <section className='user-feed'>
            <main>
                <StoryList stories={stories} loading={loading}></StoryList>
                <PostList posts={posts} user={loggedinUser} nextPage={nextPage} setRef={setLastElement} ></PostList>
            </main>
            <SideBar loggedinUser={loggedinUser}></SideBar>
        </section>
    )
}
