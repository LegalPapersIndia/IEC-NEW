// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Most reliable & instant
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Alternative (smooth but sometimes flickery):
    // window.scrollTo({ top: 0, behavior: "smooth" });

    // Classic (works everywhere):
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}