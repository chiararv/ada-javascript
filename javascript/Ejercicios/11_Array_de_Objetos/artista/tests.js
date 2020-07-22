const artistaTest = [  {
    nombre: "Ochoa Chang",
    solista: true,
    edad: 33,
    instrumento: "batería",
    paisNacimiento: "Mayotte",
    ultimoRecital: {
      pais: "Vatican City State (Holy See)",
      anio: 2016,
      entradasVendidas: 68197,
      costoEntradas: 2987,
    },
    discos: [
      {
        titulo: "pariatur excepteur dolore",
        canciones: 13,
        anioLanzamiento: 1993,
        copiasVendidas: 20393,
      },
      {
        titulo: "aliquip est esse",
        canciones: 9,
        anioLanzamiento: 2017,
        copiasVendidas: 69303,
      },
      {
        titulo: "reprehenderit est aliquip",
        canciones: 12,
        anioLanzamiento: 2011,
        copiasVendidas: 1861,
      },
      {
        titulo: "do magna irure",
        canciones: 9,
        anioLanzamiento: 2018,
        copiasVendidas: 29126,
      },
      {
        titulo: "proident id amet",
        canciones: 13,
        anioLanzamiento: 2017,
        copiasVendidas: 22989,
      },
      {
        titulo: "cillum velit est",
        canciones: 15,
        anioLanzamiento: 2010,
        copiasVendidas: 17449,
      },
      {
        titulo: "nulla incididunt laborum",
        canciones: 11,
        anioLanzamiento: 2019,
        copiasVendidas: 90743,
      },
      {
        titulo: "commodo sint fugiat",
        canciones: 13,
        anioLanzamiento: 2014,
        copiasVendidas: 70766,
      },
      {
        titulo: "elit adipisicing eu",
        canciones: 8,
        anioLanzamiento: 2006,
        copiasVendidas: 89143,
      },
    ],
    genero: "punk",
  },

  {
    nombre: "Griffin David",
    solista: false,
    edad: 30,
    instrumento: "voz",
    paisNacimiento: "Philippines",
    ultimoRecital: {
      pais: "South Africa",
      anio: 2000,
      entradasVendidas: 66545,
      costoEntradas: 1106,
    },
    discos: [
      {
        titulo: "pariatur et culpa",
        canciones: 13,
        anioLanzamiento: 2010,
        copiasVendidas: 33606,
      },
    ],
    genero: "reggae",
  },

  {
    nombre: "Loretta Short",
    solista: false,
    edad: 25,
    instrumento: "guitarra",
    paisNacimiento: "Korea (South)",
    ultimoRecital: {
      pais: "France",
      anio: 2008,
      entradasVendidas: 58251,
      costoEntradas: 1263,
    },
    discos: [
      {
        titulo: "ea aute occaecat",
        canciones: 11,
        anioLanzamiento: 2003,
        copiasVendidas: 77446,
      },
      {
        titulo: "adipisicing elit magna",
        canciones: 10,
        anioLanzamiento: 2003,
        copiasVendidas: 95876,
      },
      {
        titulo: "consequat aute occaecat",
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 28377,
      },
      {
        titulo: "quis occaecat cupidatat",
        canciones: 9,
        anioLanzamiento: 1994,
        copiasVendidas: 38332,
      },
    ],
    genero: "rock",
  }
]


describe("Trabajar con Info artista",()=>{
    it("Filtar artistas solista - Ej 1 - filtarSolista",()=>{
        expect(filtarSolista(artistaTest)).to.be.eql([artistaTest[0]])
    });
    it("Filtar artistas por edad - Ej 2 - filtarEdad",()=>{
      const edad = 30;  
        expect(artistasPorEdad(artistaTest , edad)).to.be.eql([artistaTest[1]])
    });
    it("retorna cantidad de artistas que tocan cada instrumento - Ej 3 - cantidadDeArtistasPorInstrumento",()=>{
      const instrumentos = {
        batería : 1,
        voz: 1,
        guitarra: 1,

      }
        expect(cantidadDeArtistasPorInstrumento(artistaTest)).to.be.eql(instrumentos)
    });
    it("retorna cantidad de artistas que tocan cada género - Ej 4 - cantidadDeArtistasPorGenero",()=>{
      const genero = {
        punk : 1,
        reggae: 1,
        rock: 1,
  
      }
        expect(cantidadDeArtistasPorGenero(artistaTest)).to.be.eql(genero)
    })
    
    it("devuelva un array con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos - Ej 5 - artistasConMasDiscosQue",()=>{
      const cantidadDeDiscos = 5;
        expect(artistasConMasDiscosQue(artistaTest, cantidadDeDiscos)).to.be.eql([artistaTest[0]])
    });
    it("Retornar Artista con mas entradas vendida - Ej 6 - artistaConMasEntradasVendida",()=>{
        expect(artistaConMasEntradasVendida(artistaTest)).to.be.eql(artistaTest[0])
    });
    it("artistaConMayorRecaudacion: tome por parámetro un array de artistas y devuelva el objeto artista que más recaudó en su último recital (entradasVendidas \* costoEntradas) -Ej07", () => {

 
      expect(artistaConMayorRecaudacion(artistaTest)).to.be.eql(artistaTest[0]);
    });
    it("artistasConDiscoEnAnio:que tome por parámetro un parámetro 'anio', y devuelva true un array con los artistas que tengan publicado al menos un disco en dicho año -Ej08", () => {

      const anio = 1993
 
      expect(artistasConDiscoEnAnio(artistaTest, anio)).to.be.eql([artistaTest[0], artistaTest[1] ]);
    });
    it("artistaConMasCopias:  devuelva el objeto artista que más copias de discos en total vendió -Ej09", () => {

      expect(artistaConMasCopias(artistaTest)).to.be.eql(artistaTest[0]);
    });
})