import { WA_GERAL } from '../data.js'

export default function BotaoWhatsApp() {
  return (
    <a
      className="whatsapp-flutuante"
      href={WA_GERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a La Belle Petshop no WhatsApp"
    >
      WhatsApp
    </a>
  )
}
