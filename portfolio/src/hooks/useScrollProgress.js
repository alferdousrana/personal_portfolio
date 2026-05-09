import { useEffect, useState } from "react";

export function useScrollProgress(footerRef) {
  const [progress, setProgress] = useState(0);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.round((scrollTop / scrollHeight) * 100);
      setProgress(pct);

      if (footerRef?.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        setAtFooter(footerTop <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef]);

  return { progress, atFooter };
}