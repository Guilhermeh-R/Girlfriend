function validarPalavraChave(palavra: string) {
  return palavra.trim().toLowerCase() === "momo";
}
export async function login(palavraChave: string): Promise<boolean> {
  if (validarPalavraChave(palavraChave)) {
    return true;
  } else {
    throw new Error("Palavra-chave incorreta");
  }
}