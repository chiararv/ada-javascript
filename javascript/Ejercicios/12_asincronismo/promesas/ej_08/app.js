const climaCincoDias = () => {
  const sumarDias = (f, d) =>
    new Date(new Date(Number(f)).setDate(f.getDate() + d));

  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const icons = ["🔆", "⛅", "🌩", "🌧", "⛈", "⛄"];

  return new Promise((resolve, reject) => {
    const diasClima = [];

    const int = setInterval(() => {
      const min = random(-1, 27),
        max = random(min, min + 10);

      if (
        diasClima.push({
          fecha: sumarDias(new Date(), diasClima.length),
          min,
          max,
          icono: icons[random(0, icons.length - 1)],
        }) === 5
      ) {
        clearInterval(int);
        resolve(diasClima);
      }
    }, 150);
  });
};

const dateFormat = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
};

climaCincoDias()
.then((res) => console.log(res.reduce( (acc, dias) => { return acc + `${dateFormat(dias.fecha)} - ${dias.icono}- Temp. Min ${dias.min} - Temp. Max ${dias.max} \n`},"")))


