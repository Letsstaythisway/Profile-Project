import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileGallery from "./ProfileGallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProfileGallery />
    </>
  );
}

export default App;
