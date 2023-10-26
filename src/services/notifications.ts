import api from "./api";
import { Notification } from "../models/Notification";

interface response {
  count: number;
}

export const getNotifications = async (): Promise<Notification[]> => {
  const response = await api.get(`/notifications`);
  return response.data;
};

export const getUnseenNotificationsCount = async (): Promise<response> => {
  const response = await api.get(`/notifications/count`);
  return response.data;
};

export const markAllAsSeen = async (): Promise<Notification> => {
  const response = await api.put(`/notifications/accept`);
  return response.data;
};
