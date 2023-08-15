import React from "react";
import { useState, useCallback } from "react";
import { getphotosByFilterUseText } from "../service/api";
import { IPhotos } from "../interface/interface";

const SearchInput = ({
  setData,
}: {
  setData: (data: IPhotos[]) => void;
}) => {
  const [userText, setUserText] = useState<string>("");

  const filterByUserText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserText(event.target.value);
    },
    []
  );

  const searchHandler = () => {
    getphotosByFilterUseText(userText).then((response) => {
      response?.data?.length > 0  && setData(response?.data)
      return 
    });
    setUserText("");
  };

  const handleKeypress =((e:any)=>{
    if (e.key === 'Enter') {
        searchHandler()
    }
  })
  return (
    <>
      <label htmlFor="searchInput">Search:</label>
      <input
        id="searchInput"
        placeholder="Search animal..."
        autoComplete="off"
        type="text"
        value={userText}
        className="flex w-full placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:outline-none focus:border-green-500 focus:ring-sky-500 border border-green-900 bg-gray-100  rounded-md py-2 px-2"
        onChange={filterByUserText}
        onKeyDown={handleKeypress}
      />
      <button
        className="bg-green-500 border-green-900 hover:bg-green-600"
        onClick={searchHandler}
      >
        Search
      </button>
    </>
  );
};

export default SearchInput;
