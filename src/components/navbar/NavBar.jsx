import MediaQuery from "react-responsive";
import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";

export const NavBar = () => {
  return (
    <>
      <MediaQuery minWidth={800}>
        <NavBarDesktop />
      </MediaQuery>

      <MediaQuery maxWidth={800}>
        <NavBarMobile/>
      </MediaQuery> 
    </>
  );
};
