import { Container, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Item } from "./Item";

export const ItemList = ({ product, categoria }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="90%" mt="30px">
        {/* Condicional para snipper */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6}> 
            {product.map((item) => (
              <Item
                key={item.id}
                nombre={item.nombre}
                categoria={item.categoria}
                img={item.img}
                id={item.id}
              />
            ))}
        </Grid>
      </Container>
    </>
  );
};
