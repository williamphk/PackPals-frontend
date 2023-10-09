import api from "./api";
import { Match } from "../models/Match";

export interface CreateMatchData {
  product_name: string;
}

export interface response {
  message: string;
  matchId: string;
}

export const createMatch = async (data: CreateMatchData): Promise<response> => {
  const response = await api.post("/matches", data);
  return response.data;
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

export const getPotentialMatches = async (
  keyword: string
): Promise<Match[]> => {
  const user = localStorage.getItem("user");
  if (!user) {
    throw new Error("User not found");
  }
  const response = await api.get(`/matches/${keyword}`);
  return response.data;
};

export const acceptMatch = async (matchId: string): Promise<response> => {
  const response = await api.post(`matches/${matchId}/accept`);
  return response.data;
};
