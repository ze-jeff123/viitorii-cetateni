import React from 'react';
import post from "./posts.json";
function App() {
  const y = post;
  const x = JSON.parse(post);
  console.log(x);
  return (
    <>
      <div>
        hi there
      </div>
    </>
  );
}

export default App;
