import { Container, Divider } from "@chakra-ui/react";

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
        <div className="gridCards">
          <div>
            <p>Súper lindo, me encanto.</p>
            <ul>
              <li> Sofia</li>
            </ul>
          </div>
          <div>
            <p>Me encantaron los productos!</p>
            <ul>
              <li>Candelaria</li>
            </ul>
          </div>
          <div>
            <p>Muy lindo todo!!</p>
            <ul>
              <li>Josefina</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
