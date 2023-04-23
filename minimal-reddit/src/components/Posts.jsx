import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { TiArrowDownOutline, TiArrowDownThick, TiArrowUpOutline, TiArrowUpThick, TiMessage } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import shortenNumber from "../utils/shortenNumber";
import Avatar from "./Avatar";
import Card from "./Card";
import Comments from "./Comments";

const Posts = ({ post, onToggleComments }) => {
  const [vote, setVote] = useState(0);

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

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
    if (vote === 1) {
      return (
        <TiArrowUpThick className="pointer flex h-6 w-6 items-center rounded-lg border-none bg-none p-0 text-green-500" />
      );
    }
    return (
      <TiArrowUpOutline className="pointer flex h-6 w-6 items-center rounded-lg border-none bg-none p-0 text-slate-500" />
    );
  };

  const renderDownVote = () => {
    if (vote === -1) {
      return (
        <TiArrowDownThick className="pointer flex h-6 w-6 items-center rounded-lg border-none bg-none p-0 text-red-500" />
      );
    }
    return (
      <TiArrowDownOutline className="pointer flex h-6 w-6 items-center rounded-lg border-none bg-none p-0 text-slate-500" />
    );
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
            <Comments comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <article key={post.id}>
      <Card>
        <motion.div initial="hidden" animate="visible" className="flex">
          <motion.div variants={itemVariants} className="mr-6 flex flex-col items-center">
            <button
              type="button"
              className={`${vote === 1 && "text-green-500 hover:text-green-500 active:text-green-500"}`}
              onClick={() => onHandleVote(1)}
              aria-label="Up vote"
            >
              {renderUpVote()}
            </button>
            <p className={`my-2 text-sm text-blue-500 ${getVoteType()}`}>{shortenNumber(post.ups, 1)}</p>
            <button
              type="button"
              className={`${vote === -1 && "text-red-500 hover:text-red-500 active:text-red-500"}`}
              onClick={() => onHandleVote(-1)}
              aria-label="Down vote"
            >
              {renderDownVote()}
            </button>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full">
            <h3 className="mb-4 text-lg font-bold">{post.title}</h3>
            <div>
              <img src={post.url} alt="" className="w-full rounded-lg" />
            </div>
            <div className="mt-4 flex items-center justify-between pt-2">
              <span className="flex items-center">
                <Avatar name={post.author} />
                <span className="text-sm font-bold text-blue-500">{post.author}</span>
              </span>
              <span className="text-xs text-slate-500">
                {formatDistanceToNow(new Date(post.created_utc * 1000), { addSuffix: true })}
              </span>
              <span className="flex items-center">
                <button
                  type="button"
                  className={`mr-0 text-slate-500 ${post.showingComments && "text-blue-500"}`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  <TiMessage className="mr-0 h-6 w-6" />
                </button>
                <span className="text-sm text-slate-500">{shortenNumber(post.num_comments, 1)}</span>
              </span>
            </div>
            {renderComments()}
          </motion.div>
        </motion.div>
      </Card>
    </article>
  );
};

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  onToggleComments: PropTypes.func.isRequired,
};

export default Posts;
