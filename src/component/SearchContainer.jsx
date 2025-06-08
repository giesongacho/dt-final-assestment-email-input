import React, { useEffect, useState } from "react";
// import { data } from "../services/email.js";
import Search from "./Search";
const SearchContainer = () => {
  const emails = [
    "ebrekke@gmail.com",
    "rigoberto.weimann@schuppe.com",
    "ijakubowski@barton.com",
    "ivah83@gmail.com",
    "orville36@gmail.com",
    "ckoelpin@gutkowski.net",
    "heath70@hayes.org",
    "garland.conn@mcclure.com",
    "harrison01@kshlerin.info",
    "hkautzer@hotmail.com",
  ];
  const [email, setEmailList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filterEmail, setFilteredEmail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(false);

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
    setLoading(false);
    setTimeout(() => {
      const filteredEmail = emails.filter((email) =>
        email.startsWith(e.target.value)
      );
      setFilteredEmail(filteredEmail);
      setLoading(true);
    }, 1000);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      setEmailList([...email, filterEmail[0]]);
      setInputSearch("");
      if (inputSearch) {
        setEmailList([...email, inputSearch]);
        const filtered = emails.find((orig) => orig === email);
        if (!filtered) {
          setFound(true);
        }
      } else {
        console.log("wala", inputSearch);
      }
    }
  };

  const handleId = (id) => {
    const filterAdd = filterEmail.filter((_, index) => index === id);
    setEmailList([...email, filterAdd[0]]);
    setInputSearch("");
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
        found={found}
      />
    </div>
  );
};

export default SearchContainer;
