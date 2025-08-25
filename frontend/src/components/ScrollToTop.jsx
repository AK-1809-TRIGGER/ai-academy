// import { useEffect } from "react";

// const ScrollToTop = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top-left corner
//   }, []);

//   return null; // No UI needed
// };

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
