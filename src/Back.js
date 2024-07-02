import "./Back.css";
import { React, useEffect } from "react";
import { Ma, Mm } from "./Ma";

export default function WSPGallery() {
  useEffect(() => {
    const handleScroll = () => {
      const bg = document.querySelector("#bg");
      const scrollVal = window.scrollY;
      bg.style.backgroundSize = 100 + scrollVal * 5 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='banner'>
      <section></section>
      <div id='bg'></div>
      <Ma />
      <Mm />
    </div>
  );
}
