import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const socket = new WebSocket(url);
    console.log(messages);

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event?.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error: ", error);
    };

    socket.onclose = (event) => {
      console.log("WebSocket connection closed: ", event);
    };

    return () => {
      console.log("WebSocket connection closed.");
      socket.close();
    };
  }, [url]);

  return messages;
};

export default useWebSocket;
