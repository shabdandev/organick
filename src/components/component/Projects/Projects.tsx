import { FC } from "react";
import Projects1 from "./ProjectPages/Projects1";
import Projects2 from "./ProjectPages/Projects2";
import Footer from "../../pages/Footer/Footer";

const Projects: FC = () => {
  return (
    <>
      <Projects1 />
      <Projects2 />
      <Footer />
    </>
  );
};

export default Projects;
