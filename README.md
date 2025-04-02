# Pokémon List Project

## 📌 Descrição
Este projeto é uma aplicação Angular que consome a API da PokéAPI para exibir uma lista de Pokémon. Cada Pokémon listado inclui detalhes como nome, imagem e sua cadeia de evolução.

## 🚀 Tecnologias Utilizadas
- **Angular** (Framework para desenvolvimento frontend)
- **TypeScript** (Linguagem utilizada no desenvolvimento)
- **PokéAPI** (API pública para obtenção de dados sobre Pokémon)
- **SCSS** (Estilização do projeto)

## Estrutura do Projeto
```
📦 src/
 ┣ 📂 app/
 ┃ ┣ 📂 pokemon-list/  # Componente responsável por exibir a lista de Pokémon
 ┃ ┣ 📂 services/
 ┃ ┃ ┗ pokemon.service.ts  # Serviço responsável por consumir a API
 ┃ ┗ app.module.ts  # Módulo principal do Angular
 ┣ 📂 assets/  # Recursos estáticos como imagens e ícones
 ┣ index.html  # Arquivo principal da aplicação
```

## 📜 Funcionalidades
✅ Paginação para exibir diferentes Pokémon por página  
✅ Consulta de detalhes dos Pokémon  
✅ Recuperação e exibição da cadeia de evolução  
✅ Tratamento de erros para chamadas à API

## 📡 Consumo da API
A aplicação utiliza os seguintes endpoints da PokéAPI:

- **Lista de Pokémon:** `https://pokeapi.co/api/v2/pokemon?limit={limit}&offset={offset}`
- **Detalhes de um Pokémon:** `https://pokeapi.co/api/v2/pokemon/{id}`
- **Espécie de um Pokémon:** `https://pokeapi.co/api/v2/pokemon-species/{id}`
- **Cadeia de Evolução:** `https://pokeapi.co/api/v2/evolution-chain/{id}`

## 🔧 Instalação e Execução
1. Clone este repositório:
   ```sh
   git clone https://github.com/Tiesco789/pokedex-angular.git
   cd pokemon-list
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute o projeto:
   ```sh
   ng serve
   ```
4. Acesse no navegador:  
   ```
   http://localhost:4200
   ```

## 📌 Uso
- Navegue entre as páginas para visualizar diferentes Pokémon.
- Clique em um Pokémon para ver seus detalhes e evolução.
- Utilize os controles de paginação para navegar entre os resultados.

## 🛠 Melhorias Futuras
- Implementação de um sistema de busca por nome.
- Melhorias na UI/UX utilizando Angular Material.
- Adição de animações para tornar a interface mais dinâmica.

## 📄 Licença
Este projeto é open-source e está disponível sob a licença MIT.

---

Feito com ❤️ e muito café! ☕
