const empleadesTest = [
  {
    nombre: "Wade Morgan",
    pais: "México",
    edad: 20,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 79767,
    haceGuardia: false,
    lenguajes: ["Java"],
  },
  {
    nombre: "Eunice Browning",
    pais: "Colombia",
    edad: 20,
    area: "QA",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 72457,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#", "Java", "Python", "PHP"],
  },
  {
    nombre: "Floyd Reyes",
    pais: "Paraguay",
    edad: 29,
    area: "Soporte",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 64868,
    haceGuardia: false,
    lenguajes: ["Python", "Ruby", "Java", "C#"],
  }
]
const empleadesTest2 = [
  {
    nombre: "Wade Morgan",
    pais: "México",
    edad: 20,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 79767,
    haceGuardia: false,
    lenguajes: ["Java"],
    tecnologias : ["GIT", "Node.JS"]
  },
  {
    nombre: "Eunice Browning",
    pais: "Colombia",
    edad: 20,
    area: "QA",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 72457,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#", "Java", "Python", "PHP"],
    tecnologias : ["GIT", "Node.JS"]
  },
  {
    nombre: "Floyd Reyes",
    pais: "Paraguay",
    edad: 29,
    area: "Soporte",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 64868,
    haceGuardia: false,
    lenguajes: ["Python", "Ruby", "Java", "C#"],
    tecnologias : ["GIT", "Node.JS"]
  }
]

const empleadesTest1 = [
  {
    nombre: "Wade Morgan",
    pais: "México",
    edad: 20,
    area: "QA",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 79767,
    haceGuardia: true,
    lenguajes: ["Java"],
  },
  {
    nombre: "Eunice Browning",
    pais: "Colombia",
    edad: 20,
    area: "QA",
    puesto: "Data analyst",
    seniority: "Junior",
    sueldo: 72457,
    haceGuardia: true,
    lenguajes: ["Ruby", "C#", "Java", "Python", "PHP"],
  },
  {
    nombre: "Floyd Reyes",
    pais: "Paraguay",
    edad: 29,
    area: "Soporte",
    puesto: "Backend Developer",
    seniority: "Semisenior",
    sueldo: 64868,
    haceGuardia: true,
    lenguajes: ["Python", "Ruby", "Java", "C#"],
  }
]



// SUITE



describe( "Lista empleades", () => {

   it (" `empleadesQueHacenGuardia`, que devuelva un array con todes les empleades que hacen guardia", () => {

    expect(empleadesQueHacenGuardia(empleadesTest)).to.be.eql([empleadesTest[1]])
   })
   it ("`empleadesPorPais`, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país", () => {

    const pais = "Colombia";

    expect(empleadesPorPais(empleadesTest, pais)).to.be.eql([empleadesTest[1]])
   })
   it ("`empleadesPorArea`, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área", () => {

    const area = "QA";

    expect(empleadesPorArea(empleadesTest, area)).to.be.eql([empleadesTest[0],empleadesTest[1]])
   })
   it (" `empleadesConSueldoMayorA`, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo", () => {

    const sueldo = 70000;

    expect(empleadesConSueldoMayorA(empleadesTest, sueldo)).to.be.eql([empleadesTest[0],empleadesTest[1]])
   })
   it ("`empleadesConMasLenguajes`, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número", () => {

    const lenguajes = 2;

    expect(empleadesConMasLenguajes(empleadesTest, lenguajes)).to.be.eql([empleadesTest[1],empleadesTest[2]])
   })
   it ("`sueldoPromedioEmpleades`, que devuelva el sueldo promedio de todos los empleados", () => {

    expect(sueldoPromedioEmpleades(empleadesTest)).to.be.eql(72364)
   })
   it ("`sueldoPromedioPorSeniority`, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority ", () => {

    const seniority = "Semisenior";

    expect(sueldoPromedioPorSeniority(empleadesTest, seniority)).to.be.eql(72317.5)
   })
  //  it ("`buscarEmpleades`, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority", () => {

  //   const seniority = "Semisenior"; // filter con &&

  //   expect(buscarEmpleades(empleadesTest, seniority)).to.be.eql(72317.5)
  //  })
   it ("errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados", () => {

    expect(errorEnProduccion(empleadesTest)).to.be.eql(empleadesTest1)
   })
   it (" `subirDeCategoria`, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority Senior, cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden y le incremente en 10000 el sueldo", () => {

    const empleade =   {
      nombre: "Wade Morgan",
      pais: "México",
      edad: 20,
      area: "QA",
      puesto: "Backend Developer",
      seniority: "Senior",
      sueldo: 89767,
      haceGuardia: false,
      lenguajes: ["Java"],
    };

    expect(subirDeCategoria(empleadesTest[0])).to.be.eql(empleade)
   })
   it ("`agregarTecnologias`, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores GIT y Node.js", () => {
  
    expect(agregarTecnologias(empleadesTest)).to.be.eql(empleadesTest2)
    
   })

   it ("`empleadeSabeLenguaje`, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje", () => {

    const lenguaje = "Python"
      
    expect(empleadeSabeLenguaje(empleadesTest[1], lenguaje)).to.be.eql(true)
    
   })
   it (" `empleadesQueSabenLenguaje`, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)", () => {

    const lenguaje = "Python"
      
    expect(empleadesQueSabenLenguaje(empleadesTest, lenguaje)).to.be.eql([empleadesTest[1], empleadesTest[2]])
    
   })
   it ("`empleadesQueSabenLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes", () => {

    const lenguaje = ["Ruby", "C#", "Python"]
      
    expect(empleadesQueSabenLenguajes(empleadesTest, lenguaje)).to.be.eql([empleadesTest[1], empleadesTest[2]])
    
   })
   it ("`empleadesQueSabenAlgunosLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes)", () => {

    const lenguajesRequeridos = ["Ruby", "C#", "PHP"]
      
    expect(empleadesQueSabenAlgunosLenguajes(empleadesTest, lenguajesRequeridos)).to.be.eql([empleadesTest[1], empleadesTest[2]])
    
   })
   it ("empleadesConMejorSueldo`, que devuelva un array con los 10 mejores empleades pagos", () => {
     const reultado =   [
      {
        nombre: "Wade Morgan",
        pais: "México",
        edad: 20,
        area: "QA",
        puesto: "Backend Developer",
        seniority: "Semisenior",
        sueldo: 79767,
        haceGuardia: false,
        lenguajes: ["Java"],
      },
      {
        nombre: "Eunice Browning",
        pais: "Colombia",
        edad: 20,
        area: "QA",
        puesto: "Data analyst",
        seniority: "Junior",
        sueldo: 72457,
        haceGuardia: true,
        lenguajes: ["Ruby", "C#", "Java", "Python", "PHP"],
      },
      {
        nombre: "Floyd Reyes",
        pais: "Paraguay",
        edad: 29,
        area: "Soporte",
        puesto: "Backend Developer",
        seniority: "Semisenior",
        sueldo: 64868,
        haceGuardia: false,
        lenguajes: ["Python", "Ruby", "Java", "C#"],
      }
    ]

    expect(empleadesConMejorSueldo(empleadesTest)).to.be.eql(reultado)
    
   })

})