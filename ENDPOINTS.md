## Endpoints e Resultados JSON Esperados

### Produtos

- **POST /products**: Cadastrar um novo produto
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Produto cadastrado com sucesso",
      "data": {
        "product_id": 1,
        "nome": "Produto Exemplo",
        "descricao": "Descrição do produto exemplo",
        "valor": 100.00
      }
    }
    ```
- **PUT /products/{product_id}**: Editar um produto existente
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Produto atualizado com sucesso",
      "data": {
        "product_id": 1,
        "nome": "Produto Exemplo Editado",
        "descricao": "Descrição editada",
        "valor": 150.00
      }
    }
    ```
- **GET /products**: Listar todos os produtos
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "data": [
        {
          "product_id": 1,
          "nome": "Produto Exemplo",
          "descricao": "Descrição do produto exemplo",
          "valor": 100.00
        }
      ]
    }
    ```
- **DELETE /products/{product_id}**: Excluir um produto
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Produto excluído com sucesso"
    }
    ```

### Vendas

- **POST /sales**: Realizar uma venda
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Venda realizada com sucesso",
      "data": {
        "sale_id": 1,
        "data_hora": "2023-01-01T12:00",
        "produtos": [
          {
            "product_id": 1,
            "quantidade": 2
          }
        ]
      }
    }
    ```
- **GET /sales**: Listar todas as vendas
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "data": [
        {
          "sale_id": 1,
          "data_hora": "2023-01-01T12:00",
          "produtos": [
            {
              "product_id": 1,
              "quantidade": 2
            }
          ]
        }
      ]
    }
    ```
- **DELETE /sales/{sale_id}**: Excluir uma venda
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Venda excluída com sucesso"
    }
    ```

### Usuários

- **POST /users**: Cadastrar um novo usuário
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Usuário cadastrado com sucesso",
      "data": {
        "user_id": 1,
        "nome": "Nome do Usuário",
        "numero": "123456789",
        "idade": 30,
        "valor_reservado": 0.00
      }
    }
    ```
- **PUT /users/{user_id}**: Editar um usuário existente
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Usuário atualizado com sucesso",
      "data": {
        "user_id": 1,
        "nome": "Nome Editado",
        "numero": "987654321",
        "idade": 31,
        "valor_reservado": 100.00
      }
    }
    ```
- **GET /users**: Listar todos os usuários
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "data": [
        {
          "user_id": 1,
          "nome": "Nome do Usuário",
          "numero": "123456789",
          "idade": 30,
          "valor_reservado": 0.00
        }
      ]
    }
    ```
- **DELETE /users/{user_id}**: Excluir um usuário
  - **Resposta JSON**: 
    ```json
    {
      "success": true,
      "message": "Usuário excluído com sucesso"
    }
    ```
