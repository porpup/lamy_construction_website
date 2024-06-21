'use client';

import React from "react";
import { usePathname } from "next/navigation";

const Home = () => {
  const pathname = usePathname();
  const basePath = pathname.includes('/lamy_construction_website') ? '/lamy_construction_website' : '';

  return (
    <div>
      <img src={`${basePath}/assets/constructors.png`} alt="constructors" />
    </div>
  );
}

export default Home;
