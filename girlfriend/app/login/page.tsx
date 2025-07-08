"use client";
import "./login.css";
import { useRouter } from "next/navigation";
import { login } from "./login";
import { useEffect, useState } from "react";


export default function Login() {
  const [palavra, setPalavra] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (erro) {
      const timer = setTimeout(() => setErro(""), 5000); // 5 segundos
      return () => clearTimeout(timer);
    }
  }, [erro]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(palavra);
      router.push("/home"); 
    } catch (err) {
      setErro("Que isso momo ta vacilando!");
    }
  }
  return (
    <div className="login-background">
      <form onSubmit={handleSubmit}>
        <h1>Qual a palavrinha que sempre usamos juntos?</h1>
        <input
          id="input"
          type="text"
          placeholder='Seria "Momo"?'
          value={palavra}
          onChange={e => setPalavra(e.target.value)}
        />
        <button type="submit">Entrar</button>
        {erro && (
            <div className="erro-box">
            {erro}
            </div>
        )}
      </form>
    </div>
  );

}