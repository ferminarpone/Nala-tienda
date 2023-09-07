import {
  Grid,
  GridItem,
  Image,
  Box,
  Center,
  Container,
} from "@chakra-ui/react";
import title from "../../assets/contactanos/Contactanos.png";
import tel from "../../assets/contactanos/call.png";
import mail from "../../assets/contactanos/email.png";
import ig from "../../assets/contactanos/Instagram.png";
import { useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";

export const InfoContactanos = () => {
  const {isOpen} = useContext(FavoritoContext);
  const sendWsp = () => {
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0A%0AConsulta%3A%0A`;
    window.open(url, "_blank");
  };
  return (
   <Container className="containerInfo" maxWidth="90%"> 
      <Box id="infoContactanos" className={isOpen? "openInfo" : ""}>
        <Image src={title} className="tituloInfo" alt="titulo" w="70%" mb="40px" />
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={1}
          id="gridInfo"
        >
          <GridItem colSpan={1} mt="10px">
            <Image src={tel} alt="icono teléfono"/>
          </GridItem>
          <GridItem colSpan={3} mt="15px" ml="-10%">
            <p>+54 9 351 390-2114</p>
          </GridItem>
          <GridItem colSpan={1} mt="10px">
            <Image src={mail} alt="icono e-mail"/>
          </GridItem>
          <GridItem colSpan={3} mt="15px" ml="-10%">
            <p>nala_tienda@gmail.com</p>
          </GridItem>
          <GridItem colSpan={1} mt="10px">
            <Image src={ig} alt="icono instagram"/>
          </GridItem>
          <GridItem colSpan={3} mt="15px" ml="-10%">
            <p>@nala_tiendaa </p>
          </GridItem>
        </Grid>
        <Center width="100%">
          <button className="enviarWsp" onClick={() => sendWsp()}>ENVIAR WHATSAPP</button>
        </Center>
      </Box>
    </Container> 
  );
};
