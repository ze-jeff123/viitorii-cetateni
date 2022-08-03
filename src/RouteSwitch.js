import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Articles from "./components/Articles";
import { getCategories, slugifyArticle } from "./global/articlesUtility";
import { useEffect, useState } from 'react';
import importAllDefault from "./global/importAllDefaults";
import Home from "./components/Home";
import flatPosts from "../flatPosts.js"
const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/articole' element={<Articles />} />
        {
          flatPosts.map((article) => (
            <Route path={`/articole/${slugifyArticle(article)}`} element={<Articles />} />))
        }
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;