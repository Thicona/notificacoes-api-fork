// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");
const { parse } = require("dotenv");
describe("parseId", () => {
    // Para testar ERRO, o expect recebe uma função: () => ...
    it("lança ValidationError quando o id não é número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });
// Desafio: Um id "12abc" deveria ser aceito? Pensem no que deveria acontecer, escrevam o teste com 
// essa expectativa e rodem.    
    it("lança ValidationError quando o Id contém letras misturadas com número ('12abc)", () => {
        expect(() => parseId("12abc")).toThrow(ValidationError);
    });
    
});