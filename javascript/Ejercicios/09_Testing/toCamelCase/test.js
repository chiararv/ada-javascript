mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("Convierte a camel case", () => {
  it("toma como parametro un string en dash case y lo devuelve en camelCase", () => {
      const phrase = "Pablito-clavo-varios-clavitos";
      expect(camelCaseConverter(phrase)).to.be.equal("pablitoClavoVariosClavitos");
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