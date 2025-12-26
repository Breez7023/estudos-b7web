## Order by

- SELECT (colunas) FROM (tabela) WHERE (condição) ORDER BY (coluna/condição) ASC/DESC;

ex: SELECT \* FROM produtos ORDER BY nome ASC/DESC;

SELECT \* FROM produtos WHERE id_fornecedor = 6 ORDER BY nome ASC/DESC;

SELECT \* FROM produtos ORDER BY minestoque ASC/DESC, nome ASC/DESC;

## Limit

- SELECT (colunas) FROM (tabela) WHERE (condição) ORDER BY (coluna/condição) ASC/DESC LIMIT (limitador);

ex: SELECT \* FROM produtos WHERE id_fornecedor = 6 ORDER BY nome ASC/DESC LIMIT 5;

Isso vai basicamente limitar os dados que aparecem em 5 linhas, ao fornecer um outro numero primeiro como no exemplo a seguir ele pulara as primeiras linhas no numero solicitado e ae mostrar os dados na quantidade de linhas do segundo numero

ex: SELECT \* FROM produtos WHERE id_fornecedor = 6 ORDER BY nome ASC/DESC LIMIT 5, 5; //ao por so um numero e como se fizessemos 0, 5

## Count, Avg e Sum

- SELECT COUNT (colunas) FROM (tabela) WHERE (condição)
- SELECT COUNT (colunas) AS (apelido) FROM (tabela) WHERE (condição)

ex: SELECT COUNT (\*) AS contagem FROM produtos WHERE id_fornecedore = 6

- SELECT AVG(colunas) AS (apelido) FROM (tabela)
- SELECT AVG(colunas) AS (apelido), COUNT (colunas) AS (apelido) FROM (tabela)

ex: SELECT AVG(preco) AS media, COUNT (\*) AS total FROM produtos;

- SELECT AVG(colunas) AS (apelido), COUNT (colunas) AS (apelido), SUM(colunas) as (apelido) FROM (tabela)

ex: SELECT AVG(preco) AS media, COUNT (\*) AS total, SUM(estoque) as soma FROM produtos;

- Count = Ira retornar quantos dados

- AVG = Ira retornar uma media

- SUM = Ira retornar a soma da coluna

- O AS mudara apenas o nome na exibicao

## Group by

- SELECT SUM(coluna) as (apelido), (segunda info/coluna) FROM (tabela) GROUP BY (info desejada)

ex: SELECT SUM(estoque) as estoqueTotal, id_fornecedor FROM produtos GROUP BY id_fornecedor

Muito confuso, mas ele basicamente vai agrupar e separar, feito pra ser usado com o AVG,SUM ou Count, ira mostrar o estoque total agrupado pelo e separado por id_fornecedor

## Subquery

- SELECT (coluna), (SELECT tabela.coluna FROM tabela WHERE tabela.condicao) AS apelido FROM (tabela)

- SELECT (coluna) FROM (tabela) where (SELECT tabela.coluna FROM tabela WHERE tabela.condicao) = (dado desejado)

ex: SELECT \*, (SELECT fornecedores.nome FROM fornecedores WHERE fornecedores.id = produtos.id_fornecedor) FROM produtos;

SELECT \* FROM produtos WHERE (SELECT fornecedores.nome FROM fornecedores WHERE fornecedores.id = produtos.id_fornecedor) = 'NASA';

Bsicamente serve para utilizar tanto como base tanto para filtrar e criar colunas imaginarias pegando dados de outras tabelas e relacionando com a sua atual
