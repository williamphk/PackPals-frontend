import api from "./api";
import { Notification } from "../models/Notification";

export const getUnseenNotifications = async (): Promise<Notification[]> => {
  const response = await api.get(`/notifications`);
  return response.data;
};
