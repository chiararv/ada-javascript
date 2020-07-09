mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("Devuelve la/s palabra/s mas corta/s", () => {
  it("toma como parametro un string y devuelve las palabras mas cortas en un array", () => {
      const phrase = "Pablito clavo varios clavitos rosas";
      expect(getShortestWords(phrase)).to.be.eql(["clavo", "rosas"]);
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