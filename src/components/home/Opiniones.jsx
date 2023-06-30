import {
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import OpinionesImg from "../../assets/home/Opiniones.png";

export const Opiniones = () => {
  return (
    <Container maxWidth="90%" mt="90px">
      <div className="divTitle">
        <h2 className="title">OPINIONES</h2>
        <Divider
          orientation="horizontal"
          color="#4A9A91"
          border="solid 1px"
          width="120px"
          className="dividerOpiniones"
        />
      </div>
      <Center>
        <Image src={OpinionesImg} alt="Opiniones" mt="40px" />
      </Center>
    </Container>
  );
};
