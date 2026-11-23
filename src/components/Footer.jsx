import { EMPRESA } from '../data.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              🐾
            </span>{' '}
            <strong>LA BELLE</strong> PETSHOP
          </p>
          <p>{EMPRESA.slogan}</p>
        </div>
        <div>
          <p>
            <strong>Endereço</strong>
            <br />
            {EMPRESA.endereco}
            <br />
            {EMPRESA.bairro} — {EMPRESA.cidadeUf}
          </p>
        </div>
        <div>
          <p>
            <strong>Contato</strong>
            <br />
            WhatsApp: {EMPRESA.telefone}
            <br />
            Instagram:{' '}
            <a
              href={EMPRESA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMPRESA.instagram}
            </a>
          </p>
        </div>
        <div>
          <p>
            <strong>Horário</strong>
            <br />
            {EMPRESA.horarioSemana}
            <br />
            {EMPRESA.horarioSabado}
            <br />
            {EMPRESA.horarioFechado}
          </p>
        </div>
      </div>
      <p className="footer-demo">
        Site conceito em demonstração — ainda não é o site oficial da La Belle
        Petshop.
      </p>
    </footer>
  )
}
