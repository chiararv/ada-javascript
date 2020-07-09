mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("remueve el caracter deseado", () => {
  it("remueve todos las ocurrencias de un caracter de una frase siempre y cuando sea solo uno", () => {
      const phrase = "Pablito clavo varios clavitos";
      const letter = "a"
      expect(removeLetters(phrase, letter)).to.be.equal("pblito clvo vrios clvitos");
  });
  it("remueve la primera ocurrencia del caracter siempre y cuando sea solo uno", () => {
      const phrase = "Pablito clavo varios clavitos";
      const letter = "a"
      expect(removeSingleLetter(phrase, letter)).to.be.equal("pblito clavo varios clavitos");
  });
  it ("un solo caracter", () =>{
    letter = "a"
    expect(checkLength(letter)).to.be.equal(true);
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