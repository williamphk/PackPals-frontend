import React from "react";
import { Notification } from "../../models/Notification.ts";

interface MenuModalProps {
  notifications: Notification[];
}

const MenuModal: React.FC<MenuModalProps> = ({ notifications }) => {
  return (
    <div className="absolute top-full right-1 w-36 mt-1 p-1 bg-white rounded-md shadow-3xl text-gray-800">
      {notifications.map((element, index) => {
        return (
          <button
            className="w-full block hover:bg-gray-200 rounded-md transition duration-50"
            key={index}
          >
            {element.content}
          </button>
        );
      })}
    </div>
  );
};

export default MenuModal;
