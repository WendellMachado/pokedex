
# Pokedex

## Descrição

O projeto Pokedex é uma solução completa para pesquisar e exibir dados de Pokémon. Desenvolvido com React, Vite e TypeScript, este projeto fornece uma interface amigável para buscar Pokémon por nome, número ou tipo. A aplicação apresenta uma lista paginada de Pokémon, visualizações detalhadas para cada Pokémon e filtragem baseada em tipos.

## Funcionalidades

- **Funcionalidade de Pesquisa**: Usuários podem buscar Pokémon por nome ou número usando um campo de pesquisa.
- **Filtragem por Tipo**: Pokémon podem ser filtrados por tipo.
- **Resultados Paginação**: Os resultados da pesquisa são exibidos em formato paginado, com 20 Pokémon por página.
- **Visualização Detalhada**: Selecionar um Pokémon redireciona para uma visualização detalhada que inclui:
  - Nome do Pokémon
  - Número do Pokémon
  - Sprites normal e shiny
  - Tipos com cores distintas
  - Estatísticas do Pokémon (por exemplo, Velocidade, Defesa, Defesa Especial)
- **Navegação por Tipo**: Clicar em um tipo na visualização detalhada redireciona para a página de pesquisa com resultados filtrados por esse tipo.
- **Internacionalização**: A aplicação suporta vários idiomas com um componente de troca de idioma.

## Acesso em produção

A solução está disponível para uso nessa url: <https://majestic-creponne-e03011.netlify.app/>

## Instalação

Para configurar e executar este projeto localmente, siga estas etapas:

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd <diretorio-do-repositorio>
2. **Instale o Node.js:**

O Node.js inclui o npm (Node Package Manager). Você pode baixar o instalador adequado para o seu sistema operacional no site oficial do Node.js e seguir as instruções de instalação.

- **No macOS:** Você pode usar o Homebrew para instalar o Node.js:

  ```bash
  brew install node

- **No Windows:** Baixe o instalador do site oficial <https://nodejs.org/en> e siga as instruções.

- **No Linux:** Use o gerenciador de pacotes de sua distribuição. Por exemplo, no Ubuntu:

  ```bash
  Copy code
  sudo apt update
  sudo apt install nodejs npm

3. **Instale as dependências do projeto:**

    ```bash
    npm install

4. **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev

5. **Execute a aplicação:** No navegador que preferir, acesse a url: <http://localhost:5173/>
 
# Estrutura do Projeto

- **src/:** Contém o código fonte da aplicação.
- **components/:** Componentes React utilizados na aplicação.
- **context/:** Contexto React para gerenciar o estado da aplicação.
- **hooks/:** Hooks personalizados para busca de dados e outras utilidades.
- **services/:** Serviços para interações com APIs.
- **themes/:** Configurações de tema e estilo.
- **utils/:** Funções utilitárias e constantes.
- **App.tsx:** O componente principal da aplicação.
- **main.tsx:** Ponto de entrada para a aplicação React.

# API
A aplicação usa a PokeAPI para buscar dados de Pokémon. Os sprites dos Pokémon são recuperados de:

	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{numero_pokemon}.png
Substitua **{numero_pokemon}** pelo número do Pokémon para obter o sprite.

# Bibliotecas e Ferramentas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite:** Ferramenta de construção para desenvolvimento mais rápido.
- **TypeScript:** Superset tipado de JavaScript para melhor qualidade de código.
- **Styled Components:** Biblioteca para estilização de componentes React usando literais de template.
- **React Router:** Biblioteca para gerenciamento de rotas e navegação.
- **i18next:** Framework de internacionalização para React.


# Pokedex

## Description

The Pokedex project is a complete solution for searching and displaying Pokémon data. Developed with React, Vite, and TypeScript, this project provides a user-friendly interface for searching Pokémon by name, number, or type. The application features a paginated list of Pokémon, detailed views for each Pokémon, and filtering based on types.

## Features

- **Search Functionality**: Users can search for Pokémon by name or number using a search field.
- **Type Filtering**: Pokémon can be filtered by type.
- **Paginated Results**: Search results are displayed in a paginated format, with 20 Pokémon per page.
- **Detailed View**: Selecting a Pokémon redirects to a detailed view that includes:
  - Pokémon's name
  - Pokémon's number
  - Normal and shiny sprites
  - Types with distinct colors
  - Pokémon's stats (e.g., Speed, Defense, Special Defense)
- **Type Navigation**: Clicking on a type in the detailed view redirects to the search page with results filtered by that type.
- **Internationalization**: The application supports multiple languages with a language switcher component.

## Production Access

The solution is available for use at the following URL: <https://majestic-creponne-e03011.netlify.app/>

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install Node.js:**

Node.js includes npm (Node Package Manager). You can download the appropriate installer for your operating system from the official Node.js website and follow the installation instructions.

- **On macOS:** You can use Homebrew to install Node.js:

  ```bash
  brew install node

- **On Windows:** Download the installer from the official site https://nodejs.org/en and follow the instructions.

- **On Linux:** Use your distribution's package manager. For example, on Ubuntu:

  ```bash
  Copy code
  sudo apt update
  sudo apt install nodejs npm

3. **Install the project dependencies:**

    ```bash
    npm install

4. **Run the development server:**

    ```bash
    npm run dev

5. **Run the application:** Open your preferred browser and navigate to: http://localhost:5173/
 
# Project Structure

- **src/:** Contains the application's source code.
- **components/:** React components used in the application.
- **context/:** React context for managing the application's state.
- **hooks/:** Custom hooks for data fetching and other utilities.
- **services/:** Services for API interactions.
- **themes/:** Theme and styling configurations.
- **utils/:** Utility functions and constants.
- **App.tsx:** The main component of the application.
- **main.tsx:** The entry point for the React application.
- 
# API
The application uses the PokeAPI to fetch Pokémon data. Pokémon sprites are retrieved from:

	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{numero_pokemon}.png
Replace **{pokemon_number}** with the Pokémon's number to obtain the sprite.

# Libraries and Tools

- **React:** JavaScript library for building user interfaces.
- **Vite:** Build tool for faster development.
- **TypeScript:** A typed superset of JavaScript for better code quality.
- **Styled Components:** Library for styling React components using template literals.
- **React Router:** Library for managing routes and navigation.
- **i18next:** Internationalization framework for React.
