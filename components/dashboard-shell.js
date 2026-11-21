"use client";

import { useState } from "react";

const iconPaths = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
  bag: <><path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
  barcode: <><path d="M4 5v14M7 5v14M10 5v14M14 5v14M17 5v14M20 5v14"/><path d="M3 3h18M3 21h18"/></>,
  box: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  wallet: <><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M16 15h2"/></>,
  chart: <><path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 6-7"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.9l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1-.1 1.8Z" transform="translate(-1 -1)"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  receipt: <><path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z"/><path d="M8 8h8M8 12h8M8 16h4"/></>,
  tag: <><path d="M20 13 13 20 3 10V4h6l11 9Z"/><circle cx="7.5" cy="7.5" r="1"/></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
};

function Icon({ name, size = 18 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>;
}

const sections = [
  { label: "Visão geral", links: [{ name: "Dashboard", icon: "grid", active: true }] },
  { label: "Operação", links: [
    { name: "Ponto de venda", icon: "bag" }, { name: "Caixa", icon: "wallet" },
    { name: "Produtos", icon: "barcode" }, { name: "Estoque", icon: "box" },
    { name: "Etiquetas", icon: "tag" }, { name: "Clientes", icon: "users" },
  ] },
  { label: "Gestão", links: [
    { name: "Financeiro", icon: "receipt" }, { name: "Relatórios", icon: "chart" },
    { name: "Configurações", icon: "settings" },
  ] },
];

const metrics = [
  { label: "Faturamento hoje", value: "—", note: "Aguardando conexão com os dados", icon: "wallet" },
  { label: "Vendas realizadas", value: "—", note: "Resumo do dia", icon: "receipt" },
  { label: "Lucro estimado", value: "—", note: "Calculado após as vendas", icon: "chart" },
  { label: "Itens em estoque", value: "—", note: "Acompanhe o saldo da loja", icon: "box" },
];

export default function DashboardShell() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <button aria-label="Fechar navegação" className={`overlay ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(false)} />
      <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <a href="#inicio" className="brand" aria-label="TY Estoque, início">
          <span className="brand-mark">TY</span><span><span className="brand-name">TY Estoque</span><span className="brand-caption">Gestão para sua loja</span></span>
        </a>
        <nav aria-label="Navegação principal">
          {sections.map((section) => <div key={section.label} className="nav-section">
            <div className="nav-label">{section.label}</div>
            <div className="nav-list">{section.links.map((link) => <a key={link.name} href={link.active ? "#inicio" : "#"} onClick={() => setMenuOpen(false)} className={`nav-link ${link.active ? "active" : ""}`} aria-current={link.active ? "page" : undefined}>
              <span className="nav-icon"><Icon name={link.icon} size={17}/></span>{link.name}
            </a>)}</div>
          </div>)}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><strong>Precisa de ajuda?</strong><span>Seu espaço de trabalho está sendo preparado.</span></div>
          <div className="profile"><div className="avatar">TY</div><div><div className="profile-name">Minha loja</div><div className="profile-role">Administrador</div></div></div>
        </div>
      </aside>

      <main className="main-area" id="inicio">
        <header className="topbar">
          <div className="topbar-left"><button className="icon-button mobile-menu" aria-label="Abrir navegação" onClick={() => setMenuOpen(true)}><Icon name="menu"/></button><div className="breadcrumb">Visão geral <span aria-hidden="true">/</span> Dashboard</div></div>
          <div className="topbar-right"><span className="top-date">Painel da loja</span><button className="icon-button" aria-label="Notificações"><Icon name="bell" size={17}/></button></div>
        </header>

        <div className="content">
          <section className="welcome-row" aria-labelledby="dashboard-title">
            <div><div className="eyebrow">Visão geral</div><h1 id="dashboard-title" className="page-title">Bom dia 👋</h1><p className="page-subtitle">Acompanhe o movimento e a saúde da sua loja.</p></div>
            <div className="period-chip"><Icon name="calendar" size={16}/> Hoje <span aria-hidden="true">⌄</span></div>
          </section>

          <section className="metrics-grid" aria-label="Indicadores da loja">
            {metrics.map((metric) => <article className="metric-card" key={metric.label}>
              <div className="metric-top"><span>{metric.label}</span><span className="metric-symbol"><Icon name={metric.icon} size={16}/></span></div>
              <div className="metric-value">{metric.value}</div><div className="metric-foot">{metric.note}</div>
            </article>)}
          </section>

          <section className="panel-grid" aria-label="Resumo e atividade">
            <article className="panel"><div className="panel-heading"><div><h2 className="panel-title">Visão de vendas</h2><div className="panel-caption">O gráfico será preenchido quando os dados estiverem disponíveis.</div></div></div>
              <div className="chart-placeholder" aria-label="Área reservada para o gráfico de vendas">{["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, i) => <div className="chart-column" key={day}><div className={`chart-bar ${i === 5 ? "emphasis" : ""}`} style={{ height: `${[38, 55, 45, 70, 53, 84, 40][i]}%` }}/><span className="chart-label">{day}</span></div>)}</div>
            </article>
            <article className="panel"><div className="panel-heading"><div><h2 className="panel-title">Atividade recente</h2><div className="panel-caption">Vendas e movimentações da loja</div></div></div>
              <div className="empty-state"><span className="empty-symbol"><Icon name="receipt" size={19}/></span><strong>Nenhuma atividade ainda</strong><span>Os registros aparecerão aqui.</span></div>
            </article>
          </section>

          <section className="quick-grid" aria-label="Acessos rápidos">
            {[
              { title: "Nova venda", detail: "Abrir o ponto de venda", icon: "bag" },
              { title: "Abrir caixa", detail: "Iniciar o expediente", icon: "wallet" },
              { title: "Cadastrar produto", detail: "Adicionar ao catálogo", icon: "barcode" },
              { title: "Imprimir etiquetas", detail: "Identificar produtos", icon: "tag" },
            ].map((item) => <a className="quick-link" href="#" key={item.title}><span className="quick-icon"><Icon name={item.icon} size={17}/></span><span><strong>{item.title}</strong><span>{item.detail}</span></span><Icon name="arrow" size={15}/></a>)}
          </section>
        </div>
      </main>
    </div>
  );
}
