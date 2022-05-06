import { PostPreview } from "./PostPreview"

export function PostList({ posts, onClickLikeBtn, userId }) {

  if (!posts || !userId) return <div>Loading...</div>

  return (
    <section className="post-list">
      {posts.map((post) => <PostPreview post={post} key={post._id} onClickLikeBtn={onClickLikeBtn} userId={userId}></PostPreview>)}
    </section>
  )
}

