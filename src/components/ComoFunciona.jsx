import { PASSOS } from '../data.js'

export default function ComoFunciona() {
  return (
    <section className="secao" id="como-funciona">
      <div className="container">
        <p className="secao-kicker">Como funciona</p>
        <h2>Agendar é simples</h2>
        <p className="secao-sub">
          Tudo direto no WhatsApp com a loja — sem aplicativo, sem cadastro.
        </p>

        <div className="grade-passos">
          {PASSOS.map((p) => (
            <article className="card-passo" key={p.numero}>
              <span className="passo-numero">{p.numero}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
