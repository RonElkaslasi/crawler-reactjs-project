import CrawlerResult from "./crawler/CrawlerResult";
import Form from "./forms/Form";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Crawler App</h1>
      <Form />
      <CrawlerResult />
    </div>
  );
};

export default Home;
