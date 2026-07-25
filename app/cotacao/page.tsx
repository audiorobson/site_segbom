export const metadata = { title: "Solicitar cotação" };

export default function QuotePage() {
  return (
    <section className="page-hero quote-page">
      <div className="container split align-start">
        <div>
          <span className="eyebrow">Cotação Segbom</span>
          <h1>O que você deseja proteger?</h1>
          <p>
            Envie as informações iniciais. A equipe Segbom entrará em contato
            para entender sua necessidade.
          </p>
        </div>
        <form className="quote-form">
          <label>
            Tipo de proteção
            <select name="produto" required defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Seguro Auto</option>
              <option>Seguro Residencial</option>
              <option>Seguro de Vida</option>
              <option>Seguro Empresarial</option>
              <option>Plano de Saúde</option>
              <option>Outro</option>
            </select>
          </label>
          <label>
            Nome
            <input name="nome" autoComplete="name" required />
          </label>
          <label>
            WhatsApp
            <input name="telefone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Como podemos ajudar?
            <textarea name="mensagem" rows={4} />
          </label>
          <label className="consent">
            <input name="consentimento" type="checkbox" required />
            <span>
              Autorizo o uso dos dados para que a Segbom entre em contato,
              conforme a Política de Privacidade.
            </span>
          </label>
          <button className="button" type="submit">
            Enviar solicitação de cotação
          </button>
          <small>
            Formulário visual. A integração de envio será configurada após a
            definição do canal de atendimento.
          </small>
        </form>
      </div>
    </section>
  );
}
