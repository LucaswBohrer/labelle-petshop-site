import { EMPRESA, MAPS_EMBED, MAPS_ABRIR, MAPS_ROTA, WA_GERAL } from '../data.js'

export default function Contato() {
  return (
    <section className="secao" id="contato">
      <div className="container">
        <p className="secao-kicker">Contato</p>
        <h2>Onde encontrar a La Belle</h2>

        <div className="contato-grid">
          <div className="contato-dados">
            <p>
              <strong>Endereço</strong>
              <br />
              {EMPRESA.endereco}
              <br />
              {EMPRESA.bairro} — {EMPRESA.cidadeUf}
            </p>
            <p>
              <strong>WhatsApp</strong>
              <br />
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer">
                {EMPRESA.telefone}
              </a>
            </p>
            <p>
              <strong>Instagram</strong>
              <br />
              <a
                href={EMPRESA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {EMPRESA.instagram}
              </a>{' '}
              ({EMPRESA.seguidores})
            </p>
            <p>
              <strong>Avaliação</strong>
              <br />
              {EMPRESA.avaliacao} ★ — {EMPRESA.avaliacoes}
            </p>
            <p>
              <strong>Horário de funcionamento</strong>
              <br />
              {EMPRESA.horarioSemana}
              <br />
              {EMPRESA.horarioSabado}
              <br />
              {EMPRESA.horarioFechado}
            </p>
            <div className="contato-acoes">
              <a
                className="btn btn-whatsapp"
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <a
                className="btn btn-secundario"
                href={EMPRESA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver o Instagram
              </a>
            </div>
          </div>

          <div className="contato-mapa">
            <iframe
              title="Mapa — La Belle Petshop, Rua Amadeo Rossi, 70, São Leopoldo"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mapa-acoes">
              <a href={MAPS_ABRIR} target="_blank" rel="noopener noreferrer">
                Abrir no Google Maps
              </a>
              <a href={MAPS_ROTA} target="_blank" rel="noopener noreferrer">
                Traçar rota
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
