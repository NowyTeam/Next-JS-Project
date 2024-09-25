"use client";

import Style from "./Header.module.scss";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < lastScrollPos) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      if (currentScrollPos >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <header
      className={`${Style.Header} ${headerScroll ? Style.active : ""} ${
        !isScrollingUp ? Style.hide : ""
      }`}>
      <div
        className={
          headerScroll
            ? `${Style.Header_Wrap} ${Style.active}`
            : `${Style.Header_Wrap}`
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
