import React from "react";
import ReactDom from 'react-dom/client'
import Users from "./src/components/Users";
const App = () => {
  return <div className=" flex h-screen w-screen p-6 justify-center"><Users/></div>;
};
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
