import React from "react";
import { Notification } from "../../models/Notification.ts";

interface MenuModalProps {
  notifications: Notification[];
}

const calculateTime = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

const NotificationItem: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  return (
    <button className="w-full block hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition duration-50 p-2 text-left flex justify-center items-center gap-x-1">
      <div>
        <div className="font-medium">{notification.content}</div>
        {notification.created_date && (
          <div className="text-xs text-blue-600 dark:text-blue-300">
            {calculateTime(new Date(notification.created_date))}
          </div>
        )}
      </div>
      <div>
        {!notification.seen && (
          <div className="rounded-full h-4 w-4 bg-blue-600"></div>
        )}
      </div>
    </button>
  );
};

const MenuModal: React.FC<MenuModalProps> = ({ notifications }) => {
  return (
    <div className="absolute top-[64px] right-[-150px] h-[80vh] overflow-scroll w-[400px] mt-1 p-2 bg-white rounded-lg shadow-3xl text-gray-800 dark:bg-gray-950 dark:text-white transition-colors duration-200 flex flex-col gap-y-2 shadow-xl">
      <h3 className="text-xl font-bold p-2 dark:text-white">Notifications</h3>
      {notifications.map((element, index) => (
        <NotificationItem key={index} notification={element} />
      ))}
    </div>
  );
};

export default MenuModal;
