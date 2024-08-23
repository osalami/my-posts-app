/* eslint-disable react/prop-types */

const Post = ({ author, content }) => {
    return (
      <div className="post">
        <p className="author">{author}</p>
        <p className="content">{content}</p>
      </div>
    );
  };
  
export default Post;