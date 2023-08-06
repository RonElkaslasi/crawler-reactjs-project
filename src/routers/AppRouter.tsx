import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
