mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("Devolver la palabra mas larga de una frase", () => {
  it("Devolver la palabra mas larga de una frase", () => {
      const phrase = "Pablito clavo varios clavitos";
      expect(largestWord(phrase)).to.be.equal("clavitos");
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