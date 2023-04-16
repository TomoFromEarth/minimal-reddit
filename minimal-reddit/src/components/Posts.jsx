import { useState } from "react";
import Card from "../components/Card";
import { TiArrowUpThick, TiArrowUpOutline, TiArrowDownThick, TiArrowDownOutline } from "react-icons/ti";
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

  const renderDownVote = () => {
    if (vote === -1) {
      return <TiArrowDownThick className="flex items-center rounded p-0 pointer border-none bg-none" />;
    }
    return <TiArrowDownOutline className="flex items-center rounded p-0 pointer border-none bg-none" />;
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
              <div className="w-full hidden rounded">
                <img src={post.url} alt="" className="w-full" />
              </div>
              <div className="mt-2 border-t-2 pt-1 flex justify-between items-center">
                <span className="flex items-center">
                  <Avatar name={post.author} />
                  <span className="text-blue-500 font-bold">{post.author}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Post;
