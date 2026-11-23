import { EMPRESA, WA_GERAL, IMAGENS } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-texto">
          <p className="hero-eyebrow">Pet shop · São Leopoldo/RS</p>
          <p className="hero-badge">Demonstração</p>
          <h1>
            Seu pet limpinho,
            <span className="hero-destaque"> feliz e cheiroso.</span>
          </h1>
          <p className="hero-descricao">{EMPRESA.descricao}</p>
          <p className="hero-slogan">“{EMPRESA.slogan}”</p>
          <p className="hero-projetos">
            <strong>Avaliação {EMPRESA.avaliacao} ★ no Google</strong> (
            {EMPRESA.avaliacoes}) — no Morro do Espelho, em São Leopoldo.
          </p>
          <div className="hero-acoes">
            <a
              className="btn btn-whatsapp"
              href={WA_GERAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <a className="btn btn-secundario" href="#servicos">
              Ver serviços
            </a>
            <a className="btn btn-secundario" href="#orcamento">
              Pedir orçamento
            </a>
          </div>
          <ul className="hero-chips">
            <li>Avaliação 5,0 ★</li>
            <li>Banho e tosa</li>
            <li>Atendimento direto</li>
          </ul>
        </div>

        <div className="hero-midia">
          <img
            src={IMAGENS.heroBanho}
            alt="Golden retriever tomando banho numa banheira de pet shop, feliz e relaxado (foto ilustrativa)"
          />
        </div>
      </div>

      <div className="container stats">
        <div className="stat">
          <strong>5,0 ★</strong>
          <span>avaliação no Google</span>
        </div>
        <div className="stat">
          <strong>16</strong>
          <span>avaliações de clientes</span>
        </div>
        <div className="stat">
          <strong>Ter–sáb</strong>
          <span>aberto de terça a sábado</span>
        </div>
        <div className="stat">
          <strong>WhatsApp</strong>
          <span>orçamento direto com a loja</span>
        </div>
      </div>
    </section>
  )
}
