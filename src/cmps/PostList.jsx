import { PostPreview } from "./PostPreview"

export function PostList({ posts }) {

  if (!posts) return <div>Loading...</div>

  return (
    <div>
      {posts.map((post) => <PostPreview post={post} key={post._id}></PostPreview>)}
    </div>
  )
}

