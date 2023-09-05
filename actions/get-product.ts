import { Product } from "@/types/storeModelTypes";
import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};
