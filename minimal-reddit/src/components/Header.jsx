import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState("");

  const searchTerm = useSelector((state) => state.reddit.searchTerm);

  const dispatch = useDispatch();
};

export default Header;
