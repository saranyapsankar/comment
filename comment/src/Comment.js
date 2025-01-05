
import React from "react";

const Comment = ({ commentObj, updateAction }) => {
  const handleClick = (event) => {
    event.stopPropagation(); 
    const action = event.target.dataset.action;
    if (!action) return;

    const updatedComment = { ...commentObj };

    switch (action) {
      case "like":
        updatedComment.isLike = !commentObj.isLike;
        break;

      case "edit":
        updatedComment.isEdit = !commentObj.isEdit;
        break;

      case "reply":
        updateAction(action, {});

      case "delete":
        updateAction(action, commentObj);
        return;

      default:
        return;
    }

    updateAction(action, updatedComment);
  };

  return (
    <div>
      <textarea
        defaultValue={commentObj.commentTxt}
        readOnly={!commentObj.isEdit}
      ></textarea>
      <div className="btn-div" onClick={handleClick}>
        <button data-action="like">
          {commentObj.isLike ? "Dislike" : "Like"}
        </button>
        <button data-action="edit">
          {commentObj.isEdit ? "Save" : "Edit"}
        </button>
        <button data-action="reply">Reply</button>
        <button data-action="delete">Delete</button>
      </div>
    </div>
  );
};

export default Comment;