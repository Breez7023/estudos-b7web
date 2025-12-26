# Softwares utilizados

- Rodaremos o servidor Mysql utilizando o XAMPP, e o visualizador Heidi

# Comandos de interação na tabela

## Select

- SELECT (colunas) FROM (tabela);

ex: SELECT \* FROM produtos;

## where

- SELECT (colunas) FROM (tabela) WHERE (condição);

ex: SELECT \* FROM produtos WHERE id = 5;

ex: SELECT \* FROM produtos WHERE nome = 'Pedro';

ex: SELECT \* FROM produtos WHERE estoque <= minestoque;

## and/or

- SELECT (colunas) FROM (tabela) WHERE (condição1) AND/OR (condição2);

ex: SELECT \* FROM produtos WHERE preco > 140 AND/OR preco < 1000;

- SELECT (colunas) FROM (tabela) WHERE (condição1) AND/OR (condição2) OR (condição3);

ex: SELECT \* FROM produtos WHERE (preco > 140 AND/OR preco < 1000) OR id_fornecedor = 6;

( ) e utilizado para dar prioridade quando utilizamos o and e o or na mesma query

## where like

- SELECT (colunas) FROM (tabela) WHERE (condição) LIKE (dado incompleto);

ex: SELECT \* FROM produtos WHERE nome LIKE 'B%;

% = sinal de o resto doque procuro

B% Ira puxar produtos onde o nome comeca com B

%B o oposto

%B% que possue no corpo

## where between e in

- SELECT (colunas) FROM (tabela) WHERE (condição) BETWEEN (dado) AND (dado);

ex: SELECT \* FROM produtos WHERE estoque BETWEEN 5 AND 10;

ira puxar todos os dados onde o estoque esta entre 5 e 10

- SELECT (colunas) FROM (tabela) WHERE (condição) IN (dado desejado);

ex: SELECT \* FROM produtos WHERE id_fornecedor IN (1, 6, 3)

ira puxar todos os dados onde id fornecedor tiver 1, 3, 6

# Exercicio:

## Puxar os dados da marca xyz que estao necessitando comprar mais para o estoque

minha resposta:

SELECT \* FROM produtos WHERE estoque <= minestoque AND id_fornecedor = 1;

Resposta da aula:

SELECT \* FROM produtos WHERE id_fornecedor = 1 AND estoque <= minestoque;
