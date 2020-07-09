mocha.setup("bdd"); //inicializar los test

const expect = chai.expect; //Abreviar expect
const assert = chai.assert; //Abreviar expect
const should = chai.should(); //Abreviar expect


describe("describe alumna", () => {
  it("Devolver las propiedades del obejto alumna", () => {
    const estudiante = {
      nombre: 'Ada',
      apellido: 'Lovelace'
     };
    const estudianteProgramacion = {
      sabeJs: true,
      nombre: 'Ada',
      apellido: 'Lovelace',
      edad: 27,
    }
     
    expect(estudianteJS(estudiante)).to.be.eql(estudianteProgramacion);
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