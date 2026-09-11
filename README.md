<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Integrantes

- RM 574125 - Alyson Gabriel Aquino Souto
- RM 569177 - Guilherme Pimentel Vilela
- RM 570703 - Vinícius Campestrini Rodado
- RM 569744 - Vinícius Shoiti Rios Honda

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- localStorage
- Git/GitHub

## Repositório

LINK

## 🌐 Deploy
LINK -->

# 📝 Lista de Tarefas — React

Aplicação web de gerenciamento de tarefas desenvolvida em **React**, como parte das atividades acadêmicas da **FIAP**.

O projeto permite adicionar, visualizar, concluir e excluir tarefas, utilizando o `localStorage` do navegador para manter os dados salvos mesmo após o fechamento ou atualização da página.

---

## 🎯 Sobre o projeto

O objetivo do projeto é desenvolver uma aplicação utilizando **React** e seus principais conceitos, como componentes, estados e eventos, além de trabalhar com armazenamento de dados no navegador.

A aplicação foi desenvolvida com foco em uma interface simples e funcional para organização de tarefas.

Entre as funcionalidades estão:

- ➕ Adicionar novas tarefas;
- 📋 Listar tarefas cadastradas;
- ✅ Marcar tarefas como concluídas;
- 🗑️ Remover tarefas;
- 💾 Persistir tarefas utilizando `localStorage`;
- 📱 Interface adaptável para diferentes tamanhos de tela;
- 🎨 Estilização utilizando CSS e Tailwind CSS.

---

## 🛠️ Tecnologias utilizadas

- **React** — desenvolvimento da interface e componentes;
- **Vite** — ambiente de desenvolvimento e build;
- **JavaScript** — lógica da aplicação;
- **Tailwind CSS** — estilização e criação da interface;
- **CSS** — estilos complementares;
- **localStorage** — armazenamento das tarefas no navegador;
- **Git** — controle de versão;
- **GitHub** — hospedagem do código-fonte.

---

## 📂 Estrutura do projeto

```text
CP4web/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── Tarefas.jsx
│   │
│   ├── css/
│   │   └── estilo.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md