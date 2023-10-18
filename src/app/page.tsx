import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("https://viacep.com.br/ws/37130115/json/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log("NAO CONSEGUI CHAMAR A API");
  }

  const result = await response.json();

  return (
    <>
      Logradouro: {result.logradouro}
      <br />
      Bairro: {result.bairro}
      <br />
      Cidade: {result.localidade}
      <br />
      UF: {result.uf}
    </>
  );
}
