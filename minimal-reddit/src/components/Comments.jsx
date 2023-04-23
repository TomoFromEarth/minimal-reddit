import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";
import Avatar from "./Avatar";

const Comments = ({ comment }) => {
  const date = new Date(comment.created_utc * 1000);
  const isValidDate = !isNaN(date.getTime());
  const formattedDate = isValidDate ? formatDistanceToNow(date, { addSuffix: true }) : "Invalid Date";

  //Stops comments with invalid dates from API from rendering
  if (!isValidDate) {
    return null;
  }

  return (
    <div className="mt-6 rounded-lg border border-slate-400 p-2">
      <div className="mb-2 flex items-center">
        <Avatar name={comment.author} />
        <p className="font-bold">{comment.author}</p>
        <p className="ml-auto text-xs">{formattedDate}</p>
      </div>
      {<ReactMarkdown>{comment.body}</ReactMarkdown> || <Skeleton count={4} />}
    </div>
  );
};

Comments.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comments;
