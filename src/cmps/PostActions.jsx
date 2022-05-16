import React from 'react'
import { useDispatch } from 'react-redux';
import { likeClicked } from '../store/actions/postActions';
import { ReactComponent as CommentIcon } from '../assets/icons/comment-icon.svg';
import { ReactComponent as ShareIcon } from '../assets/icons/paper-plane-icon.svg';
import { ReactComponent as UnlikeIcon } from '../assets/icons/unlike-icon.svg';
import { ReactComponent as LikeIcon } from '../assets/icons/like-icon.svg';
import { ReactComponent as BookmarkIcon } from '../assets/icons/bookmark-icon.svg';
import { ReactComponent as FullBookmarkIcon } from '../assets/icons/full-bookmark-icon.svg';
import { savedPost } from '../store/actions/userActions';

export const PostActions = ({ post, user }) => {

    const dispatch = useDispatch()
    const {likedBy,_id}=post

    const focusComment = () => {
        document.getElementById("input-comment" + _id).focus()
    }

    const onClickLikeBtn = async (post) => {
        dispatch(likeClicked(post, user))
    }
    const onBookmarkBtn = async (user, _id) => {
        dispatch(savedPost(user, _id))
    }


    const likeIcon = likedBy.some(u => u._id === user._id) ? <UnlikeIcon /> : <LikeIcon />
    const bookmarkIcon = user.savedPostIds.some(postId => postId === _id) ? <FullBookmarkIcon /> : <BookmarkIcon />
    return (
        <section className="post-actions">
            <div className="actions">
                <div className="left">
                    <span className="heart-icon pointer" onClick={() => onClickLikeBtn(post)}>{likeIcon} </span>
                    <span className="comment-icon" onClick={focusComment}><CommentIcon /></span>
                    <span className="paper-plane-icon"><ShareIcon /></span>
                </div>
                <span className="bookmark-icon pointer" onClick={() => onBookmarkBtn(user, _id)}>{bookmarkIcon}</span>

            </div>
            <h1>{likedBy.length} {likedBy.length > 1 ? 'likes' : 'like'}</h1>
        </section>
    )
}
