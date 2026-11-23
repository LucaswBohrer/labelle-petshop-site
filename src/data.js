// Dados públicos reais da La Belle Petshop (São Leopoldo/RS).
// Verificados em 23/11/2026 no Google/Places (place_id 338693678361998)
// e no Instagram @labellepetshop. Nenhum dado aqui foi inventado.
// - Preços: a loja NÃO publica tabela de preços — os serviços aparecem
//   sem valor, com "consulte no WhatsApp". Nenhum preço de mercado foi
//   apresentado como sendo dela (as tabelas encontradas na web são de
//   outros pet shops).
// - Agendamento online: nenhum sistema encontrado — o agendamento é via
//   WhatsApp.
// - CNPJ/razão social: não encontrados em fonte pública fiável — omitidos.
// - Fotos: a galeria do Places estava vazia e o Instagram bloqueia
//   download — as fotos do site são ilustrativas (ver images.js).

import {
  heroBanho,
  banhoToalha,
  tosa,
  banhoGato,
  produtos,
  loja,
} from './assets/images.js'

export const EMPRESA = {
  nome: 'La Belle Petshop',
  slogan: 'Cuidado e carinho em cada banho.',
  descricao:
    'Pet shop no Morro do Espelho, em São Leopoldo: banho e tosa com calma e carinho, produtos pet na loja e atendimento direto no WhatsApp.',
  endereco: 'R. Amadeo Rossi, 70',
  bairro: 'Morro do Espelho',
  cidadeUf: 'São Leopoldo/RS — CEP 93030-220',
  telefone: '(51) 98492-9596',
  whatsappNumero: '5551984929596',
  instagram: '@labellepetshop',
  instagramUrl: 'https://www.instagram.com/labellepetshop/',
  seguidores: '149 seguidores',
  avaliacao: '5,0',
  avaliacoes: '16 avaliações no Google',
  horarioSemana: 'Terça a sexta: 09:00 às 11:30 e 13:00 às 17:00',
  horarioSabado: 'Sábado: 08:30 às 12:00',
  horarioFechado: 'Domingo e segunda: fechado',
}

export const WA_GERAL =
  'https://wa.me/5551984929596?text=' +
  encodeURIComponent('Olá! Quero saber mais sobre a La Belle Petshop.')

export const MAPS_EMBED =
  'https://maps.google.com/maps?q=R.+Amadeo+Rossi,+70,+Sao+Leopoldo,+RS,+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed'

export const MAPS_ABRIR =
  'https://www.google.com/maps/search/?api=1&query=R.+Amadeo+Rossi,+70,+Sao+Leopoldo,+RS'

export const MAPS_ROTA =
  'https://www.google.com/maps/dir/?api=1&destination=R.+Amadeo+Rossi,+70,+Sao+Leopoldo,+RS'

// Serviços sem preços: a loja não publica tabela de preços. O valor é
// confirmado no WhatsApp e varia conforme o porte e a pelagem do pet.
export const SERVICOS = [
  {
    id: 'banho',
    nome: 'Banho',
    descricao:
      'Banho completo com shampoo próprio para o pet, secagem e escovação. Inclui corte de unhas e limpeza de ouvidos.',
    destaque: null,
  },
  {
    id: 'tosa',
    nome: 'Tosa',
    descricao:
      'Tosa na máquina ou na tesoura, conforme a raça e o pedido do tutor. Inclui tosa higiênica.',
    destaque: null,
  },
  {
    id: 'banho-tosa',
    nome: 'Banho + Tosa',
    descricao:
      'O ritual completo: banho, tosa, corte de unhas e limpeza de ouvidos — o pet sai limpinho e cheiroso.',
    destaque: 'Mais pedido',
  },
  {
    id: 'tosa-higienica',
    nome: 'Tosa Higiênica',
    descricao:
      'Aparos nas patinhas, na barriga e na região íntima. Conforto e higiene no dia a dia do pet.',
    destaque: null,
  },
  {
    id: 'banho-gato',
    nome: 'Banho para Gatos',
    descricao:
      'Banho calmo e cuidadoso para felinos, com produtos próprios e muita paciência.',
    destaque: null,
  },
  {
    id: 'produtos',
    nome: 'Produtos Pet',
    descricao:
      'Rações, petiscos, brinquedos e acessórios na loja. Consulte disponibilidade e valores no WhatsApp.',
    destaque: null,
  },
]

export const PASSOS = [
  {
    numero: 1,
    titulo: 'Chama no WhatsApp',
    texto:
      'Você conta o serviço que quer e o porte do pet — é só mandar uma mensagem.',
  },
  {
    numero: 2,
    titulo: 'Recebe o valor e o horário',
    texto:
      'A loja confirma o preço, que varia conforme o porte e a pelagem, e agenda o dia e a hora.',
  },
  {
    numero: 3,
    titulo: 'Traz o pet',
    texto:
      'Banho, tosa e cuidado com calma, no horário marcado e sem correria.',
  },
  {
    numero: 4,
    titulo: 'Pet feliz em casa',
    texto:
      'Seu pet volta limpinho, cheiroso e feliz — e você já pode marcar a próxima.',
  },
]

export const GALERIA = [
  {
    imagem: banhoToalha,
    titulo: 'Depois do banho',
    alt: 'Cachorrinho enrolado numa toalha depois do banho, sorrindo para a câmera (foto ilustrativa)',
  },
  {
    imagem: tosa,
    titulo: 'Tosa com carinho',
    alt: 'Profissional aparando o pelo de um cachorro com tesoura e pente (foto ilustrativa)',
  },
  {
    imagem: banhoGato,
    titulo: 'Banho para gatos',
    alt: 'Gato tomando banho com espuma, com cuidado (foto ilustrativa)',
  },
  {
    imagem: produtos,
    titulo: 'Na lojinha',
    alt: 'Prateleiras de uma loja de produtos pet com brinquedos e acessórios (foto ilustrativa)',
  },
]

export const IMAGENS = { heroBanho, loja }

export const PORTES = [
  'Pequeno (até 10 kg)',
  'Médio (10 a 25 kg)',
  'Grande (acima de 25 kg)',
  'Gato',
]

export const DIAS = [
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export const PERIODOS = {
  semana: ['Manhã (9h–11h30)', 'Tarde (13h–17h)'],
  sabado: ['Manhã (8h30–12h)'],
}
