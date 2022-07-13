import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Articles from "./components/Articles";
import { getCategories, slugifyArticle } from "./global/articlesUtility";
import { useEffect, useState } from 'react';
import importAllDefault from "./global/importAllDefaults";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/articole' element={<Articles />} />
        {
          articles &&
          articles.map((article) => (
            <Route path={`/articole/${slugifyArticle(article)}`} element={<Articles />} />))
        }
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;