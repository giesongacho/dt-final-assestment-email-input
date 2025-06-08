import React, { useState } from "react";
import { Spin } from "antd";
const Search = ({
  inputSearch,
  handleEnter,
  filterEmail,
  emailList,
  handleId,
  handleSearch,
  loading,
  handleDelete,
  origList,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${!emailList ? "w-[400px]" : ""} ${
        !emailList ? "h-[49.47px]" : ""
      } bg-white rounded-md relative`}
    >
      <div className="flex-wrap rounded-lg relative">
        {emailList.map((email, index) => {
          return (
            <div key={index}>
              {email ? (
                <div className=" m-2 w-[1rem]">
                  <div className="rounded-lg flex justify-around items-center">
                    <div
                      className={` ${
                        origList.includes(email)
                          ? "hover:bg-slate-300"
                          : "bg-red-300"
                      } rounded-md `}
                    >
                      <span className="font-semibold rounded-lg p-2">
                        {email}
                      </span>
                      &nbsp;
                      <span
                        className={` px-2  cursor-pointer font-semibold ${
                          origList.includes(email)
                            ? ""
                            : "text-white rounded-[50%] bg-red-400"
                        }`}
                        onClick={() => handleDelete(index)}
                        onMouseEnter={() => setToggle(true)}
                        onMouseLeave={() => setToggle(false)}
                      >
                        {origList.includes(email) ? (
                          <>x</>
                        ) : toggle ? (
                          <>x</>
                        ) : (
                          <>i</>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}

        <div className="flex items-center">
          <input
            placeholder="Enter Recipients"
            className={`border-t-0 border-l-0 border-r-0 border-b-0 outline-0 pl-2 ${
              emailList ? "w-[400px]" : ""
            } ${emailList ? "h-[49.47px]" : ""} `}
            type="text"
            value={inputSearch}
            onChange={handleSearch}
            onKeyDown={handleEnter}
          />
          {loading && (
            <span>
              <Spin />
            </span>
          )}
        </div>
      </div>
      <ul className="bg-white mt-1 max-h-[5rem] overflow-y-scroll scroll-smooth">
        {inputSearch
          ? filterEmail.map((emails, index) => (
              <li
                key={index}
                className="hover:bg-slate-200 cursor-pointer pl-2"
                value={emails}
                onClick={() => handleId(index)}
              >
                {emails}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Search;
