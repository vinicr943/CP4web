import { useState, useEffect } from "react"
import "../css/estilo.css"


const Tarefas = () => {

    //Hook - useState - Manipula o estado da variavel
    const [tarefas,setTarefas]=useState(()=>{
        const salvarTarefas = localStorage.getItem("item-tarefa");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];
    });


    const [campo,setCampo]=useState("");
    //HOOK - useEffect - realiza o efeito colateral, nessse exemplo vai mostrar a tarefa adicionada em tempo real
    useEffect(()=>{
        localStorage.setItem("item-tarefa",JSON.stringify(tarefas))
    },[tarefas])

    // função adicionar tarefa
    const AdicionarTarefa =(e)=>{
      // previne que a pagina recarregue automaticamente
      e.preventDefault();
      // valida se o campo estiver vazio
      if(!campo.trim()) return;

      // novo objeto
      const novaTarefa={
        id: Date.now(),
        texto:campo,
      }
      setTarefas([...tarefas,novaTarefa]);
      setCampo('');
    }

    //função remover tarefa
    const removertarefa=(id)=>{
      // verifica se o id da tarefa atual é diferente do id que deseja apagar
      // se o id for iguaç(tarefa que deseja apagar) a condiçõa retorna falso e o item é excluido
      const apagarTarefa = tarefas.filter((tarefa)=> tarefa.id !== id);
      setTarefas(apagarTarefa);

    }


  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <form onSubmit={AdicionarTarefa}>
        <input 
        type="text"
        value={campo}
        onChange={(e)=>setCampo(e.target.value)}
        placeholder="Digite sua Tarefa" 
        
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa)=>(
          <li key={tarefa.id} >
            <span>{tarefa.texto}</span>
            <button onClick={() => removertarefa(tarefa.id)} type="submit">Excluir</button>

          </li>
        ))}

      </ul >
      {/* compara, se não tiver tarefas deixa a mensagem "nenhuma tarefa salva" */}
      {tarefas.length === 0 && <p>Nenhuma Tarefa Salva</p>}

    </div>
  )
}

export default Tarefas
