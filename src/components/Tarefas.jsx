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
        <div className="max-w-md mx-auto mt-10 bg-black rounded-2xl shadow-2xl border border-gray-700 p-6">

            {/* TÍTULO */}
            <h1 className="text-2xl font-bold text-white mb-6 text-center">
                Minha Lista de Tarefas
            </h1>

            {/* FORMULÁRIO */}
            <form
                onSubmit={AdicionarTarefa}
                className="space-y-3 mb-6"
            >

                {/* NOME */}
                <input
                    type="text"
                    value={campoNome}
                    onChange={(e) => setCampoNome(e.target.value)}
                    placeholder="Nome da tarefa"
                    className="w-full px-4 py-2 border border-gray-700 hover:border-gray-400 bg-gray-900 hover:bg-gray-800 rounded-2xl text-white placeholder-gray-500 transition-colors outline-none"
                />

                {/* DATA */}
                <input
                    type="date"
                    value={campoData}
                    onChange={(e) => setCampoData(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-700 hover:border-gray-400 bg-gray-900 hover:bg-gray-800 rounded-2xl text-white transition-colors outline-none"
                />

                {/* DESCRIÇÃO */}
                <input
                    type="text"
                    value={campoDescricao}
                    onChange={(e) => setCampoDescricao(e.target.value)}
                    placeholder="Descrição"
                    className="w-full px-4 py-2 border border-gray-700 hover:border-gray-400 bg-gray-900 hover:bg-gray-800 rounded-2xl text-white placeholder-gray-500 transition-colors outline-none"
                />


                {/* PRIORIDADE */}
                <select
                    value={campoPrioridade}
                    onChange={(e) => setCampoPrioridade(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-700 hover:border-gray-400 bg-gray-900 hover:bg-gray-800 rounded-2xl text-white transition-colors outline-none"
                >
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                </select>


                {/* BOTÃO */}
                <button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-300 text-black font-semibold px-5 py-2 rounded-2xl transition-colors cursor-pointer"
                >
                    Adicionar
                </button>
            </form>


            {/* FILTROS */}
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setFiltro("Todas")}
                    className="bg-gray-800 hover:bg-gray-600 transition-colors text-white px-3 py-2 rounded-xl border border-gray-700"
                >
                    Todas
                </button>

                <button
                    onClick={() => setFiltro("Pendentes")}
                    className="bg-gray-800 hover:bg-gray-600 transition-colors text-white px-3 py-2 rounded-xl border border-gray-700"
                >
                    Pendentes
                </button>

                <button
                    onClick={() => setFiltro("Concluídas")}
                    className="bg-gray-800 hover:bg-gray-600 transition-colors text-white px-3 py-2 rounded-xl border border-gray-700"
                >
                    Concluídas
                </button>
            </div>


            {/* LISTA */}
            <ul className="space-y-3">
                {/* Callback - função passada para o map,
                    executada para cada tarefa do array */}
                {tarefasFiltradas.map((tarefa) => (
                    <li
                        key={tarefa.id}
                        className="p-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-2xl shadow-sm  transition-colors" 
                    >

                        {/* NOME */}
                        <h3 className="font-bold text-white">
                            {tarefa.nome}
                        </h3>

                        {/* DATA */}
                        <p className="text-sm text-gray-400">
                            Data: {tarefa.data}
                        </p>

                        {/* DESCRIÇÃO */}
                        <p className="mt-2 text-white">
                            Descrição: {tarefa.descricao}
                        </p>

                        {/* PRIORIDADE */}
                        <p className="text-sm mt-2 text-gray-400">
                            Prioridade: {tarefa.prioridade}
                        </p>

                        {/* STATUS */}
                        <p className="text-sm mt-2 text-cyan-300">
                            Status:{" "}
                            <span className="text-gray-200 font-medium">
                                {tarefa.concluida ? "Concluída" : "Pendente"}
                            </span>
                        </p>

                        {/* BOTÕES */}
                        <div className="flex gap-2 mt-3">

                            {/* CONCLUIR */}
                            <button
                                onClick={() => concluirTarefa(tarefa.id)}
                                className="bg-green-700 hover:bg-green-500 transition-colors text-white px-3 py-2 rounded-xl"
                            >
                                {tarefa.concluida
                                    ? "Desmarcar"
                                    : "Concluir"
                                }
                            </button>

                            {/* EXCLUIR */}
                            <button
                                onClick={() => removerTarefa(tarefa.id)}
                                className="bg-red-700 hover:bg-red-500 transition-colors text-white px-3 py-2 rounded-xl"
                            >
                                Excluir
                            </button>
                        </div>
                    </li>

                ))}

            </ul>

            {/* MENSAGEM QUANDO NÃO EXISTEM TAREFAS */}
            {tarefasFiltradas.length === 0 && (
                <p className="text-center mt-5 text-gray-500">
                    Nenhuma Tarefa Encontrada
                </p>
            )}
        </div>
    )
}

export default Tarefas