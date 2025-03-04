"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LayoutClient = () => {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById("nav");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (nav && mobileMenu) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          nav.classList.add("bg-black/80", "backdrop-blur-md");
          mobileMenu.classList.add("bg-black/80", "backdrop-blur-md");
        } else {
          nav.classList.remove("bg-black/80", "backdrop-blur-md");
          mobileMenu.classList.remove("bg-black/80", "backdrop-blur-md");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return <></>;
};

export default LayoutClient;
