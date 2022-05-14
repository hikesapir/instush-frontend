import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postService } from '../services/postService'

export const PostDetails = (props) => {
    const params = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        loadPost()

    }, [params.postId])

    const loadPost = async () => {
        const post = await postService.getById(params.postId)
        setPost(post)
    }

    if (!post) return <div>Loading...</div>
    return (
        <section className='post-details main-layout'>
            <div className='img-container'>
                <img src={post.imgUrl} alt="" />
            </div>
            <div className='info'>
                <header>
                    <img src={post.by.imgUrl} alt="" />
                    <div className="user-details">
                        <span className='bold'>{post.by.username}</span>
                        <span className='bold'>{post.loc.name}</span>
                    </div>
                </header>
                <main>
                    {post.comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <img src={comment.by.imgUrl} alt="" />
                                <span>{comment.by.username}</span>
                                <span>{comment.txt}</span>
                            </div>
                        )
                    })}
                </main>
            </div>
        </section>
    )
}
