"use client";

import { useState } from "react";
import Image from "next/image";

const PROJETOS = [
  {
    id: "01",
    categoria: "RAG + Memória",
    titulo: "RAG AI Agent com Supabase",
    desc: "Agente de IA com memória vetorial que responde perguntas com base nos seus documentos. Integra OpenAI, Supabase Vector Store e chat em tempo real.",
    tags: ["RAG", "Supabase", "OpenAI", "Memória Vetorial"],
    cor: "#9B6FFF",
    img: "/projetos/projeto-01.png",
  },
  {
    id: "02",
    categoria: "Bot de Atendimento",
    titulo: "Bot de Atendimento Inteligente",
    desc: "Agente de IA para atendimento automático ao cliente — responde dúvidas, coleta dados e encaminha para o time humano quando necessário.",
    tags: ["n8n", "OpenAI", "WhatsApp", "Atendimento"],
    cor: "#CC88FF",
    img: "/projetos/projeto-02.png",
  },
  {
    id: "03",
    categoria: "Disparo em Massa",
    titulo: "Disparador de Mensagens WhatsApp",
    desc: "Fluxo completo de disparo em massa via WhatsApp: lê contatos, personaliza mensagens com IA e dispara com controle de horário e status.",
    tags: ["WhatsApp", "Evolution API", "Google Sheets", "n8n"],
    cor: "#3ECF8E",
    img: "/projetos/projeto-03.png",
  },
  {
    id: "04",
    categoria: "Prospecção de Leads",
    titulo: "Prospecção de Leads com Google Maps",
    desc: "Sistema que busca empresas no Google Maps, filtra por nicho, envia mensagens personalizadas no WhatsApp e registra tudo automaticamente.",
    tags: ["Google Maps", "WhatsApp", "Leads", "Automação"],
    cor: "#F0C040",
    img: "/projetos/projeto-04.png",
  },
  {
    id: "05",
    categoria: "Agente de Voz · MCP",
    titulo: "Agente de Voz com ElevenLabs + MCP",
    desc: "MultiAgente de atendimento com voz real gerada pelo ElevenLabs, memória persistente no Supabase e integração MCP para contexto avançado.",
    tags: ["ElevenLabs", "Voz IA", "Supabase", "MCP", "MultiAgente"],
    cor: "#FF6B6B",
    img: "/projetos/projeto-05.png",
  },
];

