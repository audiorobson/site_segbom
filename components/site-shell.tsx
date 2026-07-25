import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/site";
import { MobileNav } from "@/components/mobile-nav";

export function Logo({ variant = "default" }: { variant?: "default" | "negative" }) {
  const src = variant === "negative" ? "/logo-segbom-negativa.png" : "/logo-segbom.png";
  return (
    <Link className="logo" href="/" aria-label="Segbom — página inicial">
      <Image src={src} alt="Segbom Corretora de Seguros" width={505} height={582} priority />
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href="/cotacao">
          Solicitar cotação
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo variant="negative" />
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
