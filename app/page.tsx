import Image from "next/image";
import TickerTools from "./components/TickerTools";
import CadastroForm from "./components/CadastroForm";

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
          <a href="#cadastro" className="btn-punk" style={{ padding: "8px 20px", fontSize: 10 }}>
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

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", textAlign: "center" }}>

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
              100% GRATUITO · SEM CARTÃO · ACESSO IMEDIATO
            </div>
          </div>

          {/* Headline */}
          <h1
            className="silver-lg"
            style={{ fontFamily: "var(--font-h)", fontSize: "clamp(30px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: ".04em", marginBottom: 8 }}
          >
            CRIE SEU PRIMEIRO<br />
            <span className="cy-text">AGENTE DE IA COM N8N</span>
          </h1>

          <p style={{
            fontFamily: "var(--font-b)", fontSize: "clamp(15px, 1.8vw, 19px)",
            color: "var(--mt)", maxWidth: 620, margin: "20px auto 36px", lineHeight: 1.8,
          }}>
            Aprenda N8N do zero e construa <strong style={{ color: "var(--tx)" }}>2 projetos reais</strong> —
            um agente de IA via link e outro integrado ao WhatsApp.
            Sem programação. Resultado em minutos.
          </p>

          <a href="#cadastro" className="btn-punk" style={{ fontSize: 13, padding: "18px 48px" }}>
            ▶ QUERO ACESSO GRATUITO
          </a>

          {/* Prova social */}
          <div className="flex justify-center" style={{ marginTop: 28, gap: 32, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(155,111,255,.15)", border: "1px solid rgba(155,111,255,.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>🎓</div>
              <div>
                <div style={{ fontFamily: "var(--font-h)", fontSize: 15, color: "#E8E8F4" }}>3.112</div>
                <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".08em" }}>ALUNOS NA UDEMY</div>
              </div>
            </div>
            <div style={{ width: 1, background: "var(--bdr)", alignSelf: "stretch" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(155,111,255,.15)", border: "1px solid rgba(155,111,255,.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>⭐</div>
              <div>
                <div style={{ fontFamily: "var(--font-h)", fontSize: 15, color: "#E8E8F4" }}>7+ anos</div>
                <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".08em" }}>DE EXPERIÊNCIA EM IA</div>
              </div>
            </div>
            <div style={{ width: 1, background: "var(--bdr)", alignSelf: "stretch" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(155,111,255,.15)", border: "1px solid rgba(155,111,255,.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>🏦</div>
              <div>
                <div style={{ fontFamily: "var(--font-h)", fontSize: 15, color: "#E8E8F4" }}>Bradesco</div>
                <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".08em" }}>MACKENZIE · ALLCARE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TickerTools />

      {/* ── O QUE VOCÊ VAI CONSTRUIR ─────────────────────────────────────── */}
      <section id="projetos" style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Projetos do curso
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 42px)", letterSpacing: ".06em", marginBottom: 14 }}>
              O QUE VOCÊ VAI CONSTRUIR
            </h2>
            <p style={{ fontFamily: "var(--font-b)", fontSize: 16, color: "var(--mt)", maxWidth: 560, margin: "0 auto" }}>
              Dois agentes de IA prontos para produção. Do zero, passo a passo, com as ferramentas que o mercado usa.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* Case 1 */}
            <div style={{
              background: "var(--s2)",
              border: "1px solid var(--bdr)",
              borderTop: "3px solid var(--cy)",
              overflow: "hidden",
            }}>
              <Image
                src="/projetos/case-01.PNG"
                alt="Agente de IA via link — fluxo N8N"
                width={1200}
                height={675}
                style={{ display: "block", width: "100%", height: "auto" }}
                unoptimized
              />
              <div style={{ padding: "28px 28px 32px" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(155,111,255,.12)", border: "1px solid rgba(155,111,255,.3)",
                  color: "var(--cy)", fontFamily: "var(--font-m)", fontSize: 10,
                  padding: "4px 12px", letterSpacing: ".1em", marginBottom: 16,
                }}>
                  🔗 CASE 01 — WEB
                </div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, letterSpacing: ".05em", marginBottom: 16 }} className="silver-lg">
                  AGENTE DE IA VIA LINK
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Agente integrado e acessível via link público",
                    "Responde perguntas dos usuários em tempo real",
                    "Registra todas as perguntas no Google Sheets",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: "var(--cy)", fontSize: 14, marginTop: 2, flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div style={{
              background: "var(--s2)",
              border: "1px solid var(--bdr)",
              borderTop: "3px solid #3ECF8E",
              overflow: "hidden",
            }}>
              <Image
                src="/projetos/case-02.PNG"
                alt="Agente de IA no WhatsApp — fluxo N8N com Z-API"
                width={1200}
                height={675}
                style={{ display: "block", width: "100%", height: "auto" }}
                unoptimized
              />
              <div style={{ padding: "28px 28px 32px" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(62,207,142,.1)", border: "1px solid rgba(62,207,142,.3)",
                  color: "#3ECF8E", fontFamily: "var(--font-m)", fontSize: 10,
                  padding: "4px 12px", letterSpacing: ".1em", marginBottom: 16,
                }}>
                  💬 CASE 02 — WHATSAPP
                </div>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 20, letterSpacing: ".05em", marginBottom: 16 }} className="silver-lg">
                  AGENTE DE IA NO WHATSAPP
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Bot integrado ao WhatsApp via Z-API",
                    "Captura e registra leads automaticamente no Sheets",
                    "Resposta automática inteligente 24 horas por dia",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: "#3ECF8E", fontSize: 14, marginTop: 2, flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="#cadastro" className="btn-punk" style={{ fontSize: 12, padding: "16px 40px" }}>
              ▶ QUERO CONSTRUIR ESSES PROJETOS — CRIAR CONTA GRÁTIS
            </a>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ VAI APRENDER ──────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "var(--s1)", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Conteúdo do curso
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
              O QUE VOCÊ VAI APRENDER
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              {
                icon: "⚡",
                titulo: "80/20 Fundamentos N8N",
                desc: "O que você realmente precisa saber para criar automações com N8N. Sem enrolação — direto ao que funciona.",
                cor: "var(--cy)",
              },
              {
                icon: "📊",
                titulo: "Integrações com Google Sheets",
                desc: "Conecte qualquer fluxo ao Google Sheets. Registre dados, leia planilhas e use como banco de dados das suas automações.",
                cor: "var(--cy)",
              },
              {
                icon: "🤖",
                titulo: "Agentes de IA",
                desc: "Crie agentes inteligentes com memória, RAG e ferramentas. Use modelos como Groq (gratuito), GPT, Llama e Gemini.",
                cor: "#3ECF8E",
              },
              {
                icon: "💬",
                titulo: "Webhooks e WhatsApp (Z-API)",
                desc: "Integre o WhatsApp nas suas automações via Z-API. Receba e envie mensagens, capture leads e automatize respostas 24/7.",
                cor: "#3ECF8E",
              },
            ].map((m) => (
              <div key={m.titulo} className="punk-card" style={{ padding: "28px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{
                  width: 48, height: 48, flexShrink: 0,
                  background: `${m.cor}14`, border: `1px solid ${m.cor}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                }}>
                  {m.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-h)", fontSize: 14, letterSpacing: ".06em", color: "#fff", marginBottom: 8 }}>
                    {m.titulo.toUpperCase()}
                  </h3>
                  <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────────────────────── */}
      <section id="como-funciona" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
              Simples assim
            </p>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
              COMO FUNCIONA
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
            {[
              {
                num: "01",
                titulo: "Preencha o formulário",
                desc: "Nome, email e mais 2 perguntas rápidas. Menos de 1 minuto. Nada de cartão de crédito.",
                cor: "#9B6FFF",
              },
              {
                num: "02",
                titulo: "Receba seu acesso por email",
                desc: "Seu login e senha chegam na hora. Clique no link, entre na plataforma e já acessa o curso.",
                cor: "#CC88FF",
              },
              {
                num: "03",
                titulo: "Construa seus agentes",
                desc: "Siga as aulas e termine com 2 agentes de IA funcionando. Um via link, outro no WhatsApp.",
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
        </div>
      </section>

      {/* ── PARA QUEM É ──────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "var(--s1)", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)" }}>
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
              { icon: "🤖", label: "Você quer criar chatbots e agentes de IA para usar ou vender como serviço" },
              { icon: "🔌", label: "Você já ouviu falar de n8n mas nunca conseguiu dar o primeiro passo" },
              { icon: "📱", label: "Você quer um bot de WhatsApp inteligente sem pagar caro por isso" },
            ].map((p) => (
              <div key={p.label} className="punk-card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px" }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{p.icon}</span>
                <span style={{ fontFamily: "var(--font-b)", fontSize: 16, color: "var(--tx)" }}>{p.label}</span>
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
                Engenheiro de Dados formado pelo <strong style={{ color: "var(--tx)" }}>Mackenzie</strong>, especialista em automação e dados com mais de <strong style={{ color: "var(--tx)" }}>6 anos de experiência</strong> em projetos reais em empresas como <strong style={{ color: "var(--tx)" }}>Bradesco e Allcare Gestora de Saúde</strong>. Fundador da <strong style={{ color: "var(--tx)" }}>IADONAI Academy</strong>.
              </p>
              <p style={{ fontFamily: "var(--font-b)", fontSize: 15, color: "var(--mt)", lineHeight: 1.8, marginBottom: 32 }}>
                No Bradesco, liderou o <strong style={{ color: "var(--tx)" }}>sistema antifraude do PIX</strong> e um projeto que economizou <strong style={{ color: "var(--cy)" }}>R$ 4 milhões anuais</strong>. Na Udemy, já formou mais de <strong style={{ color: "var(--cy)" }}>3.112 alunos</strong> com <strong style={{ color: "var(--tx)" }}>561 avaliações</strong> — tudo com foco prático e linguagem acessível.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {[
                  { v: "3.112", l: "Alunos na Udemy" },
                  { v: "561", l: "Avaliações" },
                  { v: "R$4M", l: "Economizados no Bradesco" },
                  { v: "Mackenzie", l: "Ciência de Dados" },
                ].map((s) => (
                  <div key={s.l} style={{ background: "var(--s2)", border: "1px solid var(--bdr)", borderTop: "2px solid var(--b2)", padding: "14px 12px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-h)", fontSize: 18, color: "var(--cy)", marginBottom: 4 }}>{s.v}</div>
                    <div style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--mt)", letterSpacing: ".06em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
                <a href="https://www.linkedin.com/in/rafael-de-oliveira-borges-engenhariadedados/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".1em", textDecoration: "none", border: "1px solid var(--bdr)", padding: "8px 16px" }}>
                  <span style={{ color: "#0A66C2", fontSize: 14 }}>in</span>
                  LINKEDIN
                </a>
                <a href="https://www.udemy.com/user/rafael-de-oliveira-borges/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".1em", textDecoration: "none", border: "1px solid var(--bdr)", padding: "8px 16px" }}>
                  <span style={{ color: "#A435F0", fontSize: 14 }}>U</span>
                  UDEMY — 3.112 ALUNOS
                </a>
              </div>
            </div>
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
        </div>
      </section>

      {/* ── FORMULÁRIO DE CADASTRO ───────────────────────────────────────── */}
      <section id="cadastro" className="grid-bg" style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700, height: 500,
          background: "radial-gradient(ellipse, rgba(91,45,176,.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(155,111,255,.4)",
              background: "rgba(61,26,138,.2)",
              padding: "6px 16px",
              fontFamily: "var(--font-m)", fontSize: 11, color: "var(--cy)",
              letterSpacing: ".1em", marginBottom: 20,
            }}>
              <span style={{
                display: "inline-block", width: 7, height: 7,
                borderRadius: "50%", background: "var(--cy)",
                boxShadow: "0 0 8px var(--cy)",
                animation: "pulse-cy 2s infinite",
              }} />
              GRATUITO — ACESSO IMEDIATO
            </div>
            <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 40px)", letterSpacing: ".06em", marginBottom: 12 }}>
              CRIE SUA CONTA AGORA
            </h2>
            <p style={{ fontFamily: "var(--font-b)", fontSize: "clamp(16px, 2vw, 22px)", color: "var(--mt)", lineHeight: 1.7 }}>
              Preencha abaixo e receba seu login por email na hora.
              <br /><strong style={{ color: "#E8E8F4" }}>Sem cartão. Sem surpresas.</strong>
            </p>
          </div>

          <div style={{
            background: "var(--s2)",
            border: "1px solid var(--b2)",
            borderTop: "2px solid var(--cy)",
            padding: "36px 36px",
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
          }}>
            <CadastroForm />
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
              { p: "O curso é realmente gratuito?", r: "Sim. O curso introdutório com n8n, agente de IA e integração WhatsApp via Z-API é 100% gratuito. Sem cartão, sem período de teste." },
              { p: "Como funciona o acesso?", r: "Você preenche o formulário acima e recebe um email com seu login e senha em minutos. Acessa a plataforma e já começa o curso." },
              { p: "Preciso saber programar?", r: "Não. O curso foi desenhado para quem nunca programou. Do zero, no seu ritmo, com exemplos práticos." },
              { p: "O que eu preciso ter instalado?", r: "Só um computador com acesso à internet. N8N tem versão cloud gratuita — sem necessidade de instalar nada." },
              { p: "O curso funciona em qual sistema operacional?", r: "Windows, Mac e Linux. As ferramentas utilizadas são todas online e multiplataforma." },
              { p: "Vou realmente conseguir criar os 2 agentes?", r: "Sim. O curso é construído passo a passo. Se você seguir as aulas, ao final terá um agente via link e um no WhatsApp funcionando." },
            ].map((faq) => (
              <div key={faq.p} className="punk-card" style={{ padding: "20px 22px", borderLeft: "2px solid var(--b1)" }}>
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: 13, letterSpacing: ".06em", marginBottom: 8 }} className="silver">{faq.p}</h3>
                <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7 }}>{faq.r}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#cadastro" className="btn-punk" style={{ fontSize: 12, padding: "16px 40px" }}>
              ▶ CRIAR MINHA CONTA GRÁTIS
            </a>
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
