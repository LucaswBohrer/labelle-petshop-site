import { GALERIA, EMPRESA } from '../data.js'

export default function Galeria() {
  return (
    <section className="secao secao-escura" id="galeria">
      <div className="container">
        <p className="secao-kicker">Galeria</p>
        <h2>Um dia de spa para o seu pet</h2>
        <p className="secao-sub">
          Banho, tosa e os produtos da lojinha. As fotos abaixo são
          ilustrativas — os pets de verdade da La Belle estão no Instagram.
        </p>

        <div className="grade-galeria">
          {GALERIA.map((g) => (
            <a
              className="card-galeria"
              key={g.titulo}
              href={EMPRESA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver o Instagram da La Belle Petshop: ${g.titulo}`}
            >
              <img src={g.imagem} alt={g.alt} loading="lazy" />
              <span>{g.titulo}</span>
            </a>
          ))}
        </div>

        <p className="galeria-rodape">
          Veja os pets de verdade no Instagram{' '}
          <a
            href={EMPRESA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {EMPRESA.instagram}
          </a>{' '}
          ({EMPRESA.seguidores}).
        </p>
      </div>
    </section>
  )
}
