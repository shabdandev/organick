import { FC } from "react";
import Home from "../components/component/Home/Home";
import About from "../components/component/About/About";
import Shop from "../components/component/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/pages/Admin/Admin";
import Basket from "../components/pages/Basket/Basket";
import Pages from "../components/component/Pages/Pages";
import Projects from "../components/component/Projects/Projects";
import News from "../components/component/News/News";

const MainRoutes: FC = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/admin", element: <Admin />, id: 4 },
    { link: "/about", element: <About />, id: 2 },
    { link: "/shop", element: <Shop />, id: 3 },
    { link: "/bas", element: <Basket />, id: 5 },
    { link: "/pages", element: <Pages />, id: 6 },
    { link: "/projects", element: <Projects />, id: 7 },
    { link: "/news", element: <News />, id: 8 },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
