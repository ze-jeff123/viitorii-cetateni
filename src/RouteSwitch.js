import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Home from "./components/Home";
import flatPosts from "./flatPosts.js"
import { v4 as uuidv4 } from 'uuid';
import DespreNoi from "./components/DespreNoi";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/articole' element={<Articles />} />
        <Route path='/despre-noi' element={<DespreNoi/>} />
        {
          flatPosts.map((article) => (
            <Route key={uuidv4()} path={`/${article.slug}`} element={<Articles />} />))
        }
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;