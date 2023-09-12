import {
  Container,
  Divider,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
/* import Scrunchie from "../../assets/Scrunchie.png";
import Anillos from "../../assets/Anillos.png";
import Llavero from "../../assets/Llavero osos.png"; */
import DestacadosImg from "../../assets/home/Destacados.png";

import BrochePastel from "../../assets/home/BrochePastel.png";
import BrocheTransparente from "../../assets/home/BrocheTransparente.png";
import Strap from "../../assets/home/Strap.png";
import StrapNegro from "../../assets/home/StrapNegro.png";

export const Destacados = () => {
  return (
    <Container maxWidth="90%" mt="90px">
      <div className="divTitle">
        <h2 className="title">DESTACADOS</h2>
        <Divider
          orientation="horizontal"
          color="#4A9A91"
          border="solid 1px"
          className="dividerDestacados"
        />
      </div>
      <div id="destacados">

        <img src={BrocheTransparente} alt="BrocheTransparente" />
        <img src={Strap} alt="Strap" />
        <img src={BrochePastel} alt="BrochePastel" />
        <img className="sinMargin" src={StrapNegro} alt="StrapNegro" />

      </div>
     {/*  <Center>
        <Image src={DestacadosImg} alt="Destacados" className="destacadoImg"  />
      </Center>
 */}
      {/* Para utilizar todas las imagenes por separado....

      <Grid mt="60px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={2}>
        <GridItem rowSpan={1} colSpan={3} bg='tomato' > 
          <Image src={Scrunchie} alt="Scrunchie"/>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg='tomato' h="420px">
          <Image src={Anillos}  h='90%'  w='100%'/>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} >
          <Image src={Llavero}/>
        </GridItem>
      </Grid> */}
    </Container>
  );
};
