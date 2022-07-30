import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { PostPreview } from "./postPreview/PostPreview"

export const PostList = ({ posts, user, nextPage }) => {

  if (!posts || !user) return <div>Loading...</div>
  return (
    <section className="post-list">
      {posts.map((post, idx) => {
        return idx === posts.length - 1 ?
          <PostPreview post={post} key={post._id} user={user} />
          : <PostPreview post={post} key={post._id} user={user} />
      }
      )}
      {/* {loading && <p>loading...</p>} */}
      <button onClick={nextPage}>next</button>
    </section>
  )
}

