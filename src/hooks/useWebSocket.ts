import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);

      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      console.log("WebSocket connection closed.");
      socket.close();
    };
  }, [url]);

  return messages;
};

export default useWebSocket;
