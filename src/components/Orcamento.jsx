import { useState } from 'react'
import { SERVICOS, PORTES, DIAS, PERIODOS, EMPRESA } from '../data.js'

export default function Orcamento() {
  const [servico, setServico] = useState('banho-tosa')
  const [porte, setPorte] = useState('Pequeno (até 10 kg)')
  const [dia, setDia] = useState('Sexta-feira')
  const [periodo, setPeriodo] = useState('Tarde (13h–17h)')
  const [nomePet, setNomePet] = useState('')

  const periodos = dia === 'Sábado' ? PERIODOS.sabado : PERIODOS.semana
  const periodoValido = periodos.includes(periodo) ? periodo : periodos[0]
  const servicoEscolhido =
    SERVICOS.find((s) => s.id === servico) || SERVICOS[0]

  const linhas = [
    'Olá! Quero pedir um orçamento na La Belle Petshop.',
    '',
    `Serviço: ${servicoEscolhido.nome}`,
    `Porte do pet: ${porte}`,
    `Dia preferido: ${dia}`,
    `Período preferido: ${periodoValido}`,
  ]
  if (nomePet.trim()) linhas.push(`Nome do pet: ${nomePet.trim()}`)
  linhas.push('', 'Pode me passar o valor e confirmar a disponibilidade?')

  const linkWhatsApp =
    'https://wa.me/' +
    EMPRESA.whatsappNumero +
    '?text=' +
    encodeURIComponent(linhas.join('\n'))

  return (
    <section className="secao secao-escura" id="orcamento">
      <div className="container">
        <p className="secao-kicker">Orçamento</p>
        <h2>Peça um orçamento no WhatsApp</h2>
        <p className="secao-sub">
          Monte o pedido aqui — a mensagem já vai pronta para o WhatsApp da
          loja. Os valores variam conforme o porte e a pelagem do pet.
        </p>

        <div className="agendamento-grid">
          <div className="agendamento-form">
            <label>
              Serviço
              <select
                value={servico}
                onChange={(e) => setServico(e.target.value)}
              >
                {SERVICOS.map((s) => (
                  <option value={s.id} key={s.id}>
                    {s.nome}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Porte do pet
              <select value={porte} onChange={(e) => setPorte(e.target.value)}>
                {PORTES.map((p) => (
                  <option value={p} key={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Dia preferido
              <select value={dia} onChange={(e) => setDia(e.target.value)}>
                {DIAS.map((d) => (
                  <option value={d} key={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Período preferido
              <select
                value={periodoValido}
                onChange={(e) => setPeriodo(e.target.value)}
              >
                {periodos.map((p) => (
                  <option value={p} key={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Nome do pet <span className="opcional">(opcional)</span>
              <input
                type="text"
                value={nomePet}
                onChange={(e) => setNomePet(e.target.value)}
                placeholder="Como se chama o seu pet?"
              />
            </label>
          </div>

          <div className="agendamento-resumo">
            <h3>Seu pedido</h3>
            <dl>
              <div>
                <dt>Serviço</dt>
                <dd>{servicoEscolhido.nome}</dd>
              </div>
              <div>
                <dt>Porte</dt>
                <dd>{porte}</dd>
              </div>
              <div>
                <dt>Dia</dt>
                <dd>{dia}</dd>
              </div>
              <div>
                <dt>Período</dt>
                <dd>{periodoValido}</dd>
              </div>
              {nomePet.trim() && (
                <div>
                  <dt>Pet</dt>
                  <dd>{nomePet.trim()}</dd>
                </div>
              )}
            </dl>
            <a
              className="btn btn-whatsapp"
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir orçamento no WhatsApp
            </a>
            <p className="nota">
              Isto envia um pedido de orçamento — a loja confirma o valor e a
              disponibilidade no WhatsApp. Não é uma reserva automática.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
