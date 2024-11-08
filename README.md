<div align="center">
  <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="Node logo" width="100""/>
  <h1>Node Fundamentals</h1>
</div>

Este projeto foi desenvolvido no primeiro módulo de Node.js do curso Ignite da Rocketseat, com foco na criação de um servidor HTTP utilizando apenas módulos nativos do Node.js. Este projeto aprofunda conceitos fundamentais do protocolo HTTP e explora o uso de Streams.

## 💡 Sobre o Projeto

O projeto implementa uma API RESTful básica para gerenciamento de usuários, utilizando apenas módulos nativos do Node.js, sem dependências externas. Os dados são persistidos em um arquivo JSON local, e todas as operações são realizadas através de streams para melhor performance e gestão de memória.

## 🚀 Funcionalidades

- CRUD completo de usuários
- Busca de usuários com filtros
- Persistência de dados em arquivo JSON
- Processamento de corpo das requisições usando streams
- Parsing de query parameters
- Roteamento dinâmico com suporte a parâmetros de URL

## 🛠 Tecnologias

- Node.js
- Módulos nativos:
  - `http`: Para criar o servidor
  - `crypto`: Para geração de IDs únicos
  - `fs/promises`: Para manipulação de arquivos

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── db/
│   │   └── database.js         # Classe para manipulação do banco de dados
│   ├── middlewares/
│   │   └── json.js            # Middleware para processamento de JSON
│   ├── routes/
│   │   └── routes.js          # Definição das rotas
│   ├── utils/
│   │   ├── build-route-path.js # Utilitário para construção de rotas
│   │   └── extract-query-params.js
│   └── server.js              # Arquivo principal do servidor
└── db.json                    # Arquivo de banco de dados
```

## 📌 Endpoints

### Usuários

- `GET /users`: Lista todos os usuários
  - Query params: `search` (opcional) para filtrar por nome ou email
- `POST /users`: Cria um novo usuário
  - Body: `{ "name": "string", "email": "string" }`
- `PUT /users/:id`: Atualiza um usuário
  - Body: `{ "name": "string", "email": "string" }`
- `DELETE /users/:id`: Remove um usuário

## 🚀 Como Executar

1. Certifique-se de ter o Node.js e o NPM instalados:
```bash
node -v
npm -v
```
2. Clone o repositório
```bash
git clone git@github.com:gbmoraes-dev/node-fundamentals.git
```
3. Entre na pasta:
```bash
cd node-fundamentals
```
4. Por fim, execute o servidor:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`

## 📝 Conceitos Abordados

- Streams no Node.js
- Criação de servidor HTTP sem frameworks
- Roteamento manual de requisições
- Processamento de corpo de requisições com streams
- Middlewares
- Persistência de dados em arquivo
- Padrões de projeto e organização de código
- RegExp para tratamento de rotas

## 🎯 Objetivos de Aprendizado

- Entender o funcionamento interno de um servidor HTTP
- Trabalhar com streams para processamento eficiente de dados
- Implementar roteamento sem uso de frameworks
- Manipular requisições e respostas HTTP
- Persistir dados em arquivo usando streams
- Trabalhar com módulos nativos do Node.js
