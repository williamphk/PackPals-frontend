import api from "./api";
import { Match } from "../models/Match";

export const getOngoingMatches = async (): Promise<Match[]> => {
  const user = localStorage.getItem("user");
  if (!user) {
    throw new Error("User not found");
  }
  const userId = JSON.parse(user).id;
  const response = await api.get(`/users/${userId}/ongoing`);
  return response.data;
};

export const getRecentMatches = async (): Promise<Match[]> => {
  const user = localStorage.getItem("user");
  if (!user) {
    throw new Error("User not found");
  }
  const userId = JSON.parse(user).id;
  const response = await api.get(`/users/${userId}/recent`);
  return response.data;
};

export const getRecentMatchesByReqesterId = async (
  requesterId: string
): Promise<Match[]> => {
  const response = await api.get(`/users/${requesterId}/recent`);
  return response.data;
};

export const getYouMightLikeMatches = async (): Promise<Match[]> => {
  const user = localStorage.getItem("user");
  if (!user) {
    throw new Error("User not found");
  }
  const userId = JSON.parse(user).id;
  const response = await api.get(`/users/${userId}/like`);
  return response.data;
};
