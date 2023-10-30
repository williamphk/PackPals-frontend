import React, { useState, useEffect, useRef } from "react";
import {
  getNotifications,
  getUnseenNotificationsCount,
} from "../../services/notifications.ts";
import { Notification } from "../../models/Notification.ts";
import { useSocket } from "../../context/SocketContext.tsx";

import MenuModal from "./MenuModal.tsx";

const NotificationButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([] as Notification[]);
  const [notificationsCount, setNotificationsCount] = useState(0 as number);
  const { notificationCount } = useSocket();
  const buttonRef = useRef(null);

  const toggleProfileMenu = () => {
    console.log("toggle");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const getAllNotifications = async () => {
      const notifications = await getNotifications();
      setNotifications(notifications);
    };
    getAllNotifications();
  }, [isMenuOpen]);

  useEffect(() => {
    const unseenNotifications = async () => {
      const count = await getUnseenNotificationsCount();
      setNotificationsCount(count.count);
    };
    unseenNotifications();
  }, [notificationCount]);

  return (
    <div className="relative flex justify-end self-center">
      <button onClick={toggleProfileMenu} className="flex" ref={buttonRef}>
        <span className="material-symbols-outlined">notifications</span>
      </button>
      {notificationsCount > 0 && !isMenuOpen && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 h-5 w-5 bg-red-500 rounded-full flex justify-center items-center text-white text-xs">
          {notificationsCount}
        </div>
      )}
      {isMenuOpen && (
        <MenuModal
          notifications={notifications}
          setIsMenuOpen={setIsMenuOpen}
          setNotificationsCount={setNotificationsCount}
          buttonRef={buttonRef}
        />
      )}
    </div>
  );
};

export default NotificationButton;
