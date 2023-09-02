import { Category } from "@/types/storeModelTypes";
import axios from "axios";
const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get(url);
  return data;
};
