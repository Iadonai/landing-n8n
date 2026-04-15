import {
  SiDocker,
  SiRedis,
  SiGmail,
  SiWhatsapp,
  SiCloudflare,
  SiOpenai,
  SiSupabase,
  SiGooglesheets,
  SiPexels,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Ferramenta = {
  nome: string;
  cor: string;
  icon?: IconType;
  sigla?: string;
  categoria: string;
};

const FERRAMENTAS: Ferramenta[] = [
  // Automação
  { nome: "n8n",          cor: "#EA4B71", sigla: "n8n", categoria: "Automação" },
  { nome: "Docker",       cor: "#2496ED", icon: SiDocker,       categoria: "Automação" },
  { nome: "ngrok",        cor: "#6366F1", sigla: "ng",          categoria: "Automação" },
  { nome: "Flowise",      cor: "#0098A6", sigla: "FL",          categoria: "Automação" },
  // IA
  { nome: "DALL·E 3",     cor: "#10A37F", icon: SiOpenai,       categoria: "IA" },
  { nome: "Evolution API",cor: "#7B4FD0", sigla: "EVO",         categoria: "IA" },
  // Banco de Dados
  { nome: "Supabase",     cor: "#3ECF8E", icon: SiSupabase,     categoria: "Banco de Dados" },
  { nome: "Redis",        cor: "#DC382D", icon: SiRedis,        categoria: "Banco de Dados" },
  { nome: "Pinecone",     cor: "#1C1C1C", sigla: "PC",          categoria: "Banco de Dados" },
  { nome: "Qdrant",       cor: "#DC244C", sigla: "QD",          categoria: "Banco de Dados" },
  // Integrações
  { nome: "Google Sheets",cor: "#0F9D58", icon: SiGooglesheets, categoria: "Integrações" },
  { nome: "Gmail",        cor: "#EA4335", icon: SiGmail,        categoria: "Integrações" },
  { nome: "WhatsApp",     cor: "#25D366", icon: SiWhatsapp,     categoria: "Integrações" },
  // Infraestrutura
  { nome: "Cloudflare",   cor: "#F48120", icon: SiCloudflare,   categoria: "Infraestrutura" },
  { nome: "Portainer",    cor: "#13BEF9", sigla: "PT",          categoria: "Infraestrutura" },
  // Mídia
  { nome: "Pexels",       cor: "#05A081", icon: SiPexels,       categoria: "Mídia" },
  { nome: "Placid",       cor: "#6C63FF", sigla: "PL",          categoria: "Mídia" },
];

const CATEGORIAS = ["Automação", "IA", "Banco de Dados", "Integrações", "Infraestrutura", "Mídia"];

export default function Ferramentas() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--bdr)",
        borderBottom: "1px solid var(--bdr)",
        background: "var(--s1)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p
            style={{
              fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)",
              letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 10,
            }}
          >
            Ecossistema completo
          </p>
          <h2
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "clamp(22px, 3vw, 38px)",
              letterSpacing: ".06em",
              background: "linear-gradient(180deg, #fff 0%, #D8D8F0 40%, #A0A0C0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 8px rgba(155,111,255,.3))",
            }}
          >
            17 FERRAMENTAS, 1 CURSO
          </h2>
          <p style={{ color: "var(--mt)", fontFamily: "var(--font-b)", fontSize: 16, marginTop: 10 }}>
            Tudo que o mercado usa, você vai aprender na prática
          </p>
        </div>

        {CATEGORIAS.map((cat) => {
          const itens = FERRAMENTAS.filter((f) => f.categoria === cat);
          return (
            <div key={cat} style={{ marginBottom: 32 }}>
              {/* Label da categoria */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)",
                    letterSpacing: ".16em", textTransform: "uppercase",
                    flexShrink: 0,
                  }}
                >
                  {cat}
                </div>
                <div style={{ flex: 1, height: 1, background: "var(--bdr)" }} />
              </div>

              {/* Grid de ferramentas */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: 10,
                }}
              >
                {itens.map((f) => (
                  <div
                    key={f.nome}
                    style={{
                      background: "var(--s2)",
                      border: "1px solid var(--bdr)",
                      padding: "18px 14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                      transition: "border-color .2s, background .2s",
                      cursor: "default",
                    }}
                    className="tool-card"
                  >
                    {/* Logo */}
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: `${f.cor}18`,
                        border: `1px solid ${f.cor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        clipPath: "polygon(10% 0%,90% 0%,100% 10%,100% 90%,90% 100%,10% 100%,0% 90%,0% 10%)",
                        flexShrink: 0,
                      }}
                    >
                      {f.icon ? (
                        <f.icon size={24} color={f.cor} />
                      ) : (
                        <span
                          style={{
                            fontFamily: "var(--font-h)",
                            fontSize: f.sigla && f.sigla.length > 2 ? 9 : 12,
                            color: f.cor,
                            letterSpacing: ".04em",
                            fontWeight: 900,
                          }}
                        >
                          {f.sigla}
                        </span>
                      )}
                    </div>

                    {/* Nome */}
                    <span
                      style={{
                        fontFamily: "var(--font-b)",
                        fontSize: 13,
                        color: "var(--tx)",
                        textAlign: "center",
                        lineHeight: 1.3,
                      }}
                    >
                      {f.nome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
