import { Footer } from "../Footer";
import { NavBar } from "../navbar/NavBar";
import { Destacados } from "./Destacados";
import { Opiniones } from "./Opiniones";

export const Home = () => {
  return (
    <>
      <div className="homeImg">
      <NavBar/> 
      </div>
      <Destacados />
      <Opiniones />
      <Footer/>
    </>
  );
};
