import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <span className="eyebrow">Erro 404</span>
        <h1>Parece que esta página não está protegida por aqui.</h1>
        <p>O endereço pode ter mudado ou não estar mais disponível.</p>
        <Link className="button" href="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
