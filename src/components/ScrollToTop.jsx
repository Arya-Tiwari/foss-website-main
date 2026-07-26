import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Mounted once inside <BrowserRouter>. Scrolls to the top of the page
// on every route change, so clicking any <Link> (Explore more, nav links,
// footer links, etc.) always opens the new page from the top.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}