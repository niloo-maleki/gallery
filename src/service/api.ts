import axios from "axios";
import { IPhotos, CategoriesType } from "../interface/interface";

const URL = "https://frontend-gallery.darkube.app/api";
// const api = axios.create({
//     baseURL: URL
// })
export const getphotos = async () => {
  try {
    const response = await axios.get<IPhotos[]>(`${URL}/photos`);
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get<CategoriesType[]>(`${URL}/categories`);
    return response;
  } catch (error) {
    console.log("errorCategory", error);
  }
};

export const getphotosByFilter = async (category:CategoriesType) => {
  try {
    const response = axios.get(`${URL}/categories/${category}/photos`);
    return response;
  } catch (error) {
    console.log("errorphotosByFilter", error);
  }
};

export const getphotosByFilterUseText = async (User_Text:string) => {
    try {
      const response = axios.get(`${URL}/photos`,{
        params: {
            search: User_Text
          }
      });
      return response;
    } catch (error) {
      console.log("photosByFilterUseText", error);
    }
  };
  
