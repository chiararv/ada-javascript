// ## 03 - ordenar letras de palabra

// - Escribir una función que reciba una palabra e imprima sus letras ordenadas alfabéticamente.(pista split,join,sort)


mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("ordenar letras de palabra alfabeticamente", () => {
  it("ordena letras en orden alfabetico", () => {
    const word= "martes";
    expect(sortLetters(word)).to.be.equal("aemrst")
  });
});

mocha.run();


    // primer parametro valor a evaluar
    // segundo parametro va a ser el valor esperdado
    // tercero opcional va a ser un mensaje opcional
    // typeOf va a ser igual que hacer un if(typeOf(month) === "string") Si es verdadero pasa el test, en caso contrario lanza un error
    // assert.typeOf(month, "string", "Debe ser un string");
    // if(month === "mayo")
    // assert.equal(month, "mayo", "Debe ser el mes de mayo");
    // should
    // expect(getMonth(5))
    //   .to.be.a("string", "deberia ser un string")
    //   .to.be.equal("mayo");