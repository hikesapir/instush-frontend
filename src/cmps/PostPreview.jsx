import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from '../hooks/useForm'
import { addComment, likeClicked } from '../store/actions/postActions';
import { DateToDisplay } from "./DateToDisplay";
import { ReactComponent as CommentIcon } from '../assets/icons/comment-icon.svg';
import { ReactComponent as ShareIcon } from '../assets/icons/paper-plane-icon.svg';
import { ReactComponent as UnlikeIcon } from '../assets/icons/unlike-icon.svg';
import { ReactComponent as LikeIcon } from '../assets/icons/like-icon.svg';
import { ReactComponent as BookmarkIcon } from '../assets/icons/bookmark-icon.svg';
import { ReactComponent as SmileIcon } from '../assets/icons/smile-icon.svg';




export const PostPreview = ({ post, user }) => {

  const { by, txt, likedBy, imgUrl, comments, createdAt, loc } = post
  const [comment, handleChange, setComment] = useForm({
    txt: '',
    by: user,
    likedBy: []
  })

  const history = useHistory()

  const dispatch = useDispatch()

  const onClickLikeBtn = async (post) => {
    dispatch(likeClicked(post, user))
  }

  const onPostComment = async (ev) => {
    ev.preventDefault()
    dispatch(addComment(post, comment))

    setComment({
      txt: '',
      by: user,
      likedBy: []
    })
  }
  const goTOProfile = () => {
    history.push(`/feed/${by._id}`)
  }

  const focusComment = () => {
    document.getElementById("input-comment").focus()
  }

  const likeIcon = likedBy.some(u => u._id === user._id) ? <UnlikeIcon /> : <LikeIcon />

  return (
    <section className="post-preview">
      <header>
        <img className="pointer" src={by.imgUrl} alt="" onClick={goTOProfile} />
        <div>
          <h1>{by.username}</h1>
          <p>{loc.name}</p>
        </div>
      </header>
      <img src={imgUrl} alt="" />
      <div className="actions">
        <div className="left">
          <span className="heart-icon pointer" onClick={() => onClickLikeBtn(post)}>{likeIcon} </span>
          <span className="comment-icon" onClick={focusComment}><CommentIcon /></span>
          <span className="paper-plane-icon"><ShareIcon /></span>
        </div>
        <span className="bookmark-icon"><BookmarkIcon /></span>
      </div>
      <footer>
        <h1>{likedBy.length} {likedBy.length > 1 ? 'likes' : 'like'}</h1>
        <div className="comments">
          <p><span className="bold">{by.username}</span> {txt}</p>
          {comments.length > 1 ? <p>View all {comments.length} comments</p> : <p>View {comments.length} comment</p>}
        </div>
        <DateToDisplay createdAt={createdAt}></DateToDisplay>

      </footer>
      <form className="add-comment" onSubmit={onPostComment}>
        <span className="smile-icon"><SmileIcon /></span>
        <textarea placeholder="Add a comment…" autoComplete="off" autoCorrect="off" onChange={handleChange} value={comment.txt} name='txt' id="input-comment"></textarea>
        <button disabled={!comment.txt}>Post</button>
      </form>
    </section>
  );
}
