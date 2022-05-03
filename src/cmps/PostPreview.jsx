import React from "react";

export function PostPreview({ post }) {
  return (
    <div>
      <span>{post.txt}</span>
      <img src={post.imgUrl} alt="" />
    </div>
  );
}
