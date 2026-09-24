# Registro de Testes Unitários
Aluno: Ana Julia Thimote
Grupo: 01
Data: 24/09/2026

## Testes escritos
| #   | Arquivo | O que o teste verifica | Tipo                    |
| --- | ------- | ---------------------- | ----------------------- |
| 1 | |ambient.test.js|o teste verifica se o ambiente está certo| sucesso ✅|
| 2 | |parseId.test.js|o teste verifica se o Id digitado só contém números, e se ele aceita letras misturada com número. | Falha ❌ |
| 3 | |validators.test.js/isEmail | o teste verifica se o email contém @ nele| sucesso ✅|
| 4 | |validators.test.js/minLength| o teste verifica se o nome contém mais de 3 letras| sucesso ✅|

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