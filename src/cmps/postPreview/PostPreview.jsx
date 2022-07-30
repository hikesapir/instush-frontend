import React, { memo, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DateToDisplay } from "./DateToDisplay";
import { AddComment } from "./AddComment";
import { PostActions } from "./PostActions";
import { useDispatch } from "react-redux";
import { likeClicked } from "../../store/actions/postActions";

export const PostPreview = memo(({ post, user, setRef }) => {
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
    <section className="post-preview" ref={setRef}>
      <header>
        <img className="pointer" src={by.imgUrl} alt="" onClick={goToProfile} />
        <div>
          <h1>{by.username}</h1>
          <p className="subtxt">{loc.name}</p>
        </div>
      </header>
      <img className="pointer" onDoubleClick={onClickLikeBtn} src={imgUrl} alt="" />
      <PostActions post={post} user={user} />
      <footer>
        {/* <div className="comments"> */}
        <p><span className="bold">{by.username}</span> {txt}</p>
        <p className="subtxt">View all {comments.length} {comments.length !== 1 ? 'comments' : 'comment'} </p>
        {/* </div> */}
        <DateToDisplay createdAt={createdAt} />
      </footer>

      <AddComment post={post} user={user}></AddComment>

    </section>
  );
})
