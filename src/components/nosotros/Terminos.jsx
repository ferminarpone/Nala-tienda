import { Box, Container, Divider } from "@chakra-ui/react";

export const Terminos = () => {
  return (
    <Container maxWidth="85%">
      <Box h="315px" pt="60px">
        <div className="divTitle">
          <h2 className="title">TÉRMINOS Y CONDICIONES</h2>
          <Divider
            orientation="horizontal"
            color="#4A9A91"
            border="solid 1px"
            width="180px"
            className="dividerTerminos"
          />
        </div>
        <p className="parrafoTerminos">
          Al realizar una compra en Nala tienda, la orden se tomara una vez
          abonada el producto y tendrá hasta 3 días de demora para recibir su
          producto. Una vez seleccionado el producto pero no abonado, habrá 2
          días de tolerancia como reservado, sino será vendido a otra personas.
          El cambio o devolución de un producto va a variar según sea el mismo,
          ya que no todos entran en la condición de cambio y devolución.{" "}
        </p>
      </Box>
    </Container>
  );
};
