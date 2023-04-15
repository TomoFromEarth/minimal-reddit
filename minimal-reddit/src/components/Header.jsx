import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/redditSlice";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

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
    <header className="grid grid-cols-3 h-16 px-10 bg-slate-50 content-center">
      <div className="flex font-bold p-2 col-start-1 col-end-2 items-center">
        <FaReddit className="mr-2 col-start-2 col-end-3 text-3xl text-blue-600" />
        <p className="text-headerText">
          Minimal<span className="text-blue-600">Reddit</span>
        </p>
      </div>
      <form className="flex items-center" onSubmit={onSearchTermSubmit}>
        <input
          className="flex-1 border-none rounded py-1 px-2 mr-2 max-h-max"
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button className="pointer text-xl" type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
