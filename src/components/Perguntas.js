import styled from "styled-components"
import play from "../assets/seta_play.png"
import vizualizar from "../assets/seta_virar.png"
import cards from "./cards"
import { useEffect, useState } from "react";


export default function Perguntas(){
    return (
        <BlocoPerguntas>
            {cards.map((texto, index) => <Pergunta index={index} questaoTexto={texto.question} answerTexto={texto.answer}/>)}    
        </BlocoPerguntas>
    )
}

function Pergunta ({revelarPergunta, questaoTexto, answerTexto, index}) {
    const [questao, setQuestao] = useState(false)
    const [answer, setAnswer] = useState(false)
    const [corPadrao, setCorPadrao] = useState("#FFFFFF")
    const [botao, setBotao] = useState(play)
    const [flip, setFlip] = useState(false)
     
 
    

    function revelarPergunta(){
      if (questao === false){
        setQuestao(true)
        setCorPadrao("#FFFFD5")
        setBotao(vizualizar)
        setFlip(true)
        
      } else{
        setAnswer(true)         
      }    
    }
    
       
    return (
        <CaixaPergunta key={index} cor={corPadrao} flip={flip}>
            <AjusteTexto>
                <TextoPergunta >{questao ?(answer ? answerTexto : questaoTexto) : `Pergunta ${index + 1}`}</TextoPergunta> 
            </AjusteTexto>
            <AjusteImagem>                
                <ImagemPergunta src={botao} onClick={(event) => revelarPergunta(event)} />                 
            </AjusteImagem>
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
    width: ${(props) => props.flip ? "30px" : "20px"};
    height: 23px;
    background: #FFFFFF;
    margin-right: 20px;
`

const CaixaPergunta = styled.div`
    width: 300px;
    display: flex;
    flex-direction: ${(props) => props.flip ? "column" : "row"};
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.cor};
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
const AjusteTexto = styled.div`
    width: 270px;
    display: flex;
    justify-content: start;
`

const AjusteImagem = styled.div`
    width: 300px;
    display: flex;
    justify-content: end;
    margin-bottom: 6px;
`
