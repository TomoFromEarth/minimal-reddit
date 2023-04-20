import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedSubreddit, setSelectedSubreddit } from "../store/redditSlice";
import { fetchSubreddits, selectSubreddits } from "../store/subredditSlice";
import Avatar from "./Avatar";
import Card from "./Card";

const Subreddits = () => {
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const subreddits = useSelector(selectSubreddits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <Card className="pr-4">
      <h2 className="mb-2 mt-0 text-2xl font-semibold">Subreddits</h2>
      <ul className="list-none p-0">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `rounded-md border-l-4 border-l-blue-500 bg-blue-500 bg-opacity-20`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
              className="pointer flex w-full items-center rounded-md border-none bg-none p-4 font-semibold hover:bg-gray-400 hover:bg-opacity-20"
            >
              <img
                src={subreddit.icon_img || <Avatar name={`${subreddit.display_name}`} />}
                alt={`${subreddit.display_name}`}
                className="mr-2 h-8 w-8 rounded-full border-2 border-slate-600"
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Subreddits;
