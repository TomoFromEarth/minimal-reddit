import { useEffect, useState } from "react";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/redditSlice";

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (event) => {
    setSearchTermLocal(event.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <header className="col-span-full mb-4 grid h-16 grid-flow-col grid-cols-[1fr] content-center bg-slate-100 dark:bg-slate-800 md:mb-8 md:grid-cols-3 md:gap-4 md:px-16">
      <div className="ml-4 flex items-center justify-start font-bold md:col-start-1 md:col-end-2 md:py-2">
        <FaReddit className="mx-1 h-8 w-8 text-blue-600 dark:text-blue-500 md:mr-2" />
        <p className="text-xs text-slate-950 dark:text-slate-300 md:text-base">
          Minimal<span className="text-blue-600 dark:text-blue-500">Reddit</span>
        </p>
      </div>
      <form className="mr-4 flex items-center" onSubmit={onSearchTermSubmit}>
        <input
          className="mb-1 mr-1 max-h-max w-32 flex-1 rounded-lg border-none px-2 py-1 text-sm sm:w-60 md:mr-2"
          type="text"
          placeholder="Search Posts"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button
          className="pointer text-xl text-slate-500 dark:text-slate-400 md:text-2xl"
          type="submit"
          onClick={onSearchTermSubmit}
          aria-label="Search"
        >
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
