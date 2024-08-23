import Header from "./components/Header";

// eslint-disable-next-line react/prop-types
const Post = ({ author, content }) => {
  return (
    <div className="post">
      <p className="author">{author}</p>
      <p className="content">{content}</p>
    </div>
  );
};

const NewPostButton = () => {
  return <button className="new-post-button">New Post</button>;
};

function App() {
  return (
    <div className="app">
      <Header />
      <div className="posts-container">
        <Post
          author="MANUEL"
          content="Learn all about it in the full course!"
        />
        <Post author="MAXIMILIAN" content="React.js is awesome!" />
      </div>
      <NewPostButton />
    </div>
  );
}

export default App;
