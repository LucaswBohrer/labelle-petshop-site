# La Belle Petshop — Pet shop em São Leopoldo/RS | Site em React + Vite

Site demonstração em **React 18 + Vite** para a La Belle Petshop
(São Leopoldo/RS). Reconstrução em React com os dados públicos reais da
loja, no mesmo modelo dos sites da VS Energy e da Barbearia Marquês.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build   # gera dist/
npm run preview # serve o build localmente
```

## Deploy na Vercel

Projeto Vite padrão: framework **Vite**, comando de build `npm run build`,
diretório de saída `dist`. Nenhuma variável de ambiente necessária.

## Dados verificados (23/11/2026)

- Endereço, telefone e horário: Google/Places (place_id 338693678361998)
- Instagram: @labellepetshop (149 seguidores) — avaliação 5,0 ★ (16 avaliações)
- **Preços: a loja NÃO publica tabela de preços** — os serviços aparecem
  sem valor, com "consulte no WhatsApp". Nenhum preço de mercado foi
  apresentado como sendo dela.
- Agendamento online: nenhum sistema encontrado — agendamento via WhatsApp.
- CNPJ/razão social: não encontrados em fonte pública fiável — omitidos.
- Fotos: a galeria do Places estava vazia e o Instagram bloqueia download —
  as fotos do site são ilustrativas (banco de imagens livre), com aviso de
  honestidade no site e link para o Instagram original.

## Estrutura

- `index.html` — entrada Vite, título e fontes (Baloo 2 + Manrope)
- `src/main.jsx` — bootstrap do React
- `src/App.jsx` — composição das secções
- `src/data.js` — todos os dados públicos verificados
- `src/assets/images.js` — imagens ilustrativas embutidas em base64
- `src/components/` — FaixaDemonstracao, Header, Hero, Servicos, Galeria,
  ComoFunciona, Orcamento, Loja, Contato, SobreDemonstracao, Footer,
  BotaoWhatsApp
