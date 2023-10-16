import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import { useUser } from "../context/UserContext";

function NotificationHandler() {
  const socket = useSocket();
  const { user } = useUser();

  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", { userId: user?.id });
      console.log("Joined room" + user?.id);
      return () => {
        socket.disconnect();
      };
    }
  }, []);

  return null;
}

export default NotificationHandler;
