import styled from "styled-components"
import play from "../assets/seta_play.png"
import vizualizar from "../assets/seta_virar.png"
import cards from "./cards"
import { useState } from "react";
import errado from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import certo from "../assets/icone_certo.png"


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
    const [fimTexto, setFimTexto] = useState ("none")
    const [fimCor,setFimCor] = useState("#333333")
    const [fimIcone, setFimIcone] = useState("")
    const [fimIconeDisplay, setFimIconeDisplay] = useState("none")
    const [fimBotao, setFimBotao] = useState(false)
 

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

    function deuRuim (){
        setQuestao(false)
        setAnswer(false)
        setCorPadrao("#FFFFFF")
        setBotoesResposta(false) 
        setFimTexto("line-through")
        setFimCor("#FF3030")
        setFimIcone(errado)
        setFimIconeDisplay("block")
        setFimBotao(true)
    }

    function quaseDeu (){
        setQuestao(false)
        setAnswer(false)
        setCorPadrao("#FFFFFF")
        setBotoesResposta(false) 
        setFimTexto("line-through")
        setFimCor("#FF922E")
        setFimIcone(quase)
        setFimIconeDisplay("block")
        setFimBotao(true)
    }

    function deuBom (){        
        setQuestao(false)
        setAnswer(true)
        setCorPadrao("#FFFFFF")
        setBotoesResposta(false) 
        setFimTexto("line-through")
        setFimCor("#2FBE34")
        setFimIcone(certo)
        setFimIconeDisplay("block")
        setFimBotao(true)
    }
   
           
    return (
        <CaixaPergunta key={index} cor={corPadrao} flip={flip} data-test="flashcard">
            <AjusteTexto>
                <TextoPergunta fimCor={fimCor} fimTexto={fimTexto} data-test="flashcard-text">{questao ?(answer ? answerTexto : questaoTexto) : `Pergunta ${index + 1}` }</TextoPergunta> 
                <ImagemFinal src={fimIcone} fimIconeDisplay={fimIconeDisplay} />
            </AjusteTexto>
            <AjusteImagem botoesResposta={botoesResposta}>                             
                <ImagemPergunta botoesResposta={botoesResposta} fimBotao={fimBotao} src={botao} onClick={(event) => revelarPergunta(event)} data-test="play-btn"/>     

                <NaoLembrei botoesResposta={botoesResposta} onClick={(event) => deuRuim(event)}>Não lembrei</NaoLembrei>      
                <QuaseNaoLembrei botoesResposta={botoesResposta} onClick={(event) => quaseDeu(event)}>Quase não lembrei</QuaseNaoLembrei>   
                <Zap botoesResposta={botoesResposta} onClick={(event) => deuBom(event)}>Zap!</Zap>            
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
    color: ${(props) => props.fimCor};
    text-decoration: ${(props) => props.fimTexto};
    margin: 23px auto 23px 20px;
   
`

const ImagemFinal = styled.img`
    width: 23px;
    height: 23px;
    margin-top: 23px;
    display: ${(props) => props.fimIconeDisplay};
`

const ImagemPergunta = styled.img`
    width: ${(props) => props.flip ? "30px" : "20px"};
    height: 23px;
    background: #FFFFFF;
    margin-right: 20px;
    display: ${(props) => props.botoesResposta ? "none" : (props.fimBotao ? "none" : "inline")};
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
    display: ${(props) => props.botoesResposta ? (props.fimBotao ? "none" : "inline") : "none"} !important;
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
    display: ${(props) => props.botoesResposta ? (props.fimBotao ? "none" : "inline") : "none"} !important;
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
    display: ${(props) => props.botoesResposta ? (props.fimBotao ? "none" : "inline") : "none"} !important;
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