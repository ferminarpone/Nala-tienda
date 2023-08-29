import MediaQuery from "react-responsive";
import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";

export const NavBar = () => {
  return (
    <>
      <MediaQuery minWidth={900}>
        <NavBarDesktop />
      </MediaQuery>

      <MediaQuery maxWidth={900}>
        <NavBarMobile/>
      </MediaQuery> 
    </>
  );
};
