// ### 02 - número de la semana

// - Desarrollar una función que reciba por parámetro un día de la semana y devuelva el número que le corresponde.


mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("que numero de dia es", () => {
  it("martes debe ser igual a dos", () => {
    const day= "martes";
    expect(checkDay(day)).to.be.equal(2)
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