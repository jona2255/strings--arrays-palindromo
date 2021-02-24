function esPalindromo(frase) {
  let fraseModificada = frase.toLowerCase();
  fraseModificada = fraseModificada.replace(/[.,:; ()_ ?¿!¡-\s]/g, "");
  fraseModificada = fraseModificada.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let fraseAlReves = "";
  fraseAlReves = frasseModificada.split("").reverse().join();
  /* Versión cutre                            
  for (let index = fraseModificada.length - 1; index >= 0; index--) {
    fraseAlReves += fraseModificada[index];
  }
  */
  console.log(fraseModificada);
  console.log(fraseAlReves);
  return fraseModificada === fraseAlReves;
}
const frase = "Amigo, no gíMa";
if (esPalindromo(frase)) {
  console.log(`${frase} es palindromo`);
} else {
  console.log(`${frase} no es palindromo`);
}
