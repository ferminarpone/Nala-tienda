import {
  Container,
  Divider,
  Center,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import "./footer.css";
import Instagram from "../../assets/footer/Instagram.png";
import Tiktok from "../../assets/footer/tik-tok 1.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container id="footer">
      <Divider className="divider" color="#4a9a91" border="solid 1px" />
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <GridItem colSpan={2}>
          <Center className="heightFooter">
            <Link to={"/informacion"}>
              <h4 className="footerText">Más información</h4>
            </Link>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Center className="heightFooter">
            <Divider
              orientation="vertical"
              className="dividerVertical"
              height="24px"
              border="solid 1px"
              color="#575757"
            />
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Center className="heightFooter">
            <h4 className="footerText">Síguenos</h4>
            <a
              href="https://instagram.com/nala_tiendaa?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <Image src={Instagram} className="igFooter" />
            </a>
            <a href="https://www.tiktok.com/@nalatienda" target="_blank">
              <Image src={Tiktok} className="tiktokFooter" />
            </a>
          </Center>
        </GridItem>
      </Grid>
    </Container>
  );
};
