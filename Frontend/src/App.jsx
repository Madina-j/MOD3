import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { FullImg } from "./components/FullImg";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/full" element={<FullImg />} />
    </Routes>
  );
};

export default App;
