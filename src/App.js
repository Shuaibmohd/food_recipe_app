import Pages from "./pages/Pages";
import { Icons } from "./components/Icons";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi'



function App() {


  return (
    <div className="container"> 
    <BrowserRouter>
    <Nav>
      <GiKnifeFork />
      <Logo to={"/"} >Delicious...</Logo>
    </Nav>
        <Search /> 
        <Icons />
        <Pages />
    </BrowserRouter>
    </div>



  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 1rem;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  // justify-content: center;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
