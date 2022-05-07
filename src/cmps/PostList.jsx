import { PostPreview } from "./PostPreview"

export function PostList({ posts, user }) {

  if (!posts || !user) return <div>Loading...</div>

  return (
    <section className="post-list">
      {posts.map((post) => <PostPreview post={post} key={post._id} user={user}></PostPreview>)}
    </section>
  )
}

