import api from "./api";

export interface CreateMatchData {
  product_name: string;
}

export const createMatch = async (data: CreateMatchData): Promise<void> => {
  await api.post("/match", data);
};
