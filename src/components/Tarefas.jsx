import { useState, useEffect } from "react"
import "../css/estilo.css"

const Tarefas = () => {

    // Hook useState - usado para criar e controlar o estado das tarefas
    const [tarefas, setTarefas] = useState(() => {
        const salvarTarefas = localStorage.getItem("item-tarefa");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];
    });

    const [campoNome, setCampoNome] = useState("");
    const [campoData, setCampoData] = useState("");
    const [campoDescricao, setCampoDescricao] = useState("");
    const [campoPrioridade, setCampoPrioridade] = useState("Média");

    const [filtro, setFiltro] = useState("Todas");

    // Hook useEffect - executa uma função quando o estado tarefas é alterado
    useEffect(() => {
        localStorage.setItem("item-tarefa", JSON.stringify(tarefas));
    }, [tarefas]);


    const AdicionarTarefa = (e) => {

        e.preventDefault();

        if (!campoNome.trim()) return;

        const novaTarefa = {
            id: Date.now(),
            nome: campoNome,
            data: campoData,
            descricao: campoDescricao,
            prioridade: campoPrioridade,
            concluida: false,
        };

        setTarefas([...tarefas, novaTarefa]);

        setCampoNome("");
        setCampoData("");
        setCampoDescricao("");
        setCampoPrioridade("Média");
    };


    const removerTarefa = (id) => {

        // Método filter - percorre o array e cria um novo array apenas com os elementos que atendem à condição
        const apagarTarefa = tarefas.filter(
            (tarefa) => tarefa.id !== id
        );

        setTarefas(apagarTarefa);
    };


    const concluirTarefa = (id) => {

        // Método map - percorre o array e cria um novo array modificando os elementos necessários
        const tarefasAtualizadas = tarefas.map((tarefa) => {

            if (tarefa.id === id) {
                return {
                    ...tarefa,
                    concluida: !tarefa.concluida
                };
            }

            return tarefa;
        });

        setTarefas(tarefasAtualizadas);
    };


    // Callback - função passada para o método filter para ser executada em cada tarefa
    const tarefasFiltradas = tarefas.filter((tarefa) => {

        if (filtro === "Pendentes") {
            return !tarefa.concluida;
        }

        if (filtro === "Concluídas") {
            return tarefa.concluida;
        }

        return true;
    });


    return (
        <div>

            <h1>Minha Lista de Tarefas</h1>

            <form onSubmit={AdicionarTarefa}>

                <input
                    type="text"
                    value={campoNome}
                    onChange={(e) => setCampoNome(e.target.value)}
                    placeholder="Nome da tarefa"
                />

                <input
                    type="date"
                    value={campoData}
                    onChange={(e) => setCampoData(e.target.value)}
                />

                <input
                    type="text"
                    value={campoDescricao}
                    onChange={(e) => setCampoDescricao(e.target.value)}
                    placeholder="Descrição"
                />

                <select
                    value={campoPrioridade}
                    onChange={(e) => setCampoPrioridade(e.target.value)}
                >
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                </select>

                <button type="submit">
                    Adicionar
                </button>

            </form>

            <div>

                <button onClick={() => setFiltro("Todas")}>
                    Todas
                </button>

                <button onClick={() => setFiltro("Pendentes")}>
                    Pendentes
                </button>

                <button onClick={() => setFiltro("Concluídas")}>
                    Concluídas
                </button>

            </div>

            <ul>

                {/* Callback - função passada para o map, executada para cada tarefa do array */}
                {tarefasFiltradas.map((tarefa) => (

                    <li key={tarefa.id}>

                        <h3>{tarefa.nome}</h3>

                        <p>Data: {tarefa.data}</p>

                        <p>Descrição: {tarefa.descricao}</p>

                        <p>Prioridade: {tarefa.prioridade}</p>

                        <p>
                            Status: {tarefa.concluida
                                ? "Concluída"
                                : "Pendente"
                            }
                        </p>

                        <button
                            onClick={() => concluirTarefa(tarefa.id)}
                        >
                            {tarefa.concluida
                                ? "Desmarcar"
                                : "Concluir"
                            }
                        </button>

                        <button
                            onClick={() => removerTarefa(tarefa.id)}
                        >
                            Excluir
                        </button>

                    </li>

                ))}

            </ul>

            {tarefasFiltradas.length === 0 && (
                <p>Nenhuma Tarefa Encontrada</p>
            )}

        </div>
    );
};

export default Tarefas;