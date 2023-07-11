import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

// const UNSPLASH_KEY = "vI6JHehkjv1HAUdTi7wq7fzjV5iIMo55JF9QW4P81n8";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
