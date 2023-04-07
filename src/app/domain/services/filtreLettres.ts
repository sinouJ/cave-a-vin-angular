// Code simpliste, le filtrage de saisie est un problème complexe
// (touches spéciales, copier/coller, etc)
public filtreLettres(event: KeyboardEvent): void { 
  // Autorisation de touches comme backspace ou tab
  if (event.keyCode <= 20) {
    return;
  }
  // Astuce JS pour détecter les lettres
  const char = String.fromCharCode(event.which);
  if (char.toLowerCase() === char.toUpperCase()) {
    event.preventDefault();
  }
}