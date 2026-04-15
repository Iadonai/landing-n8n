import Image from "next/image";
import TickerTools from "./components/TickerTools";
import ModulosGrid from "./components/ModulosGrid";
import ProjetosGrid from "./components/ProjetosGrid";


const SKILLS = [
  "Criar automações sem saber programar",
  "Construir agentes de IA generativa",
  "Integrar WhatsApp e Instagram com IA",
  "Montar sua própria infraestrutura VPS",
  "Implementar RAG com Pinecone e Qdrant",
  "Automatizar criação de vídeos e imagens",
  "Usar Evolution API para chatbots",
  "Criar um Agente SQL com Supabase",
  "Integrar múltiplas APIs em um único fluxo",
  "Gerar conteúdo visual com DALL·E 3",
  "Configurar MCP para IA com memória",
  "Analisar sentimentos em tempo real",
];


const PARA_QUEM = [
  { icon: "💼", label: "Profissionais de tecnologia e entusiastas de IA" },
  { icon: "🏢", label: "Agências e freelancers que querem automatizar atendimento" },
  { icon: "🤖", label: "Criadores de bots, assistentes e chatbots com IA" },
  { icon: "🌱", label: "Iniciantes que querem aprender do zero na prática" },
  { icon: "🔌", label: "Quem quer integrar IA generativa com APIs reais" },
];

const RESULTADOS = [
  "Automatizar processos do seu negócio",
  "Criar chatbots inteligentes com IA",
  "Integrar APIs sem saber programar",
  "Gerar conteúdo visual com IA",
  "Montar sua própria infraestrutura",
  "Vender soluções de automação",
];

const DEPOIMENTOS = [
  {
    nome: "Ederson Couto",
    cargo: "⭐⭐⭐⭐⭐",
    texto: "Muito bom, excelentes conteúdos. Sabemos o quão imensa é a área de automações e IA e o Rafael conseguiu trazer muitos exemplos de usabilidade. Excelente conteúdo.",
  },
  {
    nome: "Felipe",
    cargo: "⭐⭐⭐⭐⭐",
    texto: "Curso muito bom, professor com rápidas e excelentes explicações, muito bem elaborado! Indicação fácil! Parabéns.",
  },
  {
    nome: "Andre",
    cargo: "⭐⭐⭐⭐⭐",
    texto: "Tem muitos cursos com 30 horas para o cara ficar explicando o que é um workflow. Aqui já sabemos o que a ferramenta faz. Parabéns pela objetividade!!!",
  },
];

