import { Product } from "@/types/storeModelTypes";
import axios from "axios";
import qs from "query-string";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
export const getProducts = async (query: Query): Promise<Product[]> => {
  const fullUrl = qs.stringifyUrl({
    url,
    query: { ...query },
  });
  const { data } = await axios.get(fullUrl);
  console.log(data);
  return data;
};
