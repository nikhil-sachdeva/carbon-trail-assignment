import logo from "./logo.svg";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import Topbar from "./components/Topbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex">
      <LeftSidebar />
      <RightSidebar />
      <div className="w-full mr-72 ml-60">
        <Topbar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
