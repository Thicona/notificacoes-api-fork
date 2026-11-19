# Registro de Testes de Endpoint
Aluno: Ana Thimote Nº 04
Grupo: 01 
## Testes escritos
| # | Verbo e rota     | Com token? | Status esperado | Verde ou vermelho? |
| --- | -----------    |----------  | --------------- | ------------------ |
| 1 | |POST /eventos   | Sim        | 201             | verde
| 2 | |GET /eventos/:id|Não         | 404             | verde
| 3 | |GET /eventos/:id|Não         | 400             | vermelho

## Resultado
Linha "Tests:" da saída do npm run test:endpoint:
Saída 1.5 do test: Tests: 1 todo, 2 passed, 3 total.
Saída parte 3: Tests: 3 passed, 3 total.
Saída parte 4: Tests: 4 passed, 4 total. 
Saída parte 5: Tests: 1 failed, 4 passed, 5 total

## Defeito encontrado
Teste: GET /eventos/:id — "responde 400 quando o id tem letras"
Esperado: Status 400 (Bad Request) indicando que o ID é inválido.
Obtido: Status 200 (OK) retornando os dados do evento normalmente.
Em qual aula esse mesmo defeito já tinha aparecido, e como: Apareceu na aula de testes unitários/de integração (ou validação de parâmetros), quando o `parseInt` converte uma string iniciada por números e seguida de letras (ex: `"1abc"`) apenas para a parte numérica (`1`), fazendo a API aceitar um ID malformado como válido.
