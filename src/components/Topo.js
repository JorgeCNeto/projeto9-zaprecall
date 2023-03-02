import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Topo(){
    return(
        <Header>
            <Imagem src={logo} />
            <Titulo>ZapRecall</Titulo>
        </Header>
    )
}

const Header = styled.div`
    max-width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Imagem = styled.img`
    width: 52px;
    height: 60px;
`
const Titulo = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;    
    letter-spacing: -0.012em;
    color: black; // #FFFFFF;
    transform: rotate(0.58deg);
`