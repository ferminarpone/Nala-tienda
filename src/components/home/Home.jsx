import { NavBar } from "../../components/NavBar";
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
    </>
  );
};
