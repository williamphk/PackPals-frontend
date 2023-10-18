import React, { createContext, useContext, useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
// import { useUser } from "./UserContext";

const ENDPOINT = "https://packpals.onrender.com/";

const SocketContext = createContext<any>(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<any>(null);
  // const { user } = useUser();

  useEffect(() => {
    // if (user) {
    const newSocket = socketIOClient(ENDPOINT);
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
    // }
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
