import {
  Container,
  Divider,
  Center,
  Text,
  Grid,
  GridItem,
  Image
} from "@chakra-ui/react";
import Instagram from '../assets/Instagram.png';
import Tiktok from '../assets/tik-tok 1.png';

export const Footer = () => {
  return (
    <Container maxW="89%">
      <Divider orientation="horizontal" color="#4A9A91" border="solid 1px" />
      <Grid templateColumns='repeat(5, 1fr)' gap={1}> 
        <GridItem colSpan={2}>
          <Center height="80px">
            <Text>Más información</Text>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Center height="80px">
            <Divider
              orientation="vertical"
              h="24px"
              border="solid 1px"
              color="#575757"
            />
          </Center>
        </GridItem>
        <GridItem colSpan={2}> 
        <Center height="80px">          
          <Text>Síguenos</Text>
          <Image src={Instagram} ml='30px' boxSize="40px"/>
          <Image src={Tiktok} ml="5px" boxSize="30px" />
        </Center>
        </GridItem>
      </Grid>
    </Container>
  );
};
