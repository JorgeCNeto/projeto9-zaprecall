import styled from "styled-components"
import play from "../assets/seta_play.png"

const numeroPerguntas = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Perguntas(props){
    return (
        <BlocoPerguntas>
            {numeroPerguntas.map((pergunta) => <Pergunta num={pergunta} revelarPergunta={props.revelarPergunta}/>)}    
        </BlocoPerguntas>
    )
}

function Pergunta ({num, revelarPergunta}) {
      
    return (
        <CaixaPergunta>
            <TextoPergunta>Pergunta {num}</TextoPergunta>
            <ImagemPergunta src={play} onClick={(event) => revelarPergunta(event)}/>
        </CaixaPergunta>
    )
}

const TextoPergunta = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin: 23px auto 23px 20px;
`

const ImagemPergunta = styled.img`
    width: 20px;
    height: 23px;
    background: #FFFFFF;
    margin-right: 20px;
`

const CaixaPergunta = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    
    
`

const BlocoPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`