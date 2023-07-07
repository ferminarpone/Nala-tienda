import { Box, Container, Divider } from "@chakra-ui/react";

export const Terminos = () => {
  return (
    <Container maxWidth="90%">
      <Box h="315px" pt="100px">
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
        <p className="parrafoTerminos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique impedit dolore architecto possimus sapiente neque fuga. Ad qui officiis dolorum eum possimus maxime quis unde illo ab quidem nihil exercitationem rerum consectetur dignissimos eos, doloribus quae consequuntur dolores quia!</p>
      </Box>
    </Container>
  );
};
