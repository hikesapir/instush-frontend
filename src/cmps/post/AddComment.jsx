import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { addComment } from '../../store/actions/postActions'
import { ReactComponent as SmileIcon } from '../../assets/icons/smile-icon.svg';


export const AddComment = ({ post, user }) => {
    const dispatch = useDispatch()

    const [comment, handleChange, setComment] = useForm({
        txt: '',
        by: user,
        likedBy: []
    })
    const onPostComment = async (ev) => {
        console.log(ev);
        console.log(comment.txt);
        ev.preventDefault()
        if ((ev.key === 'Enter' && !ev.shiftKey) || ev.type === 'submit') {
            dispatch(addComment(post, comment))
            setComment({
                txt: '',
                by: user,
                likedBy: []
            })
        }

    }

    return (
        <form className="add-comment" onSubmit={onPostComment}>
            <span className="smile-icon"><SmileIcon /></span>
            {/* <textarea placeholder="Add a comment…" autoComplete="off" autoCorrect="off" onChange={handleChange} value={comment.txt} name='txt' id={"input-comment" + post._id}></textarea> */}
            <textarea type='input' placeholder="Add a comment…" autoComplete="off" autoCorrect="off" onChange={handleChange} value={comment.txt} name='txt' id={"input-comment" + post._id} onKeyUp={onPostComment}></textarea>
            <button type='submit' disabled={!comment.txt} >Post</button>
        </form>
    )
}
