import { Fragment, useCallback, useEffect, useState } from "react";
import "./App.css";
import { IPhotos, CategoriesType, categories } from "./interface/interface";
import {
  getphotos,
  getCategory,
  getphotosByFilter,
  getphotosByFilterUseText,
} from "./service/api";

const App = () => {
  const [data, setData] = useState<IPhotos[]>([]);
  const [category, setCategory] = useState<CategoriesType[]>();
  const [userText, setUserText] = useState<string>("");

  useEffect(() => {
    getphotos().then((response) => {
      return response && setData(response?.data);
    });
    getCategory().then((response) => {
      return response && setCategory(response?.data);
    });
  }, []);

  const selectedByCategory = (category: CategoriesType) => {
    getphotosByFilter(category).then((response) => {
      return response && setData(response?.data);
    });
  };

  const filterByUserText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(event.target.value);
  };
  const searchHandler = () => {
      getphotosByFilterUseText(userText).then((response) => {
        return response?.data?.length > 0 && setData(response?.data);
      });
    setUserText("");
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 w-full mx-auto justify-center items-center">
        <label htmlFor="searchInput">Search:</label>
        <input
          id="searchInput"
          placeholder="Search animal..."
          type="text"
          value={userText}
          className="flex w-full placeholder:italic placeholder:text-slate-400 focus:ring-1 focus:outline-none focus:border-green-500 focus:ring-sky-500 border border-green-900 bg-gray-100  rounded-md py-2 px-2"
          onChange={filterByUserText}
        />
        <button
          className="bg-green-500 border-green-900 hover:bg-green-600"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      <div className="flex mx-auto gap-2  ">
        {category?.map((item) => {
          return (
            <Fragment key={item}>
              <button
                className="hover:bg-orange-200 hover:border-yellow-800 focus:bg-yellow-400 focus:border-yellow-800"
                onClick={() => selectedByCategory(item)}
              >
                {item}
              </button>
            </Fragment>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-4  ">
        {data.map((item) => {
          return (
            <div
              className="flex flex-col justify-center items-center transition duration-150 ease-in-out hover:scale-105"
              key={item.id}
            >
              <img
                className="w-full h-64 rounded-xl hover:shadow-2xl cursor-pointer "
                alt={item.alt}
                src={item.url}
              ></img>
              <span>{item.category}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
