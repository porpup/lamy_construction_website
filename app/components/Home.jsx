'use client';

import React from "react";
import BasePath from './BasePath';

const Home = () => {
  const basePath = BasePath();

  return (
    <div>
      <img src={`${basePath}/assets/constructors.png`} alt="constructors" />
    </div>
  );
}

export default Home;
