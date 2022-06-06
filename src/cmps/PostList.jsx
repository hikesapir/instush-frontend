import { PostPreview } from "./postPreview/PostPreview"

export function PostList({ posts, user }) {
  if (!posts || !user) return <div>Loading...</div>
  posts.sort((a, b) => b.createdAt - a.createdAt)
  return (
    <section className="post-list">
      {posts.map((post) => <PostPreview post={post} key={post._id} user={user}></PostPreview>)}
    </section>
  )
}

