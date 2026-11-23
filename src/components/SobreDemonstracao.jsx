import { EMPRESA } from '../data.js'

export default function SobreDemonstracao() {
  return (
    <section className="secao sobre-demo" id="sobre-demonstracao">
      <div className="container sobre-demo-grid">
        <div>
          <p className="secao-kicker">Sobre esta demonstração</p>
          <h2>Demonstração</h2>
          <p>
            Este site é um modelo de apresentação criado para demonstrar como
            ficaria a presença online da La Belle Petshop — ele usa os dados
            públicos reais da loja (endereço, WhatsApp, Instagram, horários e
            avaliação no Google), mas ainda não é o site oficial. A loja não
            publica tabela de preços, por isso os valores são confirmados no
            WhatsApp — e este site não inventa preços. As fotos desta página
            são ilustrativas; os pets de verdade e as fotos da loja estão no
            Instagram{' '}
            <a
              href={EMPRESA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMPRESA.instagram}
            </a>
            .
          </p>
          <p>
            Na versão final, entram as fotos originais fornecidas pela loja,
            os ajustes de cores e textos aprovados por ela e a publicação no
            domínio próprio da La Belle Petshop.
          </p>
        </div>
      </div>
    </section>
  )
}
