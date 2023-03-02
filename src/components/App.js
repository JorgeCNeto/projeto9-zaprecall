import Topo from "./Topo";
import Perguntas from "./Perguntas";
import Conclusao from "./Conclusao";


export default function App() {
  
  function revelarPergunta(p){
    console.log(p)
  }
 
 
 
 
  return (
    <div>
    <Topo />
    <Perguntas revelarPergunta={revelarPergunta}/>
    <Conclusao />
    </div>
  );
}
