import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Articles from "./components/Articles";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/articole' element={<Articles/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;