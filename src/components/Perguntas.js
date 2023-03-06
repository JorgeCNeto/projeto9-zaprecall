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
    const [botoesResposta, setBotoesResposta] = useState(false)
     
 
    useEffect(() => {
        
        console.log(botoesResposta)

    })

    function revelarPergunta(){
      if (questao === false){
        setQuestao(true)
        setCorPadrao("#FFFFD5")
        setBotao(vizualizar)
        setFlip(true)
        
      } else{
        setAnswer(true)     
        setBotoesResposta(true)    
      }    
    }
   
           
    return (
        <CaixaPergunta key={index} cor={corPadrao} flip={flip} >
            <AjusteTexto>
                <TextoPergunta >{questao ?(answer ? answerTexto : questaoTexto) : `Pergunta ${index + 1}`}</TextoPergunta> 
            </AjusteTexto>
            <AjusteImagem botoesResposta={botoesResposta}>                             
                <ImagemPergunta botoesResposta={botoesResposta} src={botao} onClick={(event) => revelarPergunta(event)} />     

                <NaoLembrei botoesResposta={botoesResposta} onCLick>Não lembrei</NaoLembrei>      
                <QuaseNaoLembrei botoesResposta={botoesResposta}>Quase não lembrei</QuaseNaoLembrei>   
                <Zap botoesResposta={botoesResposta}>Zap!</Zap>              
            </AjusteImagem>
        </CaixaPergunta>
    )
}


////////////////////////////////////////// fim do código e início do CSS


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
    display: ${(props) => props.botoesResposta ? "none" : "inline"};
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
    justify-content: ${(props) => props.botoesResposta ? "space-evenly" : "end"};
    margin-bottom: 6px;
`

const NaoLembrei = styled.button`
    display: ${(props) => props.botoesResposta ? "block" : "none"} !important;
    width: 85px;
    height: 37px;
    background: #FF3030;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;    
    display: flex;
    align-items: center;
    color: #FFFFFF;
`
const QuaseNaoLembrei = styled.button`
    display: ${(props) => props.botoesResposta ? "block" : "none"} !important;
    width: 85px;
    height: 37px;
    background: #FF922E;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`


const Zap = styled.button`
    display: ${(props) => props.botoesResposta ? "block" : "none"} !important;
    width: 85px;
    height: 37px;
    background: #2FBE34;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`