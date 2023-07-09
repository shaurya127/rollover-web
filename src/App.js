import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import DesktopWidth1920px from "./pages/DesktopWidth1920px";
import AndroidLarge1 from "./pages/Androidscreen";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Check if the device is mobile
  const isMobile = window.innerWidth <= 767;

  return (
    <Routes>
      {!isMobile &&  <Route path="/" element={<DesktopWidth1920px />} />}
     
      {isMobile && <Route path="/" element={<AndroidLarge1 />} />}
    </Routes>
  );
}

export default App;
