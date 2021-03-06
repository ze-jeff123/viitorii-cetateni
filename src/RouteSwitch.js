import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Articles from "./components/Articles";
import { getCategories, slugifyArticle } from "./global/articlesUtility";
import { useEffect, useState } from 'react';
import importAllDefault from "./global/importAllDefaults";
import Home from "./components/Home";
const RouteSwitch = () => {

  const [articles, setArticles] = useState(null);
  useEffect(() => {
    importAllDefault().then((val) => { setArticles(val) });
  }, []);


  articles&&
  articles.forEach((article) => {
    console.log(`/articole/${slugifyArticle(article)}`);
  });


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/articole' element={<Articles />} />
        {
          articles &&
          articles.map((article) => (
            <Route path={`/articole/${slugifyArticle(article)}`} element={<Articles />} />))
        }
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;