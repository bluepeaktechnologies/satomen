import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Footer from "./screens/Footer";
import Header from "./screens/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1"></div>

      <Footer />
    </div>
  );
}

export default App;
