import { Box, Center } from "@chakra-ui/react";
import { MdOutlineLocalAtm, MdAccountBalance } from "react-icons/md";
export const Pagos = () => {
  return (
    <Box id="pagos">
      <Center>
        <h1 className="titlePagos">Métodos De Pago</h1>
      </Center>
      <Center>
        <h2>¿Caulés son los medios de pago?</h2>
      </Center>

      <div className="metodos">
        <div className="efectivo">
          <MdOutlineLocalAtm size="45px" />
          <p>Efectivo </p>
        </div>
        <div className="transferencia">
          <MdAccountBalance size="45px" />
          <p>Transferencia bancaria</p>
        </div>
      </div>
    </Box>
  );
};
