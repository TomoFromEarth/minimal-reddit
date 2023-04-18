import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Avatar from "./Avatar";

const Comments = ({ comment }) => {
  return (
    <div className="m-0 rounded-lg p-2">
      <div className="mb-2 flex items-center">
        <Avatar name={comment.author} />
        <p className="font-bold">{comment.author}</p>
        <p className="ml-auto italic">
          {formatDistanceToNow(new Date(comment.created_utc * 1000), { addSuffix: true })}
        </p>
      </div>
      <ReactMarkdown source={comment.body} />
    </div>
  );
};

Comments.propTypes = {
  comment: PropTypes.string.isRequired,
};

export default Comments;
