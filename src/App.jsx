import FaixaDemonstracao from './components/FaixaDemonstracao.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Servicos from './components/Servicos.jsx'
import Galeria from './components/Galeria.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Orcamento from './components/Orcamento.jsx'
import Loja from './components/Loja.jsx'
import Contato from './components/Contato.jsx'
import SobreDemonstracao from './components/SobreDemonstracao.jsx'
import Footer from './components/Footer.jsx'
import BotaoWhatsApp from './components/BotaoWhatsApp.jsx'

export default function App() {
  return (
    <>
      <div className="topo-fixo">
        <FaixaDemonstracao />
        <Header />
      </div>
      <main>
        <Hero />
        <Servicos />
        <Galeria />
        <ComoFunciona />
        <Orcamento />
        <Loja />
        <Contato />
        <SobreDemonstracao />
      </main>
      <Footer />
      <BotaoWhatsApp />
      <span className="selo-demo-flutuante" aria-hidden="true">
        DEMO
      </span>
    </>
  )
}
