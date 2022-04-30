import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../../dummyData";

import './comment.css';

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const startTime = new Date();
  const twoMinutes = 5000;
  const [read, setRead] = useState(false);
  let ismyprofile = false;
//   const rootComments = backendComments.filter(
//     (backendComment) => backendComment.parentId === null
//   );
  const rootComments = backendComments; // เปลี่ยนมาไม่เอา reply child

//   const getReplies = (commentId) =>
//     backendComments
//       .filter((backendComment) => backendComment.parentId === commentId)
//       .sort(
//         (a, b) =>
//           new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//     );
// ลบ (text, parentId) -> (text)

function addtodb(){
  console.log("add laew mae")
}

function checkTime() {
  var timePassed = new Date() - startTime > twoMinutes;
    if (timePassed && !read){
      setRead(true);
      addtodb();
      return true;
    }
    else if (read || ismyprofile){
      return true;
    }
    else {
      return false;
    }
 }

 
 const handleSubmit = (text) => {
  var canComment = checkTime();
  if (canComment) {
  addComment(text);
  }
  else {
    alert("you must read the article before giving comment")
  }
  
}

  const addComment = (text) => {
        createCommentApi(text).then((comment) => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
    });
  };


  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
        <div className="comments-wrap">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write your comment here :)</div>
            <CommentForm className="comment-form-box" submitLabel="Write" handleSubmit={handleSubmit} />
        </div>
        <div className="comments-container">
            {rootComments.map((rootComment) => (
            <Comment
                key={rootComment.id}
                comment={rootComment}
                // replies={getReplies(rootComment.id)}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                currentUserId={currentUserId}
            />
            ))}
        </div>
</div>
  );
};

export default Comments;