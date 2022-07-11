import React, { useEffect, useState } from 'react';
import Articles from './components/Articles';
import Layout from './components/Layout';
import importAllDefault from './global/importAllDefaults';

function App() {
  useEffect(() => {
    importAllDefault("./MyObjects").then((val) => {
      console.log(val);
    });
  }, []);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
