import { SERVICOS, WA_GERAL } from '../data.js'

export default function Servicos() {
  return (
    <section className="secao" id="servicos">
      <div className="container">
        <p className="secao-kicker">Serviços</p>
        <h2>Banho, tosa e tudo para o seu pet</h2>
        <p className="secao-sub">
          Banho e tosa feitos com calma e carinho, e uma lojinha com produtos
          para o dia a dia do seu melhor amigo.
        </p>

        <div className="grade-servicos">
          {SERVICOS.map((s) => (
            <article className="card-servico" key={s.id}>
              {s.destaque && <span className="selo">{s.destaque}</span>}
              <h3>{s.nome}</h3>
              <p>{s.descricao}</p>
              <p className="servico-preco">Consulte no WhatsApp</p>
              <a
                className="btn btn-primario"
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir orçamento
              </a>
            </article>
          ))}
        </div>

        <p className="servicos-rodape">
          Os valores variam conforme o porte e a pelagem do pet — a loja
          confirma o preço no WhatsApp, sem compromisso.
        </p>
      </div>
    </section>
  )
}
