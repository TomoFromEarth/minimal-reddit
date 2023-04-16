import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import { useState } from "react";
import { TiArrowDownOutline, TiArrowDownThick, TiArrowUpOutline, TiArrowUpThick, TiMessage } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import Card from "../components/Card";
import shortenNumber from "../utils/shortenNumber";
import Avatar from "./Avatar";

const Posts = ({ post, onToggleComments }) => {
  const [vote, setVote] = useState(0);

  const onHandleVote = (newValue) => {
    if (newValue === vote) {
      setVote(0);
    } else if (newValue === 1) {
      setVote(1);
    } else {
      setVote(-1);
    }
  };

  const renderUpVote = () => {
    if (vote === -1) {
      return <TiArrowUpThick className="pointer flex items-center rounded border-none bg-none p-0" />;
    }
    return <TiArrowUpOutline className="pointer flex items-center rounded border-none bg-none p-0" />;
  };

  const renderDownVote = () => {
    if (vote === -1) {
      return <TiArrowDownThick className="pointer flex items-center rounded border-none bg-none p-0" />;
    }
    return <TiArrowDownOutline className="pointer flex items-center rounded border-none bg-none p-0" />;
  };

  const getVoteType = () => {
    if (vote === 1) {
      return "text-green-500";
    }
    if (vote === -1) {
      return "text-red-500";
    }

    return "";
  };

  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Oops! Trouble loading comments!</h3>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <div>
          <Skeleton count={4} />
        </div>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <article key={post.id}>
      <Card>
        <div className="flex">
          <div className="mr-3 flex flex-col items-center">
            <button
              type="button"
              className={`${vote === 1 && "text-green-500 hover:text-green-500 active:text-green-500"}`}
              onClick={() => onHandleVote(1)}
              aria-label="Up vote"
            >
              {renderUpVote()}
            </button>
            <p className={`text-green-500 ${getVoteType()}`}>{shortenNumber(post.ups, 1)}</p>
            <button
              type="button"
              className={`${vote === -1 && "text-red-500 hover:text-red-500 active:text-red-500"}`}
              onClick={() => onHandleVote(-1)}
              aria-label="Down vote"
            >
              {renderDownVote()}
            </button>
            <div className="w-full">
              <h3 className="m-0 mb-2">{post.title}</h3>
              <div className="hidden w-full rounded">
                <img src={post.url} alt="" className="w-full" />
              </div>
              <div className="mt-2 flex items-center justify-between border-t-2 pt-1">
                <span className="flex items-center">
                  <Avatar name={post.author} />
                  <span className="font-bold text-blue-500">{post.author}</span>
                </span>
                <span>{formatDistanceToNow(new Date(post.created_utc * 1000), { addSuffix: true })}</span>
                <span className="flex items-center">
                  <button
                    type="button"
                    className={`mr-0 ${post.showingComments && "text-blue-500"}`}
                    onClick={() => onToggleComments(post.permalink)}
                    aria-label="Show comments"
                  >
                    <TiMessage className="mr-0" />
                  </button>
                  {shortenNumber(post.num_comments, 1)}
                </span>
              </div>
              {renderComments()}
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  onToggleComments: PropTypes.func.isRequired,
};

export default Posts;
