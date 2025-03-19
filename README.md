# Supplier Management

## Visão Geral

CRUD de Fornecedores onde é possível cadastrar, visualizar, editar e excluir fornecedores

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Material UI (`@mui/material`)**: Biblioteca de componentes React que implementa o Material Design.
- **styled-components:** Biblioteca para estilização de componentes React com CSS-in-JS.
- **React Hook Form:** Biblioteca para gerenciamento de formulários no React.
- **Yup:** Biblioteca para validação de esquemas JavaScript.
- **React Query (`@tanstack/react-query`)**: Biblioteca para gerenciamento de dados assíncronos no React.
- **json-server:** Ferramenta para criar uma API REST falsa a partir de um arquivo JSON.
- **Eslint:** Linter para identificar e corrigir problemas no código JavaScript/JSX.
- **Prettier:** Formatador de código para manter um estilo consistente.

## Práticas Utilizadas

- **Design System:** O projeto utiliza um Design System para garantir a consistência visual e facilitar a manutenção. Os tokens de design (cores, espaçamento, tipografia, etc.) são definidos em um arquivo de tema (`theme.ts`) e reutilizados em toda a aplicação.
- **Componentização:** A interface do usuário é construída com componentes React reutilizáveis, seguindo os princípios de componentização.
- **Estilização com styled-components:** Os componentes são estilizados utilizando a biblioteca styled-components, que permite escrever CSS-in-JS e facilita a criação de estilos dinâmicos e reutilizáveis.
- **Gerenciamento de Formulários:** A biblioteca React Hook Form é utilizada para gerenciar os formulários da aplicação, simplificando a manipulação de estados, validação e envio de formulários.
- **Validação de Esquemas:** A biblioteca Yup é utilizada para definir esquemas de validação e integrá-los com o React Hook Form, garantindo a integridade dos dados inseridos nos formulários.
- **Gerenciamento de Dados Assíncronos:** A biblioteca React Query é utilizada para facilitar o consumo de APIs, gerenciar o cache, atualizar dados em background e otimizar a performance da aplicação.

* `src/components`: Contém os componentes React reutilizáveis.
* `src/services`: Contém as funções para comunicação com a API.
* `src/styles`: Contém os arquivos de estilo, incluindo o tema (`theme.ts`).
* `src/types`: Contém as definições de tipo para a aplicação.
* `src/utils`: Contém funções utilitárias.
* `db.json`: Arquivo JSON para o `json-server`.

## Como Rodar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/britofranciane/supplier-management.git]
    cd supplier-management
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o `json-server`:**

    ```bash
    npx json-server --watch db.json --port 3001
    ```

    - Certifique-se de que o arquivo `db.json` existe na raiz do seu projeto e contém os dados para o `json-server`.

4.  **Inicie a aplicação React:**

    ```bash
    npm start
    ```

    - A aplicação estará disponível em `http://localhost:3000`.

## Configuração do `json-server`

O arquivo `db.json` deve conter os dados que serão servidos pela API falsa. Exemplo:

```json
{
  "suppliers": [
    {
      "id": "d46c",
      "name": "Padaria pão e trigo",
      "email": "padaria@gmail.com",
      "description": "Fornece pães, e saladas frescas. Pode ser fornecido todos os dias desde de quando eu me lembro. ",
      "cep": "69097-555",
      "state": "AM",
      "city": "Águas Vermelhas",
      "street": "Rua 223-II",
      "number": "34",
      "reference": "",
      "contacts": [
        {
          "nameContact": "Paula",
          "phone": "(72) 37468-2938"
        }
      ]
    }
  ]
}
```
