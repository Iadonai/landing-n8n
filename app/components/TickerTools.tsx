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

type Tool = {
  nome: string;
  cor: string;
  icon?: IconType;
  sigla?: string;
};

const TOOLS: Tool[] = [
  { nome: "n8n",           cor: "#EA4B71", sigla: "n8n" },
  { nome: "Docker",        cor: "#2496ED", icon: SiDocker },
  { nome: "ngrok",         cor: "#6366F1", sigla: "ng" },
  { nome: "Flowise",       cor: "#0098A6", sigla: "FL" },
  { nome: "DALL·E 3",      cor: "#10A37F", icon: SiOpenai },
  { nome: "Evolution API", cor: "#7B4FD0", sigla: "EVO" },
  { nome: "Supabase",      cor: "#3ECF8E", icon: SiSupabase },
  { nome: "Redis",         cor: "#DC382D", icon: SiRedis },
  { nome: "Pinecone",      cor: "#A78BFA", sigla: "PC" },
  { nome: "Qdrant",        cor: "#DC244C", sigla: "QD" },
  { nome: "Google Sheets", cor: "#0F9D58", icon: SiGooglesheets },
  { nome: "Gmail",         cor: "#EA4335", icon: SiGmail },
  { nome: "WhatsApp",      cor: "#25D366", icon: SiWhatsapp },
  { nome: "Cloudflare",    cor: "#F48120", icon: SiCloudflare },
  { nome: "Portainer",     cor: "#13BEF9", sigla: "PT" },
  { nome: "Pexels",        cor: "#05A081", icon: SiPexels },
  { nome: "Placid",        cor: "#6C63FF", sigla: "PL" },
];

function ToolItem({ tool }: { tool: Tool }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "0 28px",
        flexShrink: 0,
      }}
    >
      {/* Ícone */}
      <div
        style={{
          width: 32,
          height: 32,
          background: `${tool.cor}20`,
          border: `1px solid ${tool.cor}50`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath:
            "polygon(10% 0%,90% 0%,100% 10%,100% 90%,90% 100%,10% 100%,0% 90%,0% 10%)",
          flexShrink: 0,
        }}
      >
        {tool.icon ? (
          <tool.icon size={16} color={tool.cor} />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-h)",
              fontSize: tool.sigla && tool.sigla.length > 2 ? 7 : 10,
              color: tool.cor,
              fontWeight: 900,
              letterSpacing: ".02em",
            }}
          >
            {tool.sigla}
          </span>
        )}
      </div>

      {/* Nome */}
      <span
        style={{
          fontFamily: "var(--font-m)",
          fontSize: 12,
          color: "var(--mt)",
          letterSpacing: ".08em",
          whiteSpace: "nowrap",
        }}
      >
        {tool.nome}
      </span>

      {/* Separador */}
      <span style={{ color: "var(--cy)", fontSize: 10, paddingLeft: 8, opacity: 0.4 }}>◈</span>
    </div>
  );
}

export default function TickerTools() {
  // Duplica 3x para loop suave
  const items = [...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        borderTop: "1px solid var(--cy)",
        background: "linear-gradient(90deg, rgba(10,7,24,0.96) 0%, rgba(14,10,32,0.98) 50%, rgba(10,7,24,0.96) 100%)",
        backdropFilter: "blur(16px)",
        height: 48,
        overflow: "hidden",
        boxShadow: "0 -4px 32px rgba(155,111,255,0.15)",
      }}
    >
      {/* Fade lateral esquerdo */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(90deg, var(--s1), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Fade lateral direito */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(-90deg, var(--s1), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Faixa rolando */}
      <div
        className="ticker-inner"
        style={{ display: "flex", alignItems: "center", height: "100%" }}
      >
        {items.map((tool, i) => (
          <ToolItem key={`${tool.nome}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}
