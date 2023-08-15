import { useEffect, useState } from "react";
import { CategoriesType, IPhotos } from "../interface/interface";
import { getCategory, getphotosByFilter } from "../service/api";

const FilterButton = ({ setData }: { setData: (data: IPhotos[]) => void }) => {
  const [category, setCategory] = useState<CategoriesType[]>();

  useEffect(() => {
    getCategory().then((response) => {
      return response && setCategory(response?.data);
    });
  }, []);

  const selectedByCategory = (category: CategoriesType) => {
    getphotosByFilter(category).then((response) => {
      return setData(response?.data);
    });
  };
  
  return (
    <>
      {category?.map((item) => {
        return (
          <div key={item}>
            <button
              className="hover:bg-orange-200 hover:border-yellow-800 focus:bg-yellow-400 focus:border-yellow-800"
              onClick={() => selectedByCategory(item)}
            >
              {item}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FilterButton;
