"use client";

import { useState } from "react";

const FAQS = [
  { p: "O curso é realmente gratuito?", r: "Sim. 100% gratuito. Sem cartão, sem período de teste, sem cobrança escondida. O curso com n8n, agente de IA e integração WhatsApp via Z-API é completamente free." },
  { p: "Como funciona o acesso?", r: "Você preenche o formulário e recebe um email com seu login e senha em minutos. Acessa a plataforma e já começa o curso — sem espera, sem fila." },
  { p: "Preciso saber programar?", r: "Não. O curso foi desenhado para quem nunca programou. N8N é no-code: você arrasta, conecta e roda. As aulas partem do zero absoluto." },
  { p: "O que eu preciso ter instalado?", r: "Só um computador com acesso à internet. N8N tem versão cloud gratuita — sem necessidade de instalar nada na sua máquina." },
  { p: "O curso funciona em qual sistema operacional?", r: "Windows, Mac e Linux. As ferramentas utilizadas são todas online e multiplataforma." },
  { p: "Vou realmente conseguir criar os 2 agentes?", r: "Sim. O curso é construído passo a passo. Se você seguir as aulas, ao final terá um agente via link e um no WhatsApp funcionando — não é teoria, é construção guiada." },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            onClick={() => setOpenIndex(isOpen ? null : i)}
            className="punk-card"
            style={{
              marginBottom: 8,
              padding: 0,
              cursor: "pointer",
              userSelect: "none",
              borderLeft: isOpen ? "2px solid var(--cy)" : "2px solid transparent",
              transition: "border-color .2s, background .2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", gap: 16 }}>
              <h3 style={{
                fontFamily: "var(--font-h)", fontSize: 12, letterSpacing: ".06em",
                color: isOpen ? "var(--cy)" : "var(--tx)",
                transition: "color .2s",
              }}>
                {faq.p.toUpperCase()}
              </h3>
              <span style={{
                color: "var(--cy)", fontSize: 22, flexShrink: 0,
                transition: "transform .3s",
                transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                display: "inline-block",
                lineHeight: 1,
              }}>+</span>
            </div>
            <div style={{
              overflow: "hidden",
              maxHeight: isOpen ? 200 : 0,
              opacity: isOpen ? 1 : 0,
              transition: "max-height .4s ease, opacity .3s ease",
              paddingLeft: 22, paddingRight: 22,
              paddingBottom: isOpen ? 18 : 0,
            }}>
              <p style={{ fontFamily: "var(--font-b)", fontSize: 14, color: "var(--mt)", lineHeight: 1.8 }}>
                {faq.r}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
