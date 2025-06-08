import React, { useEffect, useState } from "react";
import emails from "../services/email.js";
import Search from "./Search";

const SearchContainer = () => {
  const [email, setEmailList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filterEmail, setFilteredEmail] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
    setLoading(true);

    setTimeout(() => {
      const filteredEmail = emails.filter((email) =>
        email.startsWith(e.target.value)
      );
      setFilteredEmail(filteredEmail);
      setLoading(false);
    }, 1000);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      setEmailList([...email, filterEmail[0]]);
      setEmailList([...email, inputSearch]);
      setInputSearch("");
    }
  };
  const handleId = (id) => {
    const filterAdd = filterEmail.filter((_, index) => index === id);
    setEmailList([...email, filterAdd[0]]);
    setInputSearch("");
  };
  const handleDelete = (id) => {
    setEmailList(email.filter((_, index) => index !== id));
  };
  useEffect(() => {}, []);
  return (
    <div className="flex justify-center items-center h-screen  bg-slate-300">
      <Search
        origList={emails}
        setInputSearch={handleSearch}
        inputSearch={inputSearch}
        handleSearch={handleSearch}
        handleEnter={handleEnter}
        filterEmail={filterEmail}
        emailList={email}
        handleId={handleId}
        loading={loading}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default SearchContainer;
