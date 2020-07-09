mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("Uncesor", () => {
  it("Reemplaza las letras censuradas por las correspondientes", () => {
      const frase = '*di* Ja**Scr*p*';
      const letras = ['O', 'o', 'v', 'a', 'i', 't'];
      expect(reemplazaAsteriscos(frase, letras)).to.be.eql("Odio JavaScript");
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