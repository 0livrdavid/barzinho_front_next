# Introdução

Este documento descreve as funcionalidades, requisitos e interfaces do frontend para o sistema de gerenciamento de produtos, vendas e usuários do Barzinho. O frontend é projetado para ser robusto, escalável e fácil de usar, com uma forte ênfase na experiência do usuário e na qualidade do código.

# Escopo

## Funcionalidades

- [ ] Cadastro de produtos
- [ ] Edição de produtos
- [ ] Listagem de produtos
- [ ] Exclusão de produtos
- [ ] Realização de vendas
- [ ] Listagem de vendas
- [ ] Exclusão de vendas
- [ ] Cadastro de novos usuários
- [ ] Edição de usuários
- [ ] Listagem de usuários
- [ ] Exclusão de usuários
- [ ] Geração de relatórios, incluindo:
  - [ ] Relatório do usuário que mais gastou
  - [ ] Relatório do produto mais comprado
  - [ ] Relatório de vendas por período
  - [ ] Relatório de produtos com maior margem de lucro

## Requisitos Funcionais

- [ ] Cadastro, edição, listagem e exclusão de produtos
- [ ] Realização, listagem e exclusão de vendas
- [ ] Cadastro, edição, listagem e exclusão de usuários
- [ ] Geração de relatórios detalhados

## Requisitos Não Funcionais

- [ ] Construção utilizando Next.js para performance e SEO
- [ ] Desenvolvimento com práticas de código limpo e padrões de design

## Estrutura de Dados

- `products`: (product_id, nome, descricao, valor)
- `sales`: (sale_id, data_hora, user_id)
- `sales_products`: (sale_product_id, sale_id, product_id, quantidade)
- `users`: (user_id, nome, numero, idade, valor_reservado)

## Tarefas

### Frontend

- [ ] Páginas para cadastro, edição, listagem e exclusão de produtos
- [ ] Páginas para realização, listagem e exclusão de vendas
- [ ] Interfaces para cadastro, edição, listagem e exclusão de usuários
- [ ] Interface para geração de relatórios

### Backend

- [ ] APIs para cadastro, edição, listagem e exclusão de produtos
- [ ] APIs para realização, listagem e exclusão de vendas
- [ ] APIs para cadastro, edição, listagem e exclusão de usuários
- [ ] Lógica para geração de relatórios

### Integração

- [ ] Integração das APIs de produtos, vendas e usuários com o frontend
- [ ] Consumo dos dados das APIs na geração de relatórios

## API Endpoints

### Produtos

- **POST /products**: Cadastrar produto
- **PUT /products/{product_id}**: Editar produto
- **GET /products**: Listar produtos
- **DELETE /products/{product_id}**: Excluir produto

### Vendas

- **POST /sales**: Realizar venda
- **GET /sales**: Listar vendas
- **DELETE /sales/{sale_id}**: Excluir venda

### Usuários

- **POST /users**: Cadastrar usuário
- **PUT /users/{user_id}**: Editar usuário
- **GET /users**: Listar usuários
- **DELETE /users/{user_id}**: Excluir usuário

