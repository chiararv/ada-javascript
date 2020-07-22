const filtarSolista = (artistas) =>
  artistas.filter((artista) => artista.solista);

// const filtarSolista = (artistas) => {
//   return artistas.filter((artista) => {
//     return artista.solista;
//   });
// };
// artistas []
// artista {}
// artistaConMasEntradas {}
const artistasPorEdad = (artistas, edad) =>{
 return artistas.filter((artista) => artista.edad === edad)

}; 

const cantidadDeArtistasPorInstrumento = (artistas) => {
 
  return artistas.reduce((acc, artista) =>{
    acc[artista.instrumento] ?  acc[artista.instrumento] += 1 : acc[artista.instrumento] = 1;
    return acc
  }, {})

};
const cantidadDeArtistasPorGenero = (artistas) => {
  return artistas.reduce ((acum,artista) => {
    if(acum[artista.genero]) {
      acum[artista.genero] += 1;
    } else {
      acum[artista.genero] = 1;
    }
    return acum
  }, {})
};
const artistasConMasDiscosQue = (artistas, cantDiscos) =>{
 let discos = artistas.filter(artista => artista.discos.length > cantDiscos).sort((a, b) => b.discos.length - a.discos.length)

 return discos;
}

const artistaConMasEntradasVendida = (artistas) =>
  artistas.reduce((artistaConMasEntradas, artista) =>
    artistaConMasEntradas.ultimoRecital.entradasVendidas >
    artista.ultimoRecital.entradasVendidas
      ? artistaConMasEntradas
      : artista
  );

  const artistaConMayorRecaudacion = (artistas) => {
    return artistas.reduce((artistaConMayorRecaudacion, artista) => {

        totalRecaudacion = artistaConMayorRecaudacion.ultimoRecital.entradasVendidas * 
        artistaConMayorRecaudacion.ultimoRecital.costoEntradas;
        
        artistaRecaudacion = artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas
       

        if ( totalRecaudacion > artistaRecaudacion ) {
           
            return artistaConMayorRecaudacion
        }
        else {
            
            return artista
        }
       
       
    })
};

const artistasConDiscoEnAnio = (artistas, anio) => {
    
  return artistas.filter( artista => artista.discos.some(disco => {
   
   return  disco.anioLanzamiento == anio;

  } ) )
};


const discos = (artistas) =>{
return artistas.reduce((totalDiscos, artista) => {
  totalDiscos += artista.disco.copiasVendidas;  
})
}


// const comparartistaConMasCopias = (artistas) =>{
//   if()
// }


const artistaConMasCopias = (artistas) => {
  return artistas.reduce((artistaConMasCopias, artista) => {
    if (cantidadDeCopiasVendidos(artistaConMasCopias.discos) > cantidadDeCopiasVendidos(artista.discos)) {
      return artistaConMasCopias;
    }
    return artista;
  })
}

const cantidadDeCopiasVendidos = (discos) => {
  return discos.reduce((accum, disco) => {
    return accum + disco.copiasVendidas
  }, 0)
} 




