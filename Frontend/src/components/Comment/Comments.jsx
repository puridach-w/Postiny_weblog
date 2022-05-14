import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

import './comment.css';
import Axios from "axios";

const Comments = ({read, setRead, article_id, addtodb, user_id}) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const startTime = new Date();
  const oneMinute = 60000;

  const rootComments = backendComments;

function checkTime() {
  var timePassed = new Date() - startTime > oneMinute;
   if (timePassed && !read){
     setRead(true);
     addtodb();
     return true;
   }
   else if (read){
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
    alert("You must read the article before giving comment")
  }
  
}

  const addComment = (text) => {
    Axios.post(`http://localhost:8080/addComment`,{
      article_id: article_id,
      user_id: user_id,
      content: text
    }).then(() => {
      location.reload();
      setActiveComment(null);
    })
  };


  const updateComment = (text, commentId) => {
    Axios.patch("http://localhost:8080/updateComment",{
      content: text,
      comment_id: commentId 
    }).then(() => {
      location.reload();
      setActiveComment(null);
    })
  };

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      Axios.delete(`http://localhost:8080/deleteComment`,
        {
          params: {
            comment_id: commentId,
            }
        }).then(() => {
          location.reload();
        })
    }
  };

  useEffect( () => {
    Axios.get(`http://localhost:8080/getAllComment/${article_id}`).then((response) => {
      setBackendComments(response.data);
    })
  }, [])

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
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                currentUserId={user_id}
            />
            ))}
        </div>
</div>
  );
};

export default Comments;