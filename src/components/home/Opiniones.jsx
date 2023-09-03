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
    <Container id="opiniones">
      <div className="divTitle">
        <h2 className="title">OPINIONES</h2>
        <Divider
          orientation="horizontal"
          color="#4A9A91"
          border="solid 1px"
          className="dividerOpiniones"
        />
      </div>
      <div id="cards">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, quia nisi architecto quam delectus reprehenderit?
          </p>
          <ul>
            <li> Maria A.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            sit?
          </p>
          <ul>
            <li>Sofia R.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            sit?
          </p>
          <ul>
            <li>Juan S.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            sit?
          </p>
          <ul>
            <li>Luisa J.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
