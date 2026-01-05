## Insert into

- INSERT INTO (tabela) ((colunas que deseja adicionar)) VALUES ((dados desejados na ordem))

ex: INSERT INTO usuarios (nome, datacadastro) VALUES ('Fulano', '2020-12-30');

INSERT INTO usuarios (nome, datacadastro) VALUES ('Fulano', '2020-12-30'), ('Ciclano', '2020-12-30'), ('Fulano', NOW());

## Update

- UPDATE (tabela) SET (coluna) = (dado desejado) WHERE (identificacao)

ex: UPDATE usuarios SET nome = 'Daniel" WHERE id=2;

UPDATE produtos SET preco = preco \* 1.1 WHERE id_fornecedor=6;

## Delete

- DELETE FROM (tabela) WHERE (dado);

ex: DELETE FROM produtos WHERE id = 12;
