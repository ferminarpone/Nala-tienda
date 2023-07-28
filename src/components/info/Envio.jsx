import { Box, Center, Divider, Image } from "@chakra-ui/react";
import Envios from "../../assets/informacion/envio.png";
import {
  MdPedalBike,
  MdOutlineMoped,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { BsInstagram} from "react-icons/bs";
import { FaTiktok} from "react-icons/fa";

export const Envio = () => {
  return (
    <>
      <Box id="envio">
        <Center>
          <img src={Envios} alt="Métodos de envío" />
        </Center>
        <Center>
          <h2>Modalidades de entrega dependiendo la zona</h2>
        </Center>

        <div className="envios">
          <div className="bicicleta">
            <MdPedalBike size="45px" />
            <p>Cadete en bicicleta</p>
          </div>
          <div className="moto">
            <MdOutlineMoped size="45px" />
            <p>Cadete en moto</p>
          </div>
        </div>
        <Center>
          <div className="correo">
            <MdOutlineLocalShipping size="45px" />
            <p>Enviós por correo</p>
          </div>
        </Center>
        <Box>
          <Center>
            <Divider width="80%" border="white solid 1px" mt="80px" />
          </Center>
          <Center height="100px">
            <h4 className="footerInf">Síguenos</h4>
            <a
              href="https://instagram.com/nala_tiendaa?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <BsInstagram size="30px" />
            </a>
            <a href="https://www.tiktok.com/@nalatienda" target="_blank">
            <FaTiktok size="30px"/>
            </a>
          </Center>
        </Box>
      </Box>
    </>
  );
};
