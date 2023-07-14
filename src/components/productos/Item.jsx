import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Item = ({ nombre, categoria, img, id }) => {
  return (
    <GridItem id="cardItem">
      <Center>
        <Box w="350px">
          <Image src={img} alt={nombre} borderRadius="lg"/>
          <Stack mt="6" lineHeight="normal">
            <h4>Shein</h4>
            <h5>{nombre}</h5>
            <p >
              $ 1.000
            </p>
          </Stack>
          <Flex justifyContent="space-between">
            <Button variant="solid" className="buttonCard">
              LO QUIERO
            </Button>
            <Button variant="solid" className="buttonCardHeart">
              <FaRegHeart />
            </Button>
          </Flex>
        </Box>
      </Center>
    </GridItem>
  );
};
