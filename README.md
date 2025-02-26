# 📦 Configurando e Executando o Projeto com Docker Compose

Este projeto utiliza **Docker Compose** para gerenciar o backend, frontend, banco de dados MongoDB e a interface web Mongo Express.  

## 🛠 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Docker](https://www.docker.com/get-started)  
- [Docker Compose](https://docs.docker.com/compose/install/)  

Verifique se o Docker está instalado corretamente executando:  
```sh
docker --version
```
```sh
docker-compose --version
```

## 🚀 Como Rodar o Projeto

### 1️⃣ Clone o Repositório
```sh
git clone https://github.com/pgpribeiro/fiap-news.git
cd seu-repositorio
```

### 2️⃣ Crie um Arquivo `.env`
O projeto usa um arquivo `.env` para armazenar variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias:  

```sh
DB_CONNECTION_STRING=mongodb://admin:mongoadmin@mongo:27017/livraria?authSource=admin
```

### 3️⃣ Construir e Rodar os Containers
Agora, execute o comando abaixo para iniciar todos os serviços:  

```sh
docker-compose up --build
```

Isso fará o seguinte:  
✅ Criará os containers para o **backend**, **frontend**, **MongoDB** e **Mongo Express**.  
✅ O backend rodará na porta `3000`.  
✅ O frontend rodará na porta `3001`.  
✅ O MongoDB estará acessível na porta `27017`.  
✅ O Mongo Express estará disponível em `http://localhost:8081`.

Se quiser rodar os serviços em segundo plano:  
```sh
docker-compose up --build -d
```

### 4️⃣ Acessando os Serviços

| Serviço         | URL                              |
|----------------|--------------------------------|
| Backend        | `http://localhost:3000`       |
| Frontend       | `http://localhost:3001`       |
| MongoDB        | `mongodb://localhost:27017`   |
| Mongo Express  | `http://localhost:8081`       |

## 🛑 Como Parar os Containers
Para parar os serviços, use:  
```sh
docker-compose down
```

Se quiser parar e remover volumes criados:  
```sh
docker-compose down -v
```

## 🔥 Logs dos Containers
Para ver os logs do backend e frontend, execute:  
```sh
docker-compose logs -f node-backend
```
```sh
docker-compose logs -f node-frontend
```

## 🛠 Debug e Desenvolvimento

### Recriar Containers
Se precisar reconstruir a aplicação:  
```sh
docker-compose up --build --force-recreate
```

### Entrar no Container do Backend
Se precisar executar comandos dentro do container do backend:  
```sh
docker exec -it nome_do_container_backend /bin/sh
```
Para listar os containers em execução e pegar o nome correto:  
```sh
docker ps
```

## 💡 Dicas Adicionais
- Se precisar instalar pacotes no backend, rode dentro do container:  
  ```sh
  docker exec -it nome_do_container_backend npm install pacote
  ```
- Para limpar cache do Docker, use:  
  ```sh
  docker system prune -a
  ```

---

Agora o projeto está pronto para uso! 🎉
