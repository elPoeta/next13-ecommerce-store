import { Billboard } from "@/types/storeModelTypes";
import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};
