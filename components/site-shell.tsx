import Link from "next/link";

const navigation = [
  ["A Segbom", "/sobre"],
  ["Seguros", "/seguros"],
  ["Para empresas", "/seguros/empresarial"],
  ["Atendimento", "/atendimento"],
  ["Conteúdos", "/conteudos"],
] as const;

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Segbom — página inicial">
      SEGBOM<span>.</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small" href="/cotacao">
          Solicitar cotação
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Segurança sob medida, atendimento humano e orientação clara para
            proteger o que importa.
          </p>
        </div>
        <div>
          <strong>Seguros</strong>
          <Link href="/seguros/auto">Seguro Auto</Link>
          <Link href="/seguros/residencial">Seguro Residencial</Link>
          <Link href="/seguros/vida">Seguro de Vida</Link>
          <Link href="/seguros/empresarial">Seguro Empresarial</Link>
        </div>
        <div>
          <strong>Segbom</strong>
          <Link href="/sobre">Sobre nós</Link>
          <Link href="/atendimento">Atendimento</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/privacidade">Privacidade</Link>
        </div>
        <div>
          <strong>Vamos conversar?</strong>
          <p>Os canais oficiais serão adicionados após a validação dos dados.</p>
          <Link className="text-link" href="/cotacao">
            Solicitar atendimento →
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Segbom. Todos os direitos reservados.
      </div>
    </footer>
  );
}
