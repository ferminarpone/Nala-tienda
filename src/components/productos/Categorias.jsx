import { Container, Flex, Spacer} from "@chakra-ui/react"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


export const Categorias = () => {
    const catLocation = useLocation();
    // Función par agrear subrayado a las categorias.
    const hrFunction = ()=>{
        switch(catLocation.pathname){
            case "/productos/piercing":
                return "piercing";
                break;
            case "/productos/llaveros":
                return "llaveros";
                break;
            case "/productos/scrunchies":
                return "scrunchies";
                break;
            case "/productos/anillos":
                return "anillos";
                break;
            case "/productos/vinchas":
                return "vinchas";
                break;
            case "/productos/body%20chain":
                return "body chain";
                break;
            case "/productos/collares":
                return "collares";
                break;
            case "/productos/gorras":
            return "gorras";
                break;
        }
}

  return (
    <Container id="categorias" maxWidth="80%">
        <Flex>
            <Link to={`/productos/${'piercing'}`}>
            <h5>Piercing</h5>
            {hrFunction() == "piercing" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/productos/${'llaveros'}`}>
            <h5>Llaveros</h5>
            {hrFunction() == "llaveros" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/productos/${'scrunchies'}`}>
            <h5>Scrunchies</h5>
            {hrFunction() == "scrunchies" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/productos/${'anillos'}`}>
            <h5>Anillos</h5>
            {hrFunction() == "anillos" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/productos/${'vinchas'}`}>
            <h5>Vinchas</h5>
            {hrFunction() == "vinchas" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/productos/${'body chain'}`}>
            <h5>Body Chain</h5>
            {hrFunction() == "body chain" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/productos/${'collares'}`}>
            <h5>Collares</h5>
            {hrFunction() == "collares" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/productos/${'gorras'}`}>
            <h5>Gorras</h5>
            {hrFunction() == "gorras" ? <hr/> : ""}
            </Link>
            <Spacer/>
            <Link to={`/favoritos`}> 
            <FaRegHeart className="heartIcon"/>
            </Link> 
        </Flex>
    </Container>
  )
}
