# **Gerenciamento de Tarefas** 

Este projeto é um sistema simples de gerenciamento de tarefas, permitindo que os usuários possam criar, listar e excluir tarefas. O objetivo deste projeto é fornecer uma plataforma fácil de usar para gerenciamento de atividades diárias.  

Funcionalidades  

Autenticação de Usuário: Os usuários podem se cadastrar e fazer login para acessar o sistema.  
Criação de Tarefas: O sistema permite que os usuários criem novas tarefas.  
Exclusão de Tarefas: Tarefas podem ser excluídas a qualquer momento.  
Exibição de Tarefas: Todas as tarefas criadas por um usuário são exibidas na interface principal. 

Tecnologias Usadas  

Frontend: React.js  
Backend: Node.js com Express  
Banco de Dados: MongoDB (ou o banco de dados que você estiver usando)  
Autenticação: JWT (JSON Web Tokens)  

Como Rodar o Projeto  

Requisitos  

Node.js instalado na sua máquina. 

Configuração do Backend  

Clone o repositório do projeto.  
git clone <url-do-repositório>  
Navegue até a pasta do backend e instale as dependências.  
cd backend  
npm install  
Crie um arquivo .env na raiz do projeto e defina a variável de ambiente JWT_SECRET com um valor secreto para o JWT.  
JWT_SECRET=sua-chave-secreta  
Inicie o servidor backend.  
npm start  

Configuração do Frontend  

Navegue até a pasta do frontend e instale as dependências.  
cd frontend  
npm install  
Inicie o servidor frontend.  
npm start  

Agora, o aplicativo estará rodando na sua máquina localmente.  

Como Contribuir  

Faça o fork deste repositório.  
Crie uma branch para a sua feature (git checkout -b feature-nome-da-feature).  
Comite suas alterações (git commit -m 'Add new feature').  
Envie para o repositório remoto (git push origin feature-nome-da-feature).  
Abra um Pull Request.

Licença  

Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.  
