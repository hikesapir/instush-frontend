import React from "react";

export function PostPreview({ post }) {
  return (
    <section className="post-preview">
      <header>
        <img src={post.by.imgUrl} alt="" />
        <div>
          <h1>{post.by.fullname}</h1>
          <p>{post.loc.name}</p>
        </div>
      </header>
      <img src={post.imgUrl} alt="" />
      <footer>

          <span>{post.txt}</span>
        {/* <div className="comments">

        </div> */}
      </footer>
    </section>
  );
}
