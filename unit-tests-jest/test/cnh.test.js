const { obterCnh } = require("../src/cnh");

test("Validando se a pessoa é maior de 18 anos", async () => {
    expect(obterCnh(30)).toBeTruthy();
});

test("Validando se a pessoa é menor de 18 anos", async () => {
    expect(obterCnh(10)).toBeFalsy();
});
