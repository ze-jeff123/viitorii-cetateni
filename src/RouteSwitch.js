import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Home from "./components/Home";
import flatPosts from "./flatPosts.js"
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/articole' element={<Articles />} />
        {
          flatPosts.map((article) => (
            <Route path={`/${article.slug}`} element={<Articles />} />))
        }
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;