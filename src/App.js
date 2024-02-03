import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/common/Sidebar";
import RightSidebar from "./components/common/RightSidebar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import Topbar from "./components/common/Topbar";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <RightSidebar />
      <div className="w-full mr-72 ml-60">
    <Topbar/>

        <HomePage/>
      </div>
    </div>
  );
}

export default App;
