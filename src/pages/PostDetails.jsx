import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postService } from '../services/postService';
import { AddComment } from '../cmps/postPreview/AddComment';
import { PostActions } from '../cmps/postPreview/PostActions';
import { likeClicked } from '../store/actions/postActions';
import { CommentDate } from '../cmps/postPreview/CommentDate';



export const PostDetails = (props) => {
    const dispatch = useDispatch()
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

    const onClickLikeBtn = async () => {
        dispatch(likeClicked(post))
    }

    if (!post || !loggedinUser) return <div>Loading...</div>
    const { by, imgUrl, comments, createdAt, loc } = post

    return (
        <section className='post-details main-layout'>
            <div className='img-container'>
                <img className="pointer" onDoubleClick={onClickLikeBtn} src={imgUrl} alt="" />
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
                                <div className='comment'>
                                    <div ><span className='bold'>{comment.by.username}</span>
                                        <span className='comment-txt'>{comment.txt}</span></div>
                                    <div ><CommentDate createdAt={createdAt} /></div>
                                </div>
                            </div>
                        )
                    })}
                </main>
                <PostActions post={post} user={loggedinUser}></PostActions>
                <AddComment post={post} user={loggedinUser} />

            </div>
        </section>
    )
}
