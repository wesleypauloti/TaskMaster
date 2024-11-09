# **Gerenciamento de Tarefas** 

![image](https://github.com/user-attachments/assets/cd5fe943-8851-4bf9-9828-a0e19816470b)

Ao clicar na tarefa mostra os detalhes

![image](https://github.com/user-attachments/assets/2c88e6e3-9209-49e8-9ff1-968ba6a10246)

Este projeto é um sistema simples de gerenciamento de tarefas, permitindo que os usuários possam criar, listar e excluir tarefas. O objetivo deste projeto é fornecer uma plataforma fácil de usar para gerenciamento de atividades diárias.  

---

## **Funcionalidades**

- Autenticação de Usuário: Os usuários podem se cadastrar e fazer login para acessar o sistema.  
- Criação de Tarefas: O sistema permite que os usuários criem novas tarefas.  
- Exclusão de Tarefas: Tarefas podem ser excluídas a qualquer momento.  
- Exibição de Tarefas: Todas as tarefas criadas por um usuário são exibidas na interface principal.

---

## **Tecnologias Usadas**

- Frontend: React.js  
- Backend: Node.js com Express  
- Banco de Dados: MongoDB (ou o banco de dados que você estiver usando)  
- Autenticação: JWT (JSON Web Tokens)

---

## **Como Rodar o Projeto**

### **Requisitos**

- Node.js instalado na sua máquina.

### **Configuração do Backend**  

1. Clone o repositório do projeto.
   ```bash
   git clone <url-do-repositório>
2. Navegue até a pasta do backend e instale as dependências.
   ```bash
   cd backend  
   npm install

3. Crie um arquivo .env na raiz do projeto e defina a variável de ambiente JWT_SECRET com um valor secreto para o JWT.  
    ```bash
   JWT_SECRET=sua-chave-secreta  

4. Inicie o servidor backend.
    ```bash 
   npm start  

### **Configuração do Frontend**

1. Navegue até a pasta do frontend e instale as dependências.
   ```bash
   cd frontend  
   npm install
     
2. Inicie o servidor frontend.
    ```bash
   npm start  

Agora, o aplicativo estará rodando na sua máquina localmente.  

---

### **Como Contribuir**

1. Faça o fork deste repositório.
2. Crie uma branch para a sua feature (git checkout -b feature-nome-da-feature).
3. Comite suas alterações (git commit -m 'Add new feature').
4. Envie para o repositório remoto (git push origin feature-nome-da-feature).
5. Abra um Pull Request.

---

### **Licença**

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.  
