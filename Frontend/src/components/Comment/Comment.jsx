import CommentForm from "./CommentForm";

import './comment.css';

const Comment = ({
  comment,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.comment_id &&
    activeComment.type === "editing";
  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete = currentUserId == comment.user_id; // && replies.length === 0 
  // const canEdit = currentUserId === comment.userId && !timePassed;
  const canEdit = currentUserId == comment.user_id;
  // const replyId = parentId ? parentId : comment.id;
  // const createdAt = new Date(comment.createdAt).toLocaleDateString();

  
  return (
    <div key={comment.comment_id} className="comment">
      <div className="comment-image-container">
        <img src="/user-icon.png" />
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{comment.username}</div>
            <div className="comment-date">{comment.created_at.substring(0,10)}</div>
						<div className="comment-id">[Comment id = {comment.comment_id}]</div>
          </div>
          {!isEditing && <div className="comment-text">{comment.content}</div>}
          {isEditing && (
            <CommentForm
              submitLabel="Update"
              hasCancelButton
              initialText={comment.content}
              handleSubmit={(text) => updateComment(text, comment.comment_id)}
              handleCancel={() => {
                setActiveComment(null);
              }}
            />
          )}
          <div className="comment-actions">
            {canEdit && (
              <div
                className="comment-action"
                onClick={() =>
                  setActiveComment({ id: comment.comment_id, type: "editing" })
                }
              >
              Edit
              </div>
            )}
            {canDelete && (
              <div
                className="comment-action"
                onClick={() => deleteComment(comment.comment_id)}
              >
                Delete
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;