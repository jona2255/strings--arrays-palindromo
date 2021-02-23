function esPalindromo(frase) {
  let fraseModificada = frase.toLowerCase();
  fraseModificada = fraseModificada.split(/[.,:; ()_ ?¿!¡-\s]/g);
  fraseModificada = fraseModificada.join("");
  let fraseAlReves = "";
  for (let index = fraseModificada.length - 1; index >= 0; index--) {
    fraseAlReves += fraseModificada[index];
  }
  console.log(fraseModificada);
  console.log(fraseAlReves);
  return fraseModificada === fraseAlReves;
}
const frase = "Amigo, no gima";
if (esPalindromo(frase)) {
  console.log(`${frase} es palindromo`);
} else {
  console.log(`${frase} no es palindromo`);
}
