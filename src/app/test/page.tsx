"use client";
import { useEffect, useState } from "react";

const page = () => {
  useEffect(() => {
    console.log("q");
  }, []);
  const handleClick = (e: any) => {
    console.log("Button clicked:", e.target.dataset.key);
  };
  return (
    <div
      className="w-full h-screen bg-blue-500 grid palce-content-center"
      onClick={handleClick}
    >
      <div className="">
        page
        <button data-key="dep1">Click 1</button>
        <button data-key="dep2">Click 2</button>
        <button data-key="dep3">Click 3</button>
        <button data-key="dep4">Click 4</button>
        <button data-key="dep5">Click 5</button>
        <a href="#" data-key="link">
          LINK
        </a>
      </div>
    </div>
  );
};

export default page;
