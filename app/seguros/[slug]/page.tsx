import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/site";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <>
      <section className="page-hero product-hero">
        <div className="container split">
          <div>
            <span className="eyebrow">{product.eyebrow}</span>
            <h1>{product.headline}</h1>
            <p>{product.description}</p>
            <div className="button-row">
              <Link className="button" href={`/cotacao?produto=${product.slug}`}>
                Solicitar cotação
              </Link>
              <Link className="button button-ghost" href="/contato">
                Tirar uma dúvida
              </Link>
            </div>
          </div>
          <div className="feature-panel">
            <span>Possibilidades de proteção</span>
            {product.features.map((feature) => (
              <div key={feature}>✓ {feature}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split align-start">
          <div>
            <span className="eyebrow">Sob medida</span>
            <h2>Uma proteção compatível com a sua realidade.</h2>
          </div>
          <div>
            <p className="large-copy">
              A Segbom considera suas necessidades, características e objetivos
              para orientar a comparação das alternativas disponíveis.
            </p>
            <p className="legal-note">
              Coberturas, assistências, limites, franquias, carências e
              condições de aceitação variam conforme o produto, o perfil e a
              seguradora. Consulte as condições antes da contratação.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
