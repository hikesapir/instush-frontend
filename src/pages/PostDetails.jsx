import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { postService } from '../services/postService';
import { AddComment } from '../cmps/AddComment';
import { PostActions } from '../cmps/PostActions';



export const PostDetails = (props) => {
    const params = useParams()
    const [post, setPost] = useState(null)
    const { loggedinUser } = useSelector(state => state.userModule)

    useEffect(() => {
        loadPost()

    }, [params.postId])

    useEffect(() => {
        loadPost()

    }, [post])

    const loadPost = async () => {
        const post = await postService.getById(params.postId)
        setPost(post)
    }

    if (!post || !loggedinUser) return <div>Loading...</div>
    const { by, txt, likedBy, imgUrl, comments, createdAt, loc } = post
    const user = {
        _id: loggedinUser._id,
        username: loggedinUser.username,
        imgUrl: loggedinUser.imgUrl
    }

    return (
        <section className='post-details main-layout'>
            <div className='img-container'>
                <img src={imgUrl} alt="" />
            </div>
            <div className='info'>
                <header>
                    <img src={by.imgUrl} alt="" />
                    <div className="user-details">
                        <div className='bold'>{by.username}</div>
                        <div className='subtxt'>{loc.name}</div>
                    </div>
                </header>
                <main>
                    {comments.map(comment => {
                        return (
                            <div className="comment-details" key={comment.id}>
                                <img src={comment.by.imgUrl} alt="" />
                                <div className='bold'>{comment.by.username}</div>
                                <div className='comment-txt'>{comment.txt}</div>
                            </div>
                        )
                    })}
                </main>
                <PostActions post={post} user={loggedinUser}></PostActions>
                <AddComment post={post} user={user} />

            </div>
        </section>
    )
}