import { Grid, GridItem, Image, Button, Box, Center } from "@chakra-ui/react";
import title from "../../assets/contactanos/Contactanos.png";
import tel from "../../assets/contactanos/call.png";
import mail from "../../assets/contactanos/email.png";
import ig from "../../assets/contactanos/Instagram.png";

export const InfoContactanos = () => {
  return (
    <Box  id="infoContactanos">
      <Image src={title} alt="titulo" w="90%"  mb="50px"/>

      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={1}
       
      >
        <GridItem colSpan={1} mt="10px">
          <Image src={tel} alt="icono teléfono" w="45%"/>
        </GridItem>
        <GridItem colSpan={3} mt="15px">
          <p>+54 9 351 390-2114</p>
        </GridItem>
        <GridItem colSpan={1} mt="10px">
          <Image src={mail} alt="icono e-mail" w="45%"/>
        </GridItem>
        <GridItem colSpan={3} mt="15px">
          <p>nala_tienda@gmail.com</p>
        </GridItem>
        <GridItem colSpan={1} mt="10px">
          <Image src={ig} alt="icono instagram" w="45%"/>
        </GridItem>
        <GridItem colSpan={3} mt="15px"> 
          <p>@nala_tiendaa </p>
        </GridItem>
      </Grid>
      <Center>
      <button>
        ENVIAR WHATSAPP
      </button>
      </Center>
    </Box>
  );
};
