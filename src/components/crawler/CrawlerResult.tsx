import useWebSocket from "../../hooks/useWebSocket";

const CrawlerResult = () => {
  const URL = "ws://localhost:3000/ws";
  const messages = useWebSocket(URL);

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default CrawlerResult;