function ProjetoCard({
  p,
  onOpen,
  width,
}: {
  p: (typeof PROJETOS)[0];
  onOpen: (img: string, titulo: string) => void;
  width?: string;
}) {
  return (
    <div
      className="projeto-card"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#100D24",
        border: "1px solid #2A2150",
        borderTop: `3px solid ${p.cor}`,
        display: "flex",
        flexDirection: "column",
        width: width,
      }}
    >
      {/* Área clicável da imagem */}
      <div
        onClick={() => onOpen(p.img, p.titulo)}
        style={{ cursor: "zoom-in", position: "relative" }}
      >
        <div
          className="projeto-img"
          style={{
            height: 220,
            backgroundImage: `url('${p.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#0A0718",
            position: "relative",
            transition: "transform .5s ease",
          }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(0deg, #100D24 0%, rgba(14,10,32,.5) 50%, ${p.cor}22 100%)`,
          }} />

          {/* Badge categoria */}
          <div style={{
            position: "absolute", top: 14, left: 14,
            background: p.cor, color: "#000",
            fontFamily: "var(--font-h)", fontWeight: 900,
            fontSize: 9, padding: "3px 10px", letterSpacing: ".14em",
          }}>
            {p.categoria.toUpperCase()}
          </div>

          {/* Número */}
          <div style={{
            position: "absolute", top: 14, right: 14,
            fontFamily: "var(--font-m)", fontSize: 11,
            color: p.cor, letterSpacing: ".1em", opacity: 0.7,
          }}>
            #{p.id}
          </div>

          {/* Ícone de zoom */}
          <div style={{
            position: "absolute", bottom: 14, right: 14,
            background: "rgba(0,0,0,.6)", border: `1px solid ${p.cor}66`,
            color: p.cor, fontSize: 13, padding: "4px 8px",
            fontFamily: "var(--font-m)", letterSpacing: ".06em",
            backdropFilter: "blur(4px)",
          }}>
            ⤢ VER COMPLETO
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ padding: "22px 24px 28px", flex: 1 }}>
        <h3 style={{
          fontFamily: "var(--font-h)", fontSize: 15, fontWeight: 700,
          letterSpacing: ".04em", textTransform: "uppercase",
          color: "#fff", marginBottom: 10, lineHeight: 1.25,
        }}>
          {p.titulo}
        </h3>
        <p style={{
          fontFamily: "var(--font-b)", fontSize: 14,
          color: "var(--mt)", lineHeight: 1.7, marginBottom: 16,
        }}>
          {p.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map((tag) => (
            <span key={tag} style={{
              background: "rgba(155,111,255,.08)",
              border: `1px solid ${p.cor}40`,
              color: p.cor,
              fontFamily: "var(--font-m)", fontSize: 10,
              padding: "3px 10px", letterSpacing: ".08em",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjetosGrid() {
  const [lightbox, setLightbox] = useState<{ img: string; titulo: string } | null>(null);

  return (
    <>
      <section style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--b1)",
        borderBottom: "1px solid var(--b1)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900, height: 400,
          background: "radial-gradient(ellipse, rgba(61,26,138,.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{
              fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)",
              letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 12,
            }}>
              Projetos reais do curso
            </p>
            <h2 style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(26px, 4vw, 48px)",
              letterSpacing: ".04em", lineHeight: 1.1, fontWeight: 900,
              background: "linear-gradient(180deg, #fff 0%, #D8D8F0 40%, #A0A0C0 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", textTransform: "uppercase", marginBottom: 12,
            }}>
              O QUE VOCÊ VAI<br />
              <span style={{
                background: "linear-gradient(90deg, #9B6FFF, #CC88FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                CONSTRUIR NA PRÁTICA
              </span>
            </h2>
            <p style={{
              color: "var(--mt)", fontFamily: "var(--font-b)",
              fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
            }}>
              Projetos funcionando que você leva prontos para usar no seu negócio ou vender para clientes.
            </p>
          </div>

          {/* Linha 1 — 3 projetos */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>
            {PROJETOS.slice(0, 3).map((p) => (
              <ProjetoCard key={p.id} p={p} onOpen={(img, titulo) => setLightbox({ img, titulo })} />
            ))}
          </div>

          {/* Linha 2 — 2 projetos centralizados */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            {PROJETOS.slice(3).map((p) => (
              <ProjetoCard
                key={p.id} p={p}
                onOpen={(img, titulo) => setLightbox({ img, titulo })}
                width="calc(33.333% - 8px)"
              />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{
              fontFamily: "var(--font-m)", fontSize: 11,
              color: "var(--mt)", letterSpacing: ".08em", marginBottom: 20,
            }}>
              + dezenas de automações menores ao longo dos módulos
            </p>
            <a href="#comprar" className="btn-punk" style={{ fontSize: 11 }}>
              QUERO CONSTRUIR ESSES PROJETOS →
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,.92)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: 24,
            backdropFilter: "blur(8px)",
            cursor: "zoom-out",
          }}
        >
          {/* Título */}
          <div style={{
            fontFamily: "var(--font-h)", fontSize: 13, color: "#fff",
            letterSpacing: ".1em", textTransform: "uppercase",
            marginBottom: 16, opacity: 0.8,
          }}>
            {lightbox.titulo}
          </div>

          {/* Imagem */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "80vh",
              border: "1px solid rgba(155,111,255,.3)",
              boxShadow: "0 0 60px rgba(91,45,176,.4)",
              overflow: "auto",
              cursor: "default",
            }}
          >
            <Image
              src={lightbox.img}
              alt={lightbox.titulo}
              width={1400}
              height={800}
              style={{ display: "block", width: "100%", height: "auto" }}
              unoptimized
            />
          </div>

          {/* Fechar */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              marginTop: 20,
              background: "transparent",
              border: "1px solid rgba(255,255,255,.2)",
              color: "rgba(255,255,255,.6)",
              fontFamily: "var(--font-m)", fontSize: 11,
              letterSpacing: ".12em", padding: "8px 24px",
              cursor: "pointer",
            }}
          >
            ✕ FECHAR
          </button>
        </div>
      )}
    </>
  );
}
