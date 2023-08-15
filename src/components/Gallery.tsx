import { memo } from "react";
import { IPhotos } from "../interface/interface";

const Gallery = ({data}:{data:IPhotos[]}) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="flex flex-col justify-center items-center transition duration-150 ease-in-out hover:scale-105"
            key={item.id}
          >
            <img
              className="w-96 h-64 rounded-xl hover:shadow-2xl cursor-pointer "
              alt={item.alt}
              src={item.url}
            ></img>
            <span>{item.category}</span>
          </div>
        );
      })}
    </>
  );
};

export default memo(Gallery);
