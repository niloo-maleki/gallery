import "./App.css";
import {useEffect, useState } from "react";
import { IPhotos } from "./interface/interface";
import { getphotos} from "./service/api";
import Gallery from "./components/Gallery";
import FilterButton from "./components/FilterButton";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [data, setData] = useState<IPhotos[]>([]);

  useEffect(() => {
    getphotos().then((response) => {
      return response && setData(response?.data);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 w-full mx-auto justify-center items-center">
        <SearchInput setData={setData} />
      </div>
      <div className="flex mx-auto gap-2">
        <FilterButton setData={setData} />
      </div>
      <div className="grid grid-cols-3 gap-4  ">
        <Gallery data={data} />
      </div>
    </div>
  );
};

export default App;
