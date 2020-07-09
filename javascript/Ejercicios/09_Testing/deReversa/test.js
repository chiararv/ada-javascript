mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("verificar reversa", () => {
  it("el numero debe ser impreso al reves", () => {
    const number = 1234;
    expect(checkReverse(number)).to.be.equal(4321)
  });
});

mocha.run();


// describe("Verificar reversa", () => 
// {
//     it("checkReverse verifica que el numero se imprima al revés",()=>{
//         const number = 1234;
//         expect(checkReverse(number)).to.be.equal(4321)
//     });

// }); //