import Link from "next/link";

export const metadata = { title: "Atendimento" };

export default function ServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Atendimento Segbom</span>
          <h1>Quando você precisa, a orientação certa faz diferença.</h1>
          <p>
            Encontre o caminho para solicitar alterações, renovação ou
            orientação inicial sobre um sinistro.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container service-grid">
          <article className="product-card">
            <span className="eyebrow">Já sou cliente</span>
            <h2>Atendimento da apólice</h2>
            <p>Solicite alterações, documentos, renovação ou esclareça dúvidas.</p>
            <Link className="text-link" href="/contato">Solicitar atendimento →</Link>
          </article>
          <article className="product-card">
            <span className="eyebrow">Sinistro</span>
            <h2>Preciso de orientação</h2>
            <p>Preserve a segurança das pessoas, registre o ocorrido e fale com a Segbom.</p>
            <Link className="text-link" href="/contato">Ver canais de contato →</Link>
          </article>
        </div>
      </section>
    </>
  );
}
