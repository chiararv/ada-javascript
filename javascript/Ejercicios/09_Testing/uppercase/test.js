// Escribir una función que reciba una frase e imprima la misma con la primera letra de cada palabra en mayúsculas.

mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("Frase en mayusculas", () => {
  it("la primera letra de cada palabra debe estar en mayuscula", () => {
    const frase= "hoy no es martes";
    expect(capitalizedFrase(frase)).to.be.equal("Hoy No Es Martes")
  });

  it("envio un palabra y me retora la primera letra en mayuscula",()=> {
    const palabra = "hoy";
    expect(uppercaseWord(palabra)).to.be.equal("Hoy")
  })   
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