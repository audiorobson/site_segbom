import Link from "next/link";
import { differentials, products } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Segbom Corretora de Seguros</span>
            <h1>Proteção para viver, crescer e seguir em frente.</h1>
            <p>
              Seguros personalizados para sua vida, sua família, seu patrimônio
              e sua empresa, com orientação clara em todas as etapas.
            </p>
            <div className="button-row">
              <Link className="button" href="/cotacao">
                Solicitar uma cotação
              </Link>
              <Link className="button button-ghost" href="/sobre">
                Conhecer a Segbom
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="shield">
              <span>Proteção</span>
              <strong>sob medida</strong>
              <small>para cada fase</small>
            </div>
            <div className="floating-card card-one">Atendimento humano</div>
            <div className="floating-card card-two">Suporte próximo</div>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Diferenciais rápidos">
        <div className="container trust-items">
          <span>Atendimento personalizado</span>
          <span>Soluções para pessoas e empresas</span>
          <span>Orientação clara</span>
          <span>Suporte em todas as etapas</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Nossas soluções</span>
              <h2>Proteção para cada momento da sua vida.</h2>
            </div>
            <p>
              Analisamos seu perfil para ajudar você a encontrar uma solução
              compatível com suas necessidades.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <Link
                className={`product-card product-card-${index + 1}`}
                href={`/seguros/${product.slug}`}
                key={product.slug}
              >
                <span className="card-index">0{index + 1}</span>
                <span className="eyebrow">{product.eyebrow}</span>
                <h3>{product.title}</h3>
                <p>{product.short}</p>
                <span className="text-link">Conhecer esta proteção →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <div>
            <span className="eyebrow eyebrow-light">A Segbom</span>
            <h2>Seguro se escolhe com confiança.</h2>
          </div>
          <div>
            <p className="large-copy">
              A contratação de um seguro envolve decisões importantes. Na
              Segbom, você conta com atendimento consultivo para compreender,
              comparar e escolher com mais clareza.
            </p>
            <Link className="text-link text-link-light" href="/sobre">
              Conheça nossa forma de atender →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">Por que a Segbom?</span>
              <h2>Presença de verdade.</h2>
            </div>
          </div>
          <div className="differential-grid">
            {differentials.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section business-section">
        <div className="container business-card">
          <div>
            <span className="eyebrow eyebrow-light">Para empresas</span>
            <h2>Sua empresa preparada para continuar.</h2>
            <p>
              Soluções para proteger estruturas, equipamentos, operações,
              equipes e a continuidade do seu negócio.
            </p>
          </div>
          <Link className="button button-light" href="/seguros/empresarial">
            Analisar a proteção da empresa
          </Link>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <span className="eyebrow">Vamos conversar?</span>
          <h2>A proteção certa começa com uma boa conversa.</h2>
          <p>
            Conte o que você deseja proteger. A Segbom orienta você na busca
            pela solução adequada.
          </p>
          <Link className="button" href="/cotacao">
            Solicitar atendimento
          </Link>
        </div>
      </section>
    </>
  );
}
