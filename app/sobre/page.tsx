import Link from "next/link";

export const metadata = { title: "Sobre a Segbom" };

const values = [
  "Ética e transparência",
  "Compromisso com o cliente",
  "Atendimento humanizado",
  "Excelência e agilidade",
  "Confiança e credibilidade",
  "Responsabilidade e inovação",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Sobre a Segbom</span>
          <h1>Proteção se constrói com confiança.</h1>
          <p>
            Tornamos a contratação de seguros mais clara, próxima e segura,
            unindo atendimento humano, orientação e agilidade.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split align-start">
          <div>
            <span className="eyebrow">Nosso compromisso</span>
            <h2>Mais do que seguros, relacionamentos duradouros.</h2>
          </div>
          <div className="prose">
            <p>
              Na Segbom, proteger significa cuidar de pessoas, preservar
              conquistas e oferecer tranquilidade para enfrentar imprevistos.
            </p>
            <p>
              Acompanhamos nossos clientes da análise das necessidades à
              contratação, renovação e orientação em caso de sinistro.
            </p>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container value-grid">
          {values.map((value, index) => (
            <article key={value}>
              <span>0{index + 1}</span>
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="section final-cta">
        <div className="container">
          <h2>Segurança sob medida. Atendimento de verdade.</h2>
          <Link className="button" href="/cotacao">Falar com a Segbom</Link>
        </div>
      </section>
    </>
  );
}
