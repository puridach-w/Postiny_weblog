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

  const canDelete = currentUserId == comment.user_id;
  const canEdit = currentUserId == comment.user_id;
  
  return (
    <div key={comment.comment_id} className="comment">
      <div className="comment-image-container">
        <img src={comment.profile_pic === null ? "/pony-profile.jpg" 
        : 
        "http://localhost:8080" + `/image/${comment.profile_pic}`} />
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{comment.username}</div>
            <div className="comment-date">{comment.created_at.substring(0,10)}</div>
						<div className="comment-id">Comment id = {comment.comment_id}</div>
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