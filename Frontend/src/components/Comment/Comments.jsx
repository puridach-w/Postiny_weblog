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
import Axios from "axios";

const Comments = ({read, setRead, article_id, addtodb, user_id}) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const startTime = new Date();
  const oneMinute = 60000;

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
    }).then((comment) => {
      location.reload();
      setActiveComment(null);
    })
    //     createCommentApi(text).then((comment) => {
    //         setBackendComments([comment, ...backendComments]);
    //         setActiveComment(null);
    // });
  };


  const updateComment = (text, commentId) => {
    Axios.patch("http://localhost:8080/updateComment",{
      content: text,
      comment_id: commentId 
    }).then((response) => {
      location.reload();
      setActiveComment(null);
    })
    // updateCommentApi(text).then(() => {
    //   const updatedBackendComments = backendComments.map((backendComment) => {
    //     if (backendComment.id === commentId) {
    //       return { ...backendComment, body: text };
    //     }
    //     return backendComment;
    //   });
    //   setBackendComments(updatedBackendComments);
    //   setActiveComment(null);
    // });
  };

  const deleteComment = (commentId) => {
    console.log(commentId);
    if (window.confirm("Are you sure you want to remove comment?")) {
      Axios.delete(`http://localhost:8080/deleteComment`,
        {
          params: {
            comment_id: commentId,
            }
        }).then((response) => {
          location.reload();
        })
      // deleteCommentApi().then(() => {
      //   const updatedBackendComments = backendComments.filter(
      //     (backendComment) => backendComment.id !== commentId
      //   );
      //   setBackendComments(updatedBackendComments);
      // });
    }
  };


  // useEffect(() => {
  //   getCommentsApi().then((data) => {
  //     setBackendComments(data);
  //   });
  // }, []);

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