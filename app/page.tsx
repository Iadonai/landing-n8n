import Image from "next/image";
import TickerTools from "./components/TickerTools";
import ProjetosGrid from "./components/ProjetosGrid";
import ModulosGrid from "./components/ModulosGrid";

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
          top: 0, left: 0, right: 0,
          zIndex: 100,
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 56 }}
          className="flex items-center justify-between"
        >
          <Image src="/logo-iadonai.png" alt="Iadonai Academy" width={120} height={36} style={{ objectFit: "contain" }} />
          <a href="https://plataforma.iadonai.com.br/cadastro" className="btn-punk" style={{ padding: "8px 20px", fontSize: 10 }}>
            Criar conta grátis →
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="grid-bg"
        style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, position: "relative", overflow: "hidden" }}
      >
        <div style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800, height: 500,
          background: "radial-gradient(ellipse, rgba(91,45,176,.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
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
              GRATUITO · ACESSO IMEDIATO · SEM CARTÃO DE CRÉDITO
            </div>
          </div>

          {/* Headline */}
          <h1
            className="silver-lg text-center"
            style={{ fontFamily: "var(--font-h)", fontSize: "clamp(32px, 5.5vw, 68px)", lineHeight: 1.05, letterSpacing: ".04em", marginBottom: 8 }}
          >
            CRIE SEU PRIMEIRO<br />
            <span className="cy-text">AGENTE DE IA COM N8N</span>
          </h1>
          <p style={{
            fontFamily: "var(--font-h)", fontSize: "clamp(14px, 2vw, 22px)",
            color: "var(--pr)", letterSpacing: ".08em", textAlign: "center", marginBottom: 24,
          }}>
            Grátis. Do zero. Resultado em minutos.
          </p>

          <p style={{
            textAlign: "center", color: "var(--mt)", fontSize: 17,
            maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.7,
            fontFamily: "var(--font-b)",
          }}>
            Acesse o curso introdutório gratuito e aprenda na prática a criar automações
            com WhatsApp, IA generativa e as ferramentas mais usadas no mercado —{" "}
            <strong style={{ color: "var(--tx)" }}>mesmo sem experiência em programação.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://plataforma.iadonai.com.br/cadastro" className="btn-punk" style={{ fontSize: 12, padding: "16px 40px", justifyContent: "center" }}>
              ▶ CRIAR MINHA CONTA GRÁTIS
            </a>
            <a href="#como-funciona" className="btn-ghost" style={{ padding: "16px 32px", justifyContent: "center" }}>
              COMO FUNCIONA ↓
            </a>
          </div>

          {/* O que está incluso no grátis */}
          <div style={{
            marginTop: 48,
            background: "rgba(61,26,138,.15)",
            border: "1px solid rgba(155,111,255,.3)",
            padding: "28px 36px",
            maxWidth: 680,
            margin: "48px auto 0",
          }}>
            <div style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 18, textAlign: "center" }}>
              ◈ O que você acessa gratuitamente ao criar sua conta
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                "Introdução ao n8n — do zero ao primeiro workflow",
                "Crie um agente de chat com IA generativa",
                "Integre WhatsApp com Z-API na prática",
                "Acesso à comunidade, fórum e ranking de alunos",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "var(--cy)", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✦</span>
                  <span style={{ fontFamily: "var(--font-b)", fontSize: 13, color: "var(--tx)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".06em", marginTop: 18, textAlign: "center" }}>
              Sem cartão. Sem compromisso. Acesso imediato ao criar sua conta.
            </p>
          </div>

          {/* Stats */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 40 }}
            className="max-w-2xl mx-auto"
          >
            {[
              { v: "Grátis", l: "Para começar" },
              { v: "17+", l: "Ferramentas" },
              { v: "100%", l: "Prático" },
              { v: "Zero", l: "Pré-requisitos" },
            ].map((s) => (
              <div key={s.l} className="punk-card text-center" style={{ padding: "18px 8px" }}>
                <div style={{ fontFamily: "var(--font-h)", fontSize: 24, color: "var(--cy)" }}>{s.v}</div>
                <div style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".08em", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TickerTools />

      {/* ── PROJETOS — o que você vai aprender a criar ───────────────────── */}
      <ProjetosGrid />

      {/* ── COMO FUNCIONA ────────────────────────────────────────────────── */}
      <section id="como-funciona" style={{ padding: "80px 24px", background: "var(--s1)", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Simples assim
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 42px)", letterSpacing: ".06em" }}>
              COMO FUNCIONA
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
            {[
              {
                num: "01",
                titulo: "Cria sua conta grátis",
                desc: "30 segundos. Só nome e email. Sem cartão de crédito, sem período de teste — o acesso é gratuito para sempre.",
                cor: "#9B6FFF",
              },
              {
                num: "02",
                titulo: "Assiste o curso introdutório",
                desc: "Aulas curtas e objetivas. Você aprende n8n, agentes de IA e WhatsApp na prática — no seu ritmo, quando quiser.",
                cor: "#CC88FF",
              },
              {
                num: "03",
                titulo: "Cria sua primeira automação",
                desc: "Ao final do curso grátis você já tem um agente de IA funcionando e integrado ao WhatsApp. Resultado real, não teoria.",
                cor: "#3ECF8E",
              },
            ].map((step, i) => (
              <div key={step.num} style={{ position: "relative" }}>
                {i < 2 && (
                  <div style={{
                    position: "absolute", top: 32, right: -2, zIndex: 2,
                    fontFamily: "var(--font-m)", fontSize: 20, color: "var(--cy)", opacity: .4,
                  }}>→</div>
                )}
                <div style={{
                  background: "var(--s2)", border: "1px solid var(--bdr)",
                  borderTop: `3px solid ${step.cor}`,
                  padding: "28px 24px", height: "100%",
                }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36,
                    background: `${step.cor}20`, border: `1px solid ${step.cor}`,
                    fontFamily: "var(--font-h)", fontSize: 12, color: step.cor,
                    marginBottom: 16,
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-h)", fontSize: 13, letterSpacing: ".06em", color: "#fff", marginBottom: 10 }}>
                    {step.titulo.toUpperCase()}
                  </h3>
                  <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="https://plataforma.iadonai.com.br/cadastro" className="btn-punk" style={{ fontSize: 12, padding: "16px 40px" }}>
              ▶ COMEÇAR AGORA — É GRÁTIS
            </a>
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
              ESSE CURSO É PARA VOCÊ SE...
            </h2>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              { icon: "🌱", label: "Você quer aprender automações e IA mas não sabe por onde começar" },
              { icon: "💼", label: "Você é profissional ou empreendedor e quer automatizar processos do seu negócio" },
              { icon: "🤖", label: "Você quer criar chatbots e agentes de IA para vender como serviço" },
              { icon: "🏢", label: "Você tem uma agência ou atende clientes e quer entregar mais com menos esforço" },
              { icon: "🔌", label: "Você já ouviu falar de n8n mas nunca conseguiu dar o primeiro passo" },
            ].map((p) => (
              <div key={p.label} className="punk-card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px" }}>
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
              O QUE NOSSOS ALUNOS ESTÃO FALANDO
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {["depoimento-01", "depoimento-02", "depoimento-03"].map((dep) => (
              <div key={dep} style={{ background: "#fff", border: "1px solid var(--bdr)", borderTop: "2px solid var(--cy)", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.3)" }}>
                <Image src={`/projetos/${dep}.PNG`} alt="Depoimento de aluno" width={600} height={200} style={{ display: "block", width: "100%", height: "auto" }} unoptimized />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="https://plataforma.iadonai.com.br/cadastro" className="btn-punk" style={{ fontSize: 11 }}>
              QUERO ESSES RESULTADOS — CRIAR CONTA GRÁTIS →
            </a>
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
            <div style={{ position: "relative" }}>
              <div style={{
                width: "100%", aspectRatio: "3/4",
                backgroundImage: "url('/fotos/foto-01.jpeg')",
                backgroundSize: "cover", backgroundPosition: "center top",
                border: "1px solid var(--b2)", borderTop: "3px solid var(--cy)",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
              }} />
              <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
                <div style={{ background: "rgba(10,7,24,.9)", border: "1px solid var(--cy)", padding: "8px 20px", textAlign: "center", backdropFilter: "blur(8px)" }}>
                  <div style={{ fontFamily: "var(--font-h)", fontSize: 11, color: "var(--cy)", letterSpacing: ".1em" }}>ENGENHEIRO DE DADOS</div>
                  <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".08em", marginTop: 2 }}>MACKENZIE · BRADESCO · ALLCARE</div>
                </div>
              </div>
            </div>

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
                No Bradesco, liderou o <strong style={{ color: "var(--tx)" }}>sistema antifraude do PIX</strong> e um projeto que economizou <strong style={{ color: "var(--cy)" }}>R$ 4 milhões anuais</strong>. Hoje ensina pessoas comuns a criarem automações e agentes de IA sem precisar saber programar.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {[
                  { v: "7+", l: "Anos de experiência" },
                  { v: "R$4M", l: "Economizados em projetos" },
                  { v: "2", l: "Empresas fundadas" },
                  { v: "Mackenzie", l: "Ciência de Dados" },
                ].map((s) => (
                  <div key={s.l} style={{ background: "var(--s2)", border: "1px solid var(--bdr)", borderTop: "2px solid var(--b2)", padding: "14px 12px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-h)", fontSize: 18, color: "var(--cy)", marginBottom: 4 }}>{s.v}</div>
                    <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".06em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <a href="https://www.linkedin.com/in/rafael-de-oliveira-borges-engenhariadedados/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".1em", textDecoration: "none", border: "1px solid var(--bdr)", padding: "8px 16px" }}>
                <span style={{ color: "#0A66C2", fontSize: 14 }}>in</span>
                VER PERFIL NO LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMUNIDADE ───────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(61,26,138,.2) 0%, transparent 70%)", pointerEvents: "none" }} />
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
              Ao criar sua conta grátis, você já entra na <strong style={{ color: "var(--tx)" }}>IADONAI Academy</strong> — plataforma completa com gamificação, fórum, rankings e alunos ativos do Brasil inteiro.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {[
              { icon: "🏆", titulo: "Gamificação Real", desc: "Ganhe XP e suba de nível assistindo aulas, completando módulos e fazendo login diário. Veja seu progresso em tempo real." },
              { icon: "📊", titulo: "Ranking de Alunos", desc: "Compete com outros alunos no ranking geral. Quanto mais você aprende, mais XP acumula." },
              { icon: "💬", titulo: "Fórum por Aula", desc: "Cada aula tem seu próprio fórum. Tire dúvidas, compartilhe descobertas e colabore diretamente no conteúdo." },
              { icon: "🎖️", titulo: "Badges & Conquistas", desc: "Desbloqueie conquistas exclusivas por marcos como concluir módulos e manter sequências de estudo." },
              { icon: "📈", titulo: "Radar de Habilidades", desc: "Visualize seu crescimento em automação, IA e APIs através do radar de habilidades no seu perfil." },
              { icon: "🎓", titulo: "Certificado Digital", desc: "Ao concluir o curso completo, receba seu certificado digital para compartilhar no LinkedIn e portfólio." },
            ].map((card) => (
              <div key={card.titulo} className="punk-card community-card" style={{ padding: "24px", borderTop: "2px solid var(--b2)" }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{card.icon}</div>
                <h3 className="silver" style={{ fontFamily: "var(--font-h)", fontSize: 13, letterSpacing: ".06em", marginBottom: 8 }}>{card.titulo}</h3>
                <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, background: "var(--s2)", border: "1px solid var(--b1)", borderTop: "2px solid var(--cy)", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(155,111,255,.02) 20px, rgba(155,111,255,.02) 21px)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "var(--font-h)", fontSize: 10, color: "var(--cy)", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 6 }}>◈ Acesso incluso no cadastro grátis</div>
              <Image src="/logo-iadonai.png" alt="Iadonai Academy" width={200} height={56} style={{ objectFit: "contain", marginBottom: 4 }} />
              <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", marginTop: 4 }}>Plataforma completa — cursos, fórum, ranking e comunidade</p>
            </div>
            <a href="https://plataforma.iadonai.com.br/cadastro" className="btn-punk" style={{ fontSize: 10, position: "relative", flexShrink: 0 }}>
              ENTRAR NA COMUNIDADE — GRÁTIS →
            </a>
          </div>
        </div>
      </section>

      {/* ── QUER IR ALÉM? — CURSO COMPLETO ───────────────────────────────── */}
      <section style={{ background: "var(--s1)", borderTop: "1px solid var(--bdr)", padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
            Próximo nível
          </p>
          <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(24px, 3.5vw, 48px)", letterSpacing: ".06em", marginBottom: 16 }}>
            QUER IR ALÉM DO GRÁTIS?
          </h2>
          <p style={{ color: "var(--mt)", fontFamily: "var(--font-b)", fontSize: 16, maxWidth: 620, margin: "0 auto" }}>
            O curso completo tem 7 módulos, 17+ ferramentas e projetos avançados — RAG, agentes multimodais, infraestrutura própria e muito mais. Quando você terminar o grátis e quiser continuar, ele está aqui esperando.
          </p>
        </div>
      </section>

      <ModulosGrid />

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="comprar" className="grid-bg" style={{ borderTop: "1px solid var(--bdr)", padding: "60px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(61,26,138,.3) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 540, margin: "0 auto", position: "relative" }}>
          <div style={{ background: "var(--s2)", border: "1px solid var(--b2)", borderTop: "2px solid var(--cy)", clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)", padding: "40px 36px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(155,111,255,.12)", border: "1px solid rgba(155,111,255,.3)", color: "var(--cy)", fontFamily: "var(--font-m)", fontSize: 10, padding: "4px 12px", letterSpacing: ".1em", marginBottom: 20 }}>
              ◈ CURSO COMPLETO — 7 MÓDULOS
            </div>

            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: 28, letterSpacing: ".06em", marginBottom: 8 }}>
              ACESSO COMPLETO
            </h2>
            <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", marginBottom: 24, lineHeight: 1.7 }}>
              Todos os módulos, projetos avançados, atualizações vitalícias e comunidade exclusiva.
            </p>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-m)", fontSize: 13, color: "var(--mt)", textDecoration: "line-through" }}>R$ 197,00</span>
                <span style={{ fontFamily: "var(--font-h)", fontSize: 42, color: "var(--cy)", letterSpacing: ".02em" }}>R$ 97,90</span>
              </div>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--yl)", letterSpacing: ".1em", textAlign: "center", marginTop: 4 }}>
                ⚡ PREÇO DE LANÇAMENTO
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {["7 módulos com projetos reais", "17+ ferramentas e tecnologias", "Suporte e comunidade exclusiva", "Atualizações vitalícias inclusas", "Certificado de conclusão"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 20, height: 20, background: "var(--b1)", border: "1px solid var(--cy)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cy)", fontSize: 10, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--tx)" }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="https://pay.kiwify.com.br/Nfsv86H" target="_blank" rel="noopener noreferrer" className="btn-punk" style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "18px 32px", clipPath: "none" }}>
              ▶ QUERO O CURSO COMPLETO
            </a>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".06em", textAlign: "center", marginTop: 14 }}>
              🔒 Pagamento 100% seguro via Kiwify
            </p>

            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--bdr)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".06em", marginBottom: 10 }}>
                Ainda não terminou o grátis? Comece por aí primeiro.
              </p>
              <a href="https://plataforma.iadonai.com.br/cadastro" className="btn-ghost" style={{ fontSize: 11, padding: "10px 24px", display: "inline-block" }}>
                ACESSAR CURSO GRATUITO →
              </a>
            </div>
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
              { p: "O curso é realmente gratuito?", r: "Sim. O curso introdutório — com n8n, agente de chat com IA e integração WhatsApp via Z-API — é 100% gratuito. Sem cartão, sem período de teste. Você cria sua conta e acessa na hora." },
              { p: "Qual a diferença entre o grátis e o curso completo?", r: "O grátis cobre os fundamentos e dois projetos práticos. O curso completo tem 7 módulos, 17+ ferramentas e projetos avançados como RAG com Supabase, agentes multimodais, infraestrutura VPS e automação de vídeo com IA." },
              { p: "Preciso saber programar?", r: "Não. O curso foi desenhado para quem nunca programou. Você aprende tudo do zero, no seu ritmo." },
              { p: "O que eu ganho ao criar minha conta?", r: "Acesso ao curso gratuito, entrada na comunidade da IADONAI Academy, fórum por aula, ranking de alunos e gamificação com XP e badges." },
              { p: "O curso funciona em qual sistema operacional?", r: "Windows, Mac e Linux. As ferramentas utilizadas são multiplataforma." },
              { p: "Recebo certificado?", r: "Sim. Ao concluir todos os módulos do curso completo você recebe o certificado digital da IADONAI Academy para compartilhar no LinkedIn." },
            ].map((faq) => (
              <div key={faq.p} className="punk-card" style={{ padding: "20px 22px", borderLeft: "2px solid var(--b1)" }}>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 13, letterSpacing: ".06em", marginBottom: 8 }} className="silver">{faq.p}</h3>
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
