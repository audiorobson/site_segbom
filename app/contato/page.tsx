import Link from "next/link";

export const metadata = { title: "Contato" };

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <span className="eyebrow">Contato</span>
        <h1>Vamos encontrar a proteção certa para você?</h1>
        <p>
          Os canais oficiais de telefone, WhatsApp, e-mail, endereço e horário
          serão publicados após a validação dos dados da empresa.
        </p>
        <Link className="button" href="/cotacao">Solicitar cotação</Link>
      </div>
    </section>
  );
}
