import api from "./api";
import { Match } from "../models/Match";

export interface CreateMatchData {
  product_name: string;
}

export const createMatch = async (data: CreateMatchData): Promise<void> => {
  await api.post("/matches", data);
};

export const getOngoingMatches = async (): Promise<Match[]> => {
  const user = localStorage.getItem("user");
  if (!user) {
    throw new Error("User not found");
  }
  const userId = JSON.parse(user).id;
  const response = await api.get(`/users/${userId}/ongoing`);
  return response.data;
};
