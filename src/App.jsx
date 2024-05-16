import { NavBar } from "./components/NavBar.jsx";
import { SocialMedia } from "./components/SocialMedia.jsx";
import { Footer } from "./components/Footer.jsx";
import { Router } from "./router/Router.jsx";
export const App = () => {
  return (
    <>
      <NavBar />
      <Router />
      <SocialMedia />
      <Footer />
    </>
  );
};
