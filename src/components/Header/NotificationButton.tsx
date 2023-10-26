import React, { useState, useRef, useEffect } from "react";
import {
  getNotifications,
  getUnseenNotificationsCount,
} from "../../services/notifications.ts";
import { Notification } from "../../models/Notification.ts";

import MenuModal from "./MenuModal.tsx";

const NotificationButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([] as Notification[]);
  const [notificationsCount, setNotificationsCount] = useState(0);

  // Reference the profile menu DOM element.
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      // When the Navbar component is unmounted, the event listener is removed
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    // If the menu is mounted in the DOM and the clicked element is not one of the menu items
    if (
      menuRef.current &&
      !(menuRef.current as any).contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const toggleProfileMenu = () => {
    console.log("toggle");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unseenNotifications = async () => {
      const notifications = await getNotifications();
      setNotifications(notifications);
    };
    unseenNotifications();
  }, []);

  useEffect(() => {
    const unseenNotifications = async () => {
      const count = await getUnseenNotificationsCount();
      setNotificationsCount(count.count);
    };
    unseenNotifications();
  }, []);

  console.log(notificationsCount);

  return (
    <div className="relative flex justify-end self-center">
      <button onClick={toggleProfileMenu} ref={menuRef} className="flex">
        <span className="material-symbols-outlined">notifications</span>
      </button>
      {notificationsCount > 0 && !isMenuOpen && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 h-5 w-5 bg-red-500 rounded-full flex justify-center items-center text-white text-xs">
          {notificationsCount}
        </div>
      )}
      {isMenuOpen && <MenuModal notifications={notifications} />}
    </div>
  );
};

export default NotificationButton;
