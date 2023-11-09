import "./styles/navBar.css";
import MediaQuery from "react-responsive";
import { NavBarDesktop, NavBarMobile } from "../index";

export const NavBar = () => {
  return (
    <>
      <MediaQuery minWidth={501}>
        <NavBarDesktop />
      </MediaQuery>
      <MediaQuery maxWidth={501}>
        <NavBarMobile />
      </MediaQuery>
    </>
  );
};
