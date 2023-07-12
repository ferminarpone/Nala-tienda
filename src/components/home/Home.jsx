import { NavBar } from "../../components/NavBar";
import { Footer } from "../Footer";
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
