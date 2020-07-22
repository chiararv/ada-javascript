const valorTotal = (objeto) => { 
        
  return (Object.values(objeto)).reduce((acumulador,valor) => {

      return acumulador + valor;
  });
};

const canBuyAllProduct = (money, objeto) => {

  const compras = valorTotal(objeto) <= money

  return compras;
};