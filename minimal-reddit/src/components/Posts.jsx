import { useState } from "react";
import Card from "../components/Card";
import { TiArrowUpThick, TiArrowUpOutline } from "react-icons/ti";
import shortenNumber from "../utils/shortenNumber";

const Post = ({ post, onToggleComments }) => {
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
      return <TiArrowUpThick className="flex items-center rounded p-0 pointer border-none bg-none" />;
    }
    return <TiArrowUpOutline className="flex items-center rounded p-0 pointer border-none bg-none" />;
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

  return (
    <article key={post.id}>
      <Card>
        <div className="flex">
          <div className="flex flex-col items-center mr-3">
            <button
              type="button"
              className={`${vote === 1 && "text-green-500 hover:text-green-500 active:text-green-500"}`}
              onClick={() => onHandleVote(1)}
              aria-label="Up vote"
            >
              {renderUpVote()}
            </button>
            <p className={`text-green-500 ${getVoteType()}`}>{shortenNumber(post.ups, 1)}</p>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