export default function LandingPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--tx)" }} className="min-h-screen overflow-x-hidden">
      <div className="scanline" />

      {/* ── NAVBAR ───────────────────────────────────────────────────────── */}
      <nav
        style={{
          background: "linear-gradient(180deg, #0A0718 0%, rgba(10,7,24,0.92) 100%)",
          borderBottom: "1px solid var(--b1)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 56 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Image src="/logo-iadonai.png" alt="Iadonai Academy" width={120} height={36} style={{ objectFit: "contain" }} />
          </div>
          <a href="https://pay.kiwify.com.br/krRn4r2" target="_blank" rel="noopener noreferrer" className="btn-punk" style={{ padding: "8px 20px", fontSize: 10 }}>
            Garantir vaga →
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="grid-bg"
        style={{
          paddingTop: 120,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow central */}
        <div style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800, height: 500,
          background: "radial-gradient(ellipse, rgba(91,45,176,.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Linha accent top */}
        <div style={{ position: "absolute", top: 56, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--cy), transparent)", opacity: .3 }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(155,111,255,.4)",
              background: "rgba(61,26,138,.2)",
              padding: "6px 16px",
              fontFamily: "var(--font-m)", fontSize: 11, color: "var(--cy)",
              letterSpacing: ".1em",
            }}>
              <span style={{
                display: "inline-block", width: 7, height: 7,
                borderRadius: "50%", background: "var(--cy)",
                boxShadow: "0 0 8px var(--cy)",
                animation: "pulse-cy 2s infinite",
              }} />
              LANÇAMENTO · ATUALIZADO 2026 · 7 MÓDULOS
            </div>
          </div>

          {/* Headline */}
          <h1
            className="silver-lg text-center"
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(32px, 5.5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: ".04em",
              marginBottom: 8,
            }}
          >
            CRIE AGENTES DE IA<br />
            <span className="cy-text">SEM CÓDIGO</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-h)", fontSize: "clamp(14px, 2vw, 22px)",
              color: "var(--pr)", letterSpacing: ".08em", textAlign: "center",
              marginBottom: 24,
            }}
          >
            Rápido e Prático com n8n 2026
          </p>

          <p
            style={{
              textAlign: "center", color: "var(--mt)", fontSize: 17,
              maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.7,
              fontFamily: "var(--font-b)",
            }}
          >
            Construa agentes de IA, integre APIs modernas e automatize processos reais com
            as ferramentas mais usadas no mercado —{" "}
            <strong style={{ color: "var(--tx)" }}>mesmo sem experiência em programação.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://pay.kiwify.com.br/krRn4r2" target="_blank" rel="noopener noreferrer" className="btn-punk" style={{ fontSize: 12, padding: "16px 40px", justifyContent: "center" }}>
              ▶ QUERO COMEÇAR AGORA
            </a>
            <a href="#modulos" className="btn-ghost" style={{ padding: "16px 32px", justifyContent: "center" }}>
              VER CONTEÚDO COMPLETO
            </a>
          </div>

          {/* Preview — 3 fases do Agente de Voz com MCP */}
          <div style={{ marginTop: 56 }}>
            {/* Label topo */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <span style={{
                fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)",
                letterSpacing: ".18em", textTransform: "uppercase",
                border: "1px solid rgba(155,111,255,.3)", padding: "4px 14px",
                background: "rgba(61,26,138,.15)",
              }}>
                ◈ Projeto real — Agente de Voz com ElevenLabs + MCP
              </span>
            </div>

            {/* 3 imagens lado a lado */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
              {[
                { src: "/projetos/hero-01.png", num: "01", label: "Recepção & Classificação", cor: "#9B6FFF" },
                { src: "/projetos/hero-02.png", num: "02", label: "Processamento Agente IA", cor: "#CC88FF" },
                { src: "/projetos/hero-03.png", num: "03", label: "Resposta Inteligente",     cor: "#3ECF8E" },
              ].map((f) => (
                <div key={f.num} style={{ position: "relative", overflow: "hidden", border: `1px solid ${f.cor}33`, borderTop: `2px solid ${f.cor}` }}>
                  {/* Fade bottom */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
                    background: "linear-gradient(0deg, var(--bg) 0%, transparent 100%)",
                    zIndex: 2, pointerEvents: "none",
                  }} />
                  {/* Badge fase */}
                  <div style={{
                    position: "absolute", top: 10, left: 10, zIndex: 3,
                    background: f.cor, color: "#000",
                    fontFamily: "var(--font-h)", fontWeight: 900,
                    fontSize: 9, padding: "3px 10px", letterSpacing: ".12em",
                  }}>
                    FASE {f.num}
                  </div>
                  <Image
                    src={f.src}
                    alt={f.label}
                    width={600}
                    height={340}
                    style={{ display: "block", width: "100%", height: "auto" }}
                    unoptimized
                    priority
                  />
                  {/* Label abaixo */}
                  <div style={{
                    position: "absolute", bottom: 10, left: 0, right: 0,
                    textAlign: "center", zIndex: 3,
                    fontFamily: "var(--font-h)", fontSize: 10,
                    color: f.cor, letterSpacing: ".1em", textTransform: "uppercase",
                  }}>
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Seta conectora entre fases */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              gap: 8, marginTop: 10,
            }}>
              {["Recepção & Classificação", "→", "Processamento Agente IA", "→", "Resposta Inteligente"].map((t, i) => (
                <span key={i} style={{
                  fontFamily: i % 2 === 0 ? "var(--font-h)" : "var(--font-m)",
                  fontSize: i % 2 === 0 ? 10 : 14,
                  color: i % 2 === 0 ? "var(--mt)" : "var(--cy)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 40 }}
            className="max-w-2xl mx-auto"
          >
            {[
              { v: "7", l: "Módulos" },
              { v: "17+", l: "Ferramentas" },
              { v: "100%", l: "Prático" },
              { v: "Zero", l: "Pré-requisitos" },
            ].map((s) => (
              <div
                key={s.l}
                className="punk-card text-center"
                style={{ padding: "18px 8px" }}
              >
                <div style={{ fontFamily: "var(--font-h)", fontSize: 28, color: "var(--cy)" }}>{s.v}</div>
                <div style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".08em", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TickerTools />

      <ModulosGrid />

      <ProjetosGrid />

      {/* ── O QUE VOCÊ VAI DESENVOLVER ───────────────────────────────────── */}
      <section style={{ background: "var(--s1)", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="flex flex-col lg:grid">
          <div>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Habilidades
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: ".06em", marginBottom: 20 }}>
              O QUE VOCÊ VAI<br />DESENVOLVER
            </h2>
            <p style={{ color: "var(--mt)", fontFamily: "var(--font-b)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              Soluções plug and play que você vai desenvolver na formação — aplicáveis imediatamente no seu negócio ou nos seus clientes.
            </p>
            <a href="https://pay.kiwify.com.br/krRn4r2" target="_blank" rel="noopener noreferrer" className="btn-punk" style={{ fontSize: 10 }}>
              QUERO APRENDER ISSO →
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignContent: "start" }}>
            {SKILLS.map((s) => (
              <div
                key={s}
                style={{
                  background: "var(--s2)", border: "1px solid var(--bdr)",
                  padding: "12px 14px", display: "flex", alignItems: "flex-start", gap: 10,
                  borderLeft: "2px solid var(--b2)",
                  transition: "border-color .2s",
                }}
                className="hover:border-l-[var(--cy)]"
              >
                <span style={{ color: "var(--yl)", fontSize: 12, marginTop: 1, flexShrink: 0 }}>✦</span>
                <span style={{ fontFamily: "var(--font-b)", fontSize: 13, color: "var(--tx)", lineHeight: 1.4 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ──────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Público-alvo
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
              ESTE CURSO É PARA VOCÊ
            </h2>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            {PARA_QUEM.map((p) => (
              <div
                key={p.label}
                className="punk-card"
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px" }}
              >
                <span style={{ fontSize: 24, flexShrink: 0 }}>{p.icon}</span>
                <span style={{ fontFamily: "var(--font-b)", fontSize: 16, color: "var(--tx)" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--s1)", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Resultados reais
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
              VEJA O QUE NOSSOS ALUNOS ESTÃO FALANDO
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {["depoimento-01", "depoimento-02", "depoimento-03"].map((dep) => (
              <div
                key={dep}
                style={{
                  background: "#fff",
                  border: "1px solid var(--bdr)",
                  borderTop: "2px solid var(--cy)",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,.3)",
                }}
              >
                <Image
                  src={`/projetos/${dep}.PNG`}
                  alt="Depoimento de aluno"
                  width={600}
                  height={200}
                  style={{ display: "block", width: "100%", height: "auto" }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUTOR ───────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "var(--bg)", borderTop: "1px solid var(--bdr)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Quem vai te ensinar
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
              SEU INSTRUTOR
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 48, alignItems: "start" }}>
            {/* Foto */}
            <div style={{ position: "relative" }}>
              <div style={{
                width: "100%", aspectRatio: "3/4",
                backgroundImage: "url('/fotos/foto-01.jpeg')",
                backgroundSize: "cover", backgroundPosition: "center top",
                border: "1px solid var(--b2)", borderTop: "3px solid var(--cy)",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
              }} />
              {/* Badge */}
              <div style={{
                position: "absolute", bottom: 20, left: 0, right: 0,
                display: "flex", justifyContent: "center",
              }}>
                <div style={{
                  background: "rgba(10,7,24,.9)", border: "1px solid var(--cy)",
                  padding: "8px 20px", textAlign: "center",
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{ fontFamily: "var(--font-h)", fontSize: 11, color: "var(--cy)", letterSpacing: ".1em" }}>
                    ENGENHEIRO DE DADOS
                  </div>
                  <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".08em", marginTop: 2 }}>
                    MACKENZIE · BRADESCO · ALLCARE
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 style={{ fontFamily: "var(--font-h)", fontSize: 32, letterSpacing: ".04em", marginBottom: 4 }} className="silver-lg">
                RAFAEL DE OLIVEIRA BORGES
              </h3>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 11, color: "var(--cy)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 24 }}>
                Engenheiro de Dados · CEO da Iadonai Academy
              </p>

              <p style={{ fontFamily: "var(--font-b)", fontSize: 15, color: "var(--mt)", lineHeight: 1.8, marginBottom: 20 }}>
                Engenheiro de Dados formado pelo <strong style={{ color: "var(--tx)" }}>Mackenzie</strong> com pós-graduação em Ciência de Dados. Mais de <strong style={{ color: "var(--tx)" }}>7 anos de experiência</strong> em projetos reais de automação, IA e dados em empresas como <strong style={{ color: "var(--tx)" }}>Bradesco e Allcare Gestora de Saúde</strong>.
              </p>
              <p style={{ fontFamily: "var(--font-b)", fontSize: 15, color: "var(--mt)", lineHeight: 1.8, marginBottom: 32 }}>
                No Bradesco, liderou projetos como o <strong style={{ color: "var(--tx)" }}>sistema antifraude do PIX</strong> e o projeto BraSupply que economizou <strong style={{ color: "var(--cy)" }}>R$ 4 milhões anuais</strong>. Hoje ensina pessoas comuns a criarem automações e agentes de IA sem precisar saber programar.
              </p>

              {/* Stats do instrutor */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {[
                  { v: "7+", l: "Anos de experiência" },
                  { v: "R$4M", l: "Economizados em projetos" },
                  { v: "2", l: "Empresas fundadas" },
                  { v: "Mackenzie", l: "Ciência de Dados" },
                ].map((s) => (
                  <div key={s.l} style={{
                    background: "var(--s2)", border: "1px solid var(--bdr)",
                    borderTop: "2px solid var(--b2)", padding: "14px 12px", textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "var(--font-h)", fontSize: 18, color: "var(--cy)", marginBottom: 4 }}>{s.v}</div>
                    <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".06em" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/rafael-de-oliveira-borges-engenhariadedados/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24,
                  fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)",
                  letterSpacing: ".1em", textDecoration: "none",
                  border: "1px solid var(--bdr)", padding: "8px 16px",
                  transition: "color .2s, border-color .2s",
                }}
              >
                <span style={{ color: "#0A66C2", fontSize: 14 }}>in</span>
                VER PERFIL NO LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMUNIDADE IADONAI ───────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800, height: 400,
          background: "radial-gradient(ellipse, rgba(61,26,138,.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Mais do que um curso
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(24px, 3.5vw, 42px)", letterSpacing: ".06em", marginBottom: 16 }}>
              UMA COMUNIDADE QUE<br />
              <span className="cy-text">GERA RESULTADOS</span>
            </h2>
            <p style={{ color: "var(--mt)", fontFamily: "var(--font-b)", fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
              Ao se inscrever, você entra na <strong style={{ color: "var(--tx)" }}>IADONAI Academy</strong> — uma plataforma completa de aprendizado
              com gamificação, fórum, rankings e alunos ativos do Brasil inteiro.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {[
              {
                icon: "🏆",
                titulo: "Gamificação Real",
                desc: "Ganhe XP e suba de nível assistindo aulas, completando módulos, comentando e fazendo login diário. Veja seu progresso em tempo real.",
              },
              {
                icon: "📊",
                titulo: "Ranking de Alunos",
                desc: "Compete com outros alunos no ranking geral. Quanto mais você aprende, mais XP acumula e mais alto você sobe.",
              },
              {
                icon: "💬",
                titulo: "Fórum por Aula",
                desc: "Cada aula tem seu próprio fórum. Tire dúvidas, compartilhe descobertas e colabore com outros alunos diretamente no conteúdo.",
              },
              {
                icon: "🎖️",
                titulo: "Badges & Conquistas",
                desc: "Desbloqueie conquistas exclusivas por marcos como concluir módulos, completar cursos e manter sequências de estudo.",
              },
              {
                icon: "📈",
                titulo: "Radar de Habilidades",
                desc: "Visualize seu crescimento em automação, IA e APIs através do radar de habilidades no seu perfil pessoal.",
              },
              {
                icon: "🎓",
                titulo: "Certificado Digital",
                desc: "Ao concluir o curso, receba seu certificado digital da IADONAI Academy para compartilhar no LinkedIn e portfólio.",
              },
            ].map((card) => (
              <div
                key={card.titulo}
                className="punk-card community-card"
                style={{ padding: "24px", borderTop: "2px solid var(--b2)" }}
              >
                <div style={{ fontSize: 30, marginBottom: 12 }}>{card.icon}</div>
                <h3 className="silver" style={{ fontFamily: "var(--font-h)", fontSize: 13, letterSpacing: ".06em", marginBottom: 8 }}>
                  {card.titulo}
                </h3>
                <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Banner Iadonai */}
          <div
            style={{
              marginTop: 28,
              background: "var(--s2)",
              border: "1px solid var(--b1)",
              borderTop: "2px solid var(--cy)",
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(155,111,255,.02) 20px, rgba(155,111,255,.02) 21px)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "var(--font-h)", fontSize: 10, color: "var(--cy)", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 6 }}>
                ◈ Plataforma Inclusa
              </div>
              <Image src="/logo-iadonai.png" alt="Iadonai Academy" width={200} height={56} style={{ objectFit: "contain", marginBottom: 4 }} />
              <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", marginTop: 4 }}>
                Acesso completo à plataforma — cursos, fórum, ranking e comunidade
              </p>
            </div>
            <a href="https://pay.kiwify.com.br/krRn4r2" target="_blank" rel="noopener noreferrer" className="btn-punk" style={{ fontSize: 10, position: "relative", flexShrink: 0 }}>
              ENTRAR NA COMUNIDADE →
            </a>
          </div>
        </div>
      </section>

      {/* ── RESULTADO FINAL ──────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Resultado final
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em", marginBottom: 16 }}>
              AO CONCLUIR O CURSO, VOCÊ SERÁ CAPAZ DE
            </h2>
            <p style={{ color: "var(--mt)", fontFamily: "var(--font-b)", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Mesmo sem experiência prévia em programação.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>
            {RESULTADOS.map((r) => (
              <div
                key={r}
                style={{
                  background: "var(--s2)", border: "1px solid var(--bdr)",
                  borderLeft: "2px solid var(--cy)", padding: "14px 18px",
                  display: "flex", alignItems: "center", gap: 12,
                  fontFamily: "var(--font-b)", fontSize: 14, color: "var(--tx)",
                }}
              >
                <span style={{ color: "var(--yl)", fontSize: 16, flexShrink: 0 }}>✦</span>
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING / CTA ─────────────────────────────────────────────────── */}
      <section
        id="comprar"
        className="grid-bg"
        style={{ borderTop: "1px solid var(--bdr)", padding: "80px 24px", position: "relative", overflow: "hidden" }}
      >
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse, rgba(61,26,138,.3) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              background: "var(--s2)", border: "1px solid var(--b2)",
              borderTop: "2px solid var(--cy)",
              clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
              padding: "40px 36px",
            }}
          >
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(155,111,255,.12)", border: "1px solid rgba(155,111,255,.3)",
              color: "var(--cy)", fontFamily: "var(--font-m)", fontSize: 10,
              padding: "4px 12px", letterSpacing: ".1em", marginBottom: 20,
            }}>
              ◈ ACESSO COMPLETO
            </div>

            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: 28, letterSpacing: ".06em", marginBottom: 8 }}>
              COMECE AGORA MESMO
            </h2>

            {/* Preço */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-m)", fontSize: 13, color: "var(--mt)", textDecoration: "line-through" }}>
                  R$ 197,00
                </span>
                <span style={{ fontFamily: "var(--font-h)", fontSize: 42, color: "var(--cy)", letterSpacing: ".02em" }}>
                  R$ 97,90
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--yl)", letterSpacing: ".1em", textAlign: "center", marginTop: 4 }}>
                ⚡ PREÇO DE LANÇAMENTO — VAGAS LIMITADAS
              </p>
            </div>

            {/* Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {[
                "7 módulos com projetos reais",
                "17+ ferramentas e tecnologias",
                "Suporte e comunidade exclusiva",
                "Atualizações vitalícias inclusas",
                "Certificado de conclusão",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    width: 20, height: 20, background: "var(--b1)", border: "1px solid var(--cy)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--cy)", fontSize: 10, flexShrink: 0,
                  }}>✓</span>
                  <span style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--tx)" }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.kiwify.com.br/krRn4r2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-punk"
              style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "18px 32px", clipPath: "none" }}
            >
              ▶ QUERO ME INSCREVER AGORA
            </a>

            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".06em", textAlign: "center", marginTop: 14 }}>
              🔒 Pagamento 100% seguro via Kiwify
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--s1)", borderTop: "1px solid var(--bdr)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Dúvidas
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: ".06em" }}>
              PERGUNTAS FREQUENTES
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { p: "Preciso saber programar?", r: "Não. O curso foi desenhado para iniciantes. Você aprende tudo do zero, no ritmo do curso." },
              { p: "Quanto tempo tenho acesso?", r: "Acesso vitalício. Você também recebe todas as atualizações futuras sem custo adicional." },
              { p: "O curso funciona em qual sistema operacional?", r: "Windows, Mac e Linux. As ferramentas utilizadas são multiplataforma." },
              { p: "Tem suporte durante o curso?", r: "Sim. Você terá acesso à comunidade exclusiva para tirar dúvidas com outros alunos e com o professor." },
              { p: "Recebo certificado ao concluir?", r: "Sim. Ao concluir todos os módulos você recebe o certificado digital de conclusão." },
            ].map((faq) => (
              <div
                key={faq.p}
                className="punk-card"
                style={{ padding: "20px 22px", borderLeft: "2px solid var(--b1)" }}
              >
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 13, letterSpacing: ".06em", marginBottom: 8 }} className="silver">
                  {faq.p}
                </h3>
                <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7 }}>{faq.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid var(--bdr)", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <Image src="/logo-iadonai.png" alt="Iadonai Academy" width={100} height={30} style={{ objectFit: "contain" }} />
          <span style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".06em" }}>
            © {new Date().getFullYear()} · Todos os direitos reservados
          </span>
        </div>
      </footer>
    </div>
  );
}
