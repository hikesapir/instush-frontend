import { Component } from "react";
import { postService } from "../services/postService";
import { PostPreview } from "./PostPreview";

export class PostList extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    this.loatPost();
  }

  async loatPost() {
    const posts = await postService.query();
    this.setState({ posts });
  }
  render() {
    const { posts } = this.state
    if (!posts) return <div>Loading...</div>;

    return (
      <div>
        PostList
        {posts.map((post) => <PostPreview post={post} key={post._id}></PostPreview>)}
      </div>
    );
  }
}

export default PostList;
