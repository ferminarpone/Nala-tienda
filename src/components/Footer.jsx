import {
  Container,
  Divider,
  Center,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Instagram from "../assets/Instagram.png";
import Tiktok from "../assets/tik-tok 1.png";

export const Footer = () => {
  return (
    <Container maxW="89%" mt="100px">
      <Divider orientation="horizontal" color="#4A9A91" border="solid 1px" />
      <Grid templateColumns="repeat(5, 1fr)" gap={1} >
        <GridItem colSpan={2}>
          <Center height="120px">
            <h4 className="footerText">Más información</h4>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Center height="120px">
            <Divider
              orientation="vertical"
              h="24px"
              border="solid 1px"
              color="#575757"
            />
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Center height="120px">
            <h4 className="footerText">Síguenos</h4>
            <Image src={Instagram} ml="30px" boxSize="40px" />
            <Image src={Tiktok} ml="5px" boxSize="30px" />
          </Center>
        </GridItem>
      </Grid>
    </Container>
  );
};
