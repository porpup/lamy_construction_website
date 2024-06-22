'use client';

import React from "react";

const Home = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/lamy_construction_website' : '';

  return (
    <div>
      <img src={`${basePath}/assets/constructors.png`} alt="constructors" />
    </div>
  );
}

export default Home;
