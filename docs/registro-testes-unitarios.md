# Registro de Testes Unitários
Aluno: Ana Julia Thimote
Grupo: 01
Data: 24/09/2026

## Testes escritos

| # | Arquivo | O que o teste verifica | Tipo |
| :-: | :--- | :--- | :-: |
| 1 | `ambient.test.js` | Verifica se o ambiente de testes está configurado corretamente | Sucesso ✅ |
| 2 | `parseId.test.js` | Verifica se o ID contém apenas números e rejeita IDs com letras misturadas (ex: "12abc") | Falha ❌ |
| 3 | `validators.test.js/isEmail` | Verifica se o e-mail possui uma estrutura válida contendo o caractere "@" | Sucesso ✅ |
| 4 | `validators.test.js/minLength` | Verifica se o texto possui o tamanho mínimo de caracteres exigido | Sucesso ✅ |


## Resultado
Passaram: 3
Falharam: 1

## Defeito encontrado
Teste: parseId
Esperado: sucesso, o id nao aceita letras misturadas no Id
Obtido: falha, na escrita do código 

## Cobertura
% Lines da linha "helpers": 55.55
Em uma frase, o que esse número significa: 55.55% das linhas de código presentes nos arquivos da pasta helpers foram executadas (testadas) durante a execução dos testes. 