# Registro de Testes de Integração

Aluno: Ana Julia do Nascimento Thimote
Grupo: 01 
Data: 15/10/2026

## Banco de teste

Nome do banco de teste: notificacoes_test
Por que ele é separado do banco da API (uma frase): Ele é separado para garantir que as operações de teste (como limpar e reinserir dados) não apaguem ou corrompam os dados reais de produção ou desenvolvimento da aplicação.

## Testes escritos

| #   | Arquivo | O que o teste verifica | Verde ou vermelho? |
| --- | ------- | ---------------------- | ------------------ |
| 1   | evento.integration.test.js | não grava evento com nome de 2 letras | Verde |
| 2   | evento.integration.test.js | grava o evento no banco com o nome correto | Verde |
| 3   | participante.integration.test.js | grava o participante no banco com nome e e-mail corretos | Verde |
| 4   | participante.integration.test.js | não grava participante com e-mail inválido | Verde |

## Resultado

Linha "Tests:" da saída do npm run test:integration:
Tests:       4 passed, 4 total

## Defeito encontrado

Teste: nenhum defeito encontrado até o momento nos testes de integração executados.
Esperado: N/A
Obtido: N/A
O que o usuário da API veria (a rota responde 200, mas...): N/A
