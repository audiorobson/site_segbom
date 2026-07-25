export const metadata = { title: "Conteúdos" };

const posts = [
  ["Seguro Auto", "Como escolher uma proteção adequada para o seu veículo"],
  ["Seguro Residencial", "O que analisar antes de contratar um seguro residencial"],
  ["Empresas", "Quais riscos sua empresa deve considerar"],
];

export default function ContentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Conteúdos Segbom</span>
          <h1>Informação para escolher com mais segurança.</h1>
          <p>Guias e respostas claras sobre seguros, proteção e prevenção.</p>
        </div>
      </section>
      <section className="section">
        <div className="container product-grid">
          {posts.map(([category, title], index) => (
            <article className="product-card" key={title}>
              <span className="card-index">0{index + 1}</span>
              <span className="eyebrow">{category}</span>
              <h2>{title}</h2>
              <p>Conteúdo em preparação para a próxima etapa do projeto.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
