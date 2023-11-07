import MediaQuery from "react-responsive";
import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";
import "./styles/navBar.css";

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
