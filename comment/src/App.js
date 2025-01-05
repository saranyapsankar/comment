import React, { useState } from "react";
import "./App.css";
import Comment from "./Comment";

const initialComments = [
  { commentTxt: "Text here...", isEdit: false, isLike: false, key: "123" },
];

function App() {
  const [comments, setComments] = useState(initialComments);

  const updateAction = (action, comment) => {
    setComments((prevComments) => {
      switch (action) {
        case "delete":
          return prevComments.filter((com) => com.key !== comment.key);
  
        case "reply":
          return [
            ...prevComments,
            {
              commentTxt: "Text here...",
              isEdit: false,
              isLike: false,
              key: Date.now().toString(),
            },
          ];
  
        case "edit":
        case "like":
          return prevComments.map((com) =>
            com.key === comment.key ? comment : com
          );
  
        default:
          return prevComments;
      }
    });
  };

  return (
    <div className="App">
      {comments.map((comment) => (
        <Comment
          key={comment.key}
          commentObj={comment}
          updateAction={updateAction}
        />
      ))}
    </div>
  );
}

export default App;