
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
