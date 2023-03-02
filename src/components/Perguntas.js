import styled from "styled-components"
import play from "../assets/seta_play.png"

const numeroPerguntas = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Perguntas(props){
    return (
        <blocoPerguntas>
            {numeroPerguntas.map((pergunta) => <Pergunta num={pergunta} revelarPergunta={props.revelarPergunta}/>)}    
        </blocoPerguntas>
    )
}

function Pergunta ({num, revelarPergunta}) {
      
    return (
        <caixaPergunta>
            <textoPergunta>Pergunta {num}</textoPergunta>
            <imagemPergunta src={play} onClick={(event) => revelarPergunta(event)}/>
        </caixaPergunta>
    )
}

const textoPergunta = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
`

const imagemPergunta = styled.img`
    width: 20px;
    height: 23px;
    background: #333333;
`

const caixaPergunta = styled.div`
    width: 80%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: red// #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    
`

const blocoPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: red;
`