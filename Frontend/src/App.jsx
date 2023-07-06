import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/header/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Images Gallery" />
    </div>
  );
}

export default App;
