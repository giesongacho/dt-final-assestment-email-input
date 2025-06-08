import React from "react";

const Search = ({
  found,
  inputSearch,
  handleEnter,
  filterEmail,
  emailList,
  handleId,
  handleSearch,
}) => {
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
                    <div className={`${found ? "" : "bg-red-300"} rounded-md`}>
                      <span className=" rounded-lg">{email}</span>
                      &nbsp;
                      <span className="hover:bg-red-500 hover:text-white  rounded-[50%]  px-1 cursor-pointer">
                        x
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
      </div>
      <ul className="bg-white mt-1 max-h-[5rem] overflow-y-scroll ">
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
