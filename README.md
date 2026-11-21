# TY Estoque

Base do sistema de gestão e ponto de venda para loja de roupas.

## Requisitos

- Node.js 20.9 ou superior
- npm
- Projeto Supabase

## Instalação

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Edite `.env.local` com a URL do projeto Supabase e a chave publicável (anon/public). A aplicação abre em `http://localhost:3000`.

## Supabase

1. Crie um projeto no [painel do Supabase](https://supabase.com/dashboard).
2. Em **Project Settings → API**, copie a **Project URL** e a **Publishable key** (ou a chave `anon` legada).
3. Preencha `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` em `.env.local`.
4. Reinicie o servidor local após alterar variáveis de ambiente.

Esta etapa prepara clientes Supabase para navegador e servidor e o ponto de renovação de sessão. Ainda não cria tabelas, políticas RLS, usuários, buckets ou fluxos de autenticação. A chave `service_role`/secret não deve ser adicionada às variáveis `NEXT_PUBLIC_*` nem enviada ao navegador.

## Estrutura

- `app/`: rotas, layout e estilos globais do App Router.
- `components/`: componentes de interface.
- `lib/supabase/`: clientes Supabase para navegador e servidor.
- `proxy.js`: renovação de sessão Supabase para renderização no servidor.

O dashboard inicial é uma base visual com conteúdo de demonstração vazio. Os módulos de caixa, vendas, estoque, etiquetas, cancelamentos/devoluções e financeiro serão implementados em etapas posteriores, após aprovação.
