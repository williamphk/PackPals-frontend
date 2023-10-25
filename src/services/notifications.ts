import api from "./api";
import { Notification } from "../models/Notification";

export const getNotifications = async (): Promise<Notification[]> => {
  const response = await api.get(`/notifications`);
  return response.data;
};
