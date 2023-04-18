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
    <header className="col-span-full mb-8 grid h-16 grid-flow-col grid-cols-[1fr] content-center gap-4 bg-slate-100 px-16 md:grid-cols-3">
      <div className="col-start-1 col-end-2 flex items-center py-2 font-bold">
        <FaReddit className="mr-2 h-8 w-8 text-blue-600" />
        <p className="text-headerText">
          Minimal<span className="text-blue-600">Reddit</span>
        </p>
      </div>
      <form className="flex items-center text-slate-500" onSubmit={onSearchTermSubmit}>
        <input
          className="mr-2 max-h-max flex-1 rounded-lg border-none px-2 py-1"
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button
          className="pointer text-2xl text-slate-500"
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
