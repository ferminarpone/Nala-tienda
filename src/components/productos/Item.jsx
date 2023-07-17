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
import { Link } from "react-router-dom";

export const Item = ({ nombre, categoria, img, id }) => {
  return (
    <GridItem id="cardItem">
      <Center>
        <Box w="auto">
          <Image
            src={img}
            alt={nombre}
            borderRadius="lg"
            w="330px"
            h="280px"
            objectFit="cover"
          />
          <Stack mt="6" lineHeight="normal">
            <h4>Shein</h4>
            <h5>{nombre}</h5>
            <p>$ 1.000</p>
          </Stack>
          <Flex justifyContent="space-between">
            <Box w="100%">
              <Link to={`/producto/${id}`}>
                <Button variant="solid" className="buttonCard">
                  LO QUIERO
                </Button>
              </Link>
            </Box>
            <Box>
              <Link>
                <Button variant="solid" className="buttonCardHeart">
                  <FaRegHeart />
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Center>
    </GridItem>
  );
};
