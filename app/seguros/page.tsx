import Link from "next/link";
import { products } from "@/data/site";

export const metadata = { title: "Seguros" };

export default function InsurancePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Soluções Segbom</span>
          <h1>Proteção pensada para cada necessidade.</h1>
          <p>
            Para sua vida, sua família, seu patrimônio ou sua empresa, encontre
            orientação para escolher com mais segurança.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container product-grid">
          {products.map((product, index) => (
            <Link className="product-card" href={`/seguros/${product.slug}`} key={product.slug}>
              <span className="card-index">0{index + 1}</span>
              <span className="eyebrow">{product.eyebrow}</span>
              <h2>{product.title}</h2>
              <p>{product.short}</p>
              <span className="text-link">Conhecer esta proteção →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
