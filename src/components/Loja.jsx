import { EMPRESA, IMAGENS, WA_GERAL } from '../data.js'

export default function Loja() {
  return (
    <section className="secao" id="loja">
      <div className="container espaco-grid">
        <div className="espaco-midia">
          <img
            src={IMAGENS.loja}
            alt="Tutora segurando um cachorrinho dentro de uma loja de produtos pet (foto ilustrativa)"
          />
        </div>
        <div>
          <p className="secao-kicker">A loja</p>
          <h2>Um pet shop de bairro, com carinho de verdade</h2>
          <p>
            A La Belle Petshop fica no Morro do Espelho, em São Leopoldo — um
            pet shop pequeno, onde quem atende é quem cuida do seu pet. Banho
            e tosa com hora marcada e produtos para o dia a dia na lojinha.
          </p>
          <p>
            Os clientes avaliam a loja com 5,0 estrelas no Google — e o
            atendimento é direto no WhatsApp, sem robô e sem enrolação.
          </p>
          <ul className="espaco-lista">
            <li>Banho e tosa com hora marcada</li>
            <li>Produtos, rações e acessórios na loja</li>
            <li>Atendimento direto com a loja no WhatsApp</li>
            <li>Avaliação 5,0 no Google (16 avaliações)</li>
            <li>No Morro do Espelho, em São Leopoldo</li>
          </ul>
          <a
            className="btn btn-primario"
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
