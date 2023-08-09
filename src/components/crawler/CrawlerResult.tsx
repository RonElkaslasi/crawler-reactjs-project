import { useState } from "react";
import useWebSocket from "../../hooks/useWebSocket";

interface Message {
  title: string;
  depth: number;
  url: string;
  links: string[];
}

const CrawlerResult = () => {
  const URL = "ws://localhost:3000/";
  const messagesArray: Message[][] = useWebSocket(URL);
  const messages: Message[] = messagesArray.flat();
  const uniqueUrls: string[] = [];
  const uniqueMessages: Message[] = [];

  const [expandedUrls, setExpandedUrls] = useState<string[]>([]);

  const toggleExpand = (url: string) => {
    if (expandedUrls.includes(url)) {
      setExpandedUrls(expandedUrls.filter((u) => u !== url));
    } else {
      setExpandedUrls([...expandedUrls, url]);
    }
  };

  messages.forEach((message) => {
    if (!uniqueUrls.includes(message.url)) {
      uniqueUrls.push(message.url);
      uniqueMessages.push(message);
    }
  });

  return (
    <div>
      {uniqueMessages.map((message: Message, index) => (
        <div key={index} className="result-container">
          <p onClick={() => toggleExpand(message.url)}>{message.url}</p>
          {expandedUrls.includes(message.url) && (
            <div className="links-container">
              {message.links.map((link, linkIndex) => (
                <div key={linkIndex}>{link}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CrawlerResult;
