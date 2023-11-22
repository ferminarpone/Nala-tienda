import "./styles/contactanos.css";
import { Footer, NavBar, InfoContactanos, FormContactanos } from "../index"; 
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";
import { useScroll } from "../../hooks";
import { ContactanosDesktop } from "./ContactanosDesktop";

export const Contactanos = () => {
  const { isOpen, navExtend } = useContext(FavoritoContext);
  useScroll();
  return (
    <>
      <NavBar />
      <div id="contactanosDesktop">
        <ContactanosDesktop/>
      </div>
      <div onClick={navExtend}>
        <div id="contactanosMobile" className={isOpen ? "open" : ""}>
          <h1 className="titleInfo">Contáctanos</h1>
        </div>
        <div id="componentsMobile">
          <FormContactanos />
          <InfoContactanos />
        </div>
        <Footer />
      </div>
    </>
  );
};
