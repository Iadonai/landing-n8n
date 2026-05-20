"use client";

import { useState } from "react";
import Image from "next/image";
import TickerTools from "./components/TickerTools";
import CadastroForm from "./components/CadastroForm";
import Reveal from "./components/Reveal";
import FaqAccordion from "./components/FaqAccordion";

export default function LandingPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          <Reveal>
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
          </Reveal>

          <Reveal delay={150}>
          {/* Headline */}
          <h1
            className="silver-lg"
            style={{ fontFamily: "var(--font-h)", fontSize: "clamp(30px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: ".04em", marginBottom: 8 }}
          >
            CRIE SEU PRIMEIRO<br />
            <span className="cy-text">AGENTE DE IA COM N8N</span>
          </h1>
          </Reveal>

          <Reveal delay={280}>
          <p style={{
            fontFamily: "var(--font-b)", fontSize: "clamp(15px, 1.8vw, 19px)",
            color: "var(--mt)", maxWidth: 620, margin: "20px auto 36px", lineHeight: 1.8,
          }}>
            Aprenda N8N do zero e construa <strong style={{ color: "var(--tx)" }}>2 projetos reais</strong> —
            um agente de IA via link e outro integrado ao WhatsApp.
            Sem programação. Resultado em minutos.
          </p>
          </Reveal>

          <Reveal delay={400}>
          <a href="#cadastro" className="btn-punk" style={{ fontSize: 13, padding: "18px 48px" }}>
            ▶ QUERO ACESSO GRATUITO
          </a>
          </Reveal>

          {/* Prova social */}
          <Reveal delay={550}>
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
          </Reveal>
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

          <div className="grid-2col">

            {/* Case 1 */}
            <Reveal delay={100}>
            <div
              style={{ background: "var(--s2)", border: "1px solid var(--bdr)", borderTop: "3px solid var(--cy)", overflow: "hidden", transition: "transform .3s, box-shadow .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(155,111,255,.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
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
            </Reveal>

            {/* Case 2 */}
            <Reveal delay={250}>
            <div
              style={{ background: "var(--s2)", border: "1px solid var(--bdr)", borderTop: "3px solid #3ECF8E", overflow: "hidden", transition: "transform .3s, box-shadow .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(62,207,142,.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
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
            </Reveal>

          </div>

          <Reveal delay={200}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="#cadastro" className="btn-punk" style={{ fontSize: 12, padding: "16px 40px" }}>
              ▶ QUERO CONSTRUIR ESSES PROJETOS — CRIAR CONTA GRÁTIS
            </a>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ── O QUE VOCÊ VAI APRENDER ──────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "var(--s1)", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
                Conteúdo do curso
              </p>
              <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
                4 MÓDULOS. 4 HABILIDADES. SEM ENROLAÇÃO.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid-4col">
              {[
                { num: "01", titulo: "Fundamentos N8N", desc: "A maioria das pessoas trava aqui e desiste. Você não vai. O que importa, direto ao ponto.", detail: "Nós · Workflows · Triggers" },
                { num: "02", titulo: "Google Sheets", desc: "Esqueça banco de dados caro. Planilha é o CRM do povo — e você vai usar como profissional.", detail: "Read · Append · Update" },
                { num: "03", titulo: "Agentes de IA", desc: "Não é chatbot burro. É um agente com memória que consulta seus dados e age de forma autônoma.", detail: "LLM · Memória · RAG" },
                { num: "04", titulo: "WhatsApp", desc: "O canal com 98% de taxa de abertura. Você vai integrar hoje — sem pagar fortuna.", detail: "Z-API · Webhooks · Bot" },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    borderRight: i < 3 ? "1px solid var(--bdr)" : "none",
                    borderLeft: i === 0 ? "1px solid var(--bdr)" : "none",
                    padding: "48px 32px",
                    display: "flex", flexDirection: "column", textAlign: "center",
                    transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-12px)";
                    e.currentTarget.style.background = "rgba(155,111,255,.04)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(155,111,255,.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontFamily: "var(--font-h)", fontSize: "5rem", color: "var(--tx)", lineHeight: 1, marginBottom: "2rem", letterSpacing: "-.03em", opacity: .9 }}>
                    {m.num}
                  </div>
                  <div style={{ width: 24, height: 1, background: "var(--cy)", opacity: .5, margin: "0 auto 2rem" }} />
                  <h3 style={{ fontFamily: "var(--font-h)", fontSize: "1.1rem", letterSpacing: ".06em", marginBottom: "1rem", color: "var(--tx)" }}>
                    {m.titulo.toUpperCase()}
                  </h3>
                  <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7, marginBottom: "2rem", flexGrow: 1 }}>
                    {m.desc}
                  </p>
                  <div style={{ borderTop: "1px solid var(--bdr)", paddingTop: "1.25rem", marginTop: "auto" }}>
                    <span style={{ fontFamily: "var(--font-m)", fontSize: 9, color: "var(--cy)", letterSpacing: ".12em" }}>
                      {m.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────────────────────── */}
      <section id="como-funciona" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
                Simples assim
              </p>
              <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
                PREENCHE, RECEBE, CONSTRÓI.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid-steps">
              {[
                { num: "01", titulo: "Preencha o formulário", desc: "Nome, email e mais 2 perguntas rápidas. Menos de 1 minuto. Nada de cartão de crédito." },
                { num: "02", titulo: "Receba seu acesso por email", desc: "Seu login e senha chegam na hora. Clique no link, entre na plataforma e já acessa o curso." },
                { num: "03", titulo: "Construa seus agentes", desc: "Siga as aulas e termine com 2 agentes de IA funcionando. Um via link, outro no WhatsApp." },
              ].map((step, i) => (
                <>
                  <div
                    key={`step-${i}`}
                    style={{ border: "1px solid var(--bdr)", padding: "48px 32px", textAlign: "center", display: "flex", flexDirection: "column", background: "var(--s2)", transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-14px) scale(1.02)"; e.currentTarget.style.borderColor = "var(--b3)"; e.currentTarget.style.boxShadow = "0 24px 64px rgba(155,111,255,.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontFamily: "var(--font-h)", fontSize: "4rem", color: "var(--cy)", lineHeight: 1, marginBottom: "1.5rem", letterSpacing: "-.03em" }}>
                      {step.num}
                    </div>
                    <div style={{ width: 24, height: 1, background: "var(--cy)", opacity: .5, margin: "0 auto 1.5rem" }} />
                    <h3 style={{ fontFamily: "var(--font-h)", fontSize: "1rem", letterSpacing: ".06em", color: "var(--tx)", marginBottom: "1rem" }}>
                      {step.titulo.toUpperCase()}
                    </h3>
                    <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < 2 && (
                    <div key={`arrow-${i}`} className="step-arrow">
                      →
                    </div>
                  )}
                </>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PARA QUEM É ──────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "var(--s1)", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
                Público-alvo
              </p>
              <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em", marginBottom: 20 }}>
                VOCÊ SE ENCAIXA AQUI SE ALGUM<br />DESSES CENÁRIOS TE INCOMODA
              </h2>
              <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, var(--b2), var(--cy))", margin: "0 auto" }} />
            </div>
          </Reveal>

          <div>
            {[
              "Você ainda responde mensagem de cliente manualmente — e tá cansado disso",
              "Você já tentou aprender automação mas travou no técnico e desistiu",
              "Você paga caro em ferramentas ou freelancers para fazer coisas que poderia automatizar",
              "Você vê todo mundo falando de agentes de IA mas não sabe por onde começar",
              "Você quer um bot no WhatsApp mas as plataformas prontas cobram demais pelo que entregam",
            ].map((text, i) => (
              <Reveal key={i} delay={i * 90}>
                <div
                  style={{ borderBottom: "1px solid var(--bdr)", padding: "24px 0", display: "flex", alignItems: "flex-start", gap: 20, transition: "padding-left .2s, border-color .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.paddingLeft = "12px"; e.currentTarget.style.borderBottomColor = "var(--b3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0"; e.currentTarget.style.borderBottomColor = "var(--bdr)"; }}
                >
                  <span style={{ color: "var(--cy)", fontSize: 10, marginTop: 7, flexShrink: 0 }}>◆</span>
                  <span style={{ fontFamily: "var(--font-b)", fontSize: 17, color: "var(--tx)", lineHeight: 1.6 }}>{text}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href="#cadastro" className="btn-punk" style={{ fontSize: 12, padding: "16px 40px" }}>
                ▶ ESSE SOU EU — QUERO MEU ACESSO GRÁTIS
              </a>
            </div>
          </Reveal>
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

          <div className="grid-instrutor">
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
              <div className="grid-stats-4">
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
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10 }}>
                Resultados reais
              </p>
              <h2 className="silver-lg" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(22px, 3vw, 38px)", letterSpacing: ".06em" }}>
                O QUE NOSSOS ALUNOS ESTÃO FALANDO
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            {["depoimento-01", "depoimento-02", "depoimento-03"].map((dep, i) => (
              <Reveal key={dep} delay={i * 150}>
                <div
                  onClick={() => setSelectedImage(`/projetos/${dep}.PNG`)}
                  style={{ overflow: "hidden", border: "1px solid var(--bdr)", cursor: "zoom-in", background: "rgba(255,255,255,.97)", transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.borderColor = "rgba(91,155,213,.4)";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(91,155,213,.25)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "var(--bdr)";
                    e.currentTarget.style.boxShadow = "none";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={`/projetos/${dep}.PNG`}
                    alt="Depoimento de aluno"
                    width={600}
                    height={250}
                    style={{ display: "block", width: "100%", height: "auto", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                    unoptimized
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: "center", fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", marginTop: 16, letterSpacing: ".06em" }}>Clique para ampliar</p>
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
          <FaqAccordion />

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

      {/* ── LIGHTBOX ── */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, background: "rgba(6,4,15,.95)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out", padding: "2rem", animation: "glow-in .3s ease" }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }} onClick={e => e.stopPropagation()}>
            <Image src={selectedImage} alt="Depoimento ampliado" width={1200} height={800} style={{ width: "100%", height: "auto", display: "block", border: "1px solid var(--b2)" }} unoptimized />
            <button
              onClick={() => setSelectedImage(null)}
              style={{ position: "absolute", top: -32, right: 0, color: "var(--mt)", background: "none", border: "none", fontSize: 11, cursor: "pointer", fontFamily: "var(--font-m)", letterSpacing: ".1em" }}
            >
              ✕ FECHAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
