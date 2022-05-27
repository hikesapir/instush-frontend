import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DateToDisplay } from "./post/DateToDisplay";
import { AddComment } from "./post/AddComment";
import { PostActions } from "./post/PostActions";
import { useDispatch } from "react-redux";
import { likeClicked } from "../store/actions/postActions";

export const PostPreview = ({ post, user }) => {
  const dispatch = useDispatch()

  const { by, txt, imgUrl, comments, createdAt, loc } = post
  const history = useHistory()
  const goToProfile = () => {
    history.push(`/feed/${by._id}`)
  }

  const onClickLikeBtn = async () => {
    dispatch(likeClicked(post, user))
  }

  return (
    <section className="post-preview">
      <header>
        <img className="pointer" src={by.imgUrl} alt="" onClick={goToProfile} />
        <div>
          <h1>{by.username}</h1>
          <p>{loc.name}</p>
        </div>
      </header>
      <img className="pointer" onDoubleClick={onClickLikeBtn} src={imgUrl} alt="" />
      <PostActions post={post} user={user} />
      <footer>
        <div className="comments">
          <p><span className="bold">{by.username}</span> {txt}</p>
          {comments.length !== 1 ? <p>View all {comments.length} comments</p> : <p>View {comments.length} comment</p>}
        </div>
        <DateToDisplay createdAt={createdAt}></DateToDisplay>
      </footer>

      <AddComment post={post} user={user}></AddComment>

    </section>
  );
}
