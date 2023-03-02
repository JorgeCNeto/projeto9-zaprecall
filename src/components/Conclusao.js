import styled from "styled-components"

export default function Conclusao(){
    return (
        <BarraBaixo>
            <Concluidos>0/4 CONCLUÍDOS</Concluidos>
        </BarraBaixo>
    )
}

const BarraBaixo = styled.div`
    width: 375px;
    height: 70px;        
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    left: 0;
    bottom:0;
`

const Concluidos = styled.h2`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;   
    color: #333333;

`