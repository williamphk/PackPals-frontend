import React, { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import { useUser } from "../context/UserContext";

const NotificationHandler: React.FC = () => {
  const { socket, notificationCount, setNotificationCount } = useSocket();
  const { user } = useUser();

  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", { userId: user?.id });
      console.log("Joined room" + user?.id);
      socket.on("notification", () => {
        setNotificationCount(notificationCount + 1);
      });
      return () => {
        socket.off("notification"); // Clean up the listener when the component is unmounted
      };
    }
  }, [user?.id]);

  return null;
};

export default NotificationHandler;
