"use client";

import Style from "./Header.module.scss";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={
        headerScroll ? `${Style.Header} ${Style.active}` : `${Style.Header}`
      }>
      <div className={
        headerScroll ? `${Style.Header_Wrap} ${Style.active}` : `${Style.Header_Wrap}`
      }>
        <div className={Style.Logo}>
          <h1>
            N<span>w</span>
          </h1>
        </div>
        <div className={Style.Links}>
          <Link className={Style.link} href="/">
            Home
          </Link>
          <Link className={Style.link} href="/">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
