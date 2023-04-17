import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, fetchPosts, selectFilteredPosts, setSearchTerm } from "../store/redditSlice";
import getRandomNumber from "../utils/getRandomNumber";
import Posts from "./Posts";
import PostsLoading from "./PostsLoading";

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const posts = useSelector(selectFilteredPosts);
  const { isLoading, hasError, searchTerm, selectedSubreddit } = reddit;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  };

  if (isLoading) {
    const loadingItems = Array(getRandomNumber(3, 10)).fill(<PostsLoading />);
    const itemVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    };
    return (
      <motion.div initial="hidden" animate="visible">
        {loadingItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <PostsLoading />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (hasError) {
    return (
      <div className="pointer rounded border-none bg-blue-500 px-2 py-4 text-base">
        <h2>Failed to load posts!</h2>
        <button type="button" onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
          Try again!
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="pointer rounded border-none bg-blue-500 px-2 py-4 text-base">
        <h2>No posts found matching {searchTerm}</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(""))}>
          Back to home
        </button>
      </div>
    );
  }

  return (
    <>
      {posts.map((post, index) => (
        <Posts key={post.id} post={post} onToggleComments={onToggleComments(index)} />
      ))}
    </>
  );
};

export default Home;
