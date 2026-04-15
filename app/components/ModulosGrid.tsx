type Modulo = {
  num: string;
  titulo: string;
  sub: string;
  tags: string[];
  foto: string;
  cor: string;
  gradiente: string;
};

const MODULOS: Modulo[] = [
  {
    num: "00",
    titulo: "Atualizações 2026",
    sub: "Apresentação",
    tags: [],
    foto: "/fotos/foto-01.jpeg",
    cor: "#9B6FFF",
    gradiente: "linear-gradient(160deg, #1a0a3a 0%, #3D1A8A 100%)",
  },
  {
    num: "01",
    titulo: "Introdução e Engenharia de Prompt",
    sub: "Fundamentos",
    tags: ["n8n", "Docker", "Prompts"],
    foto: "/fotos/foto-02.jpg",
    cor: "#9B6FFF",
    gradiente: "linear-gradient(160deg, #0d0620 0%, #5B2DB0 100%)",
  },
  {
    num: "02",
    titulo: "Essencial n8n",
    sub: "Integrações",
    tags: ["Google Sheets", "Gmail", "Webhooks"],
    foto: "/fotos/foto-03.jpg",
    cor: "#3ECF8E",
    gradiente: "linear-gradient(160deg, #041a12 0%, #0e6645 100%)",
  },
  {
    num: "03",
    titulo: "Agente e MultiAgentes de IA",
    sub: "Automação Avançada",
    tags: ["Agentes", "IA Generativa", "GPT"],
    foto: "/fotos/foto-04.jpg",
    cor: "#CC88FF",
    gradiente: "linear-gradient(160deg, #1f0515 0%, #7a1575 100%)",
  },
  {
    num: "04",
    titulo: "InfraEstrutura Própria",
    sub: "VPS · Cloudflare · Portainer",
    tags: ["VPS", "Cloudflare", "Portainer"],
    foto: "/fotos/foto-05.jpg",
    cor: "#F0C040",
    gradiente: "linear-gradient(160deg, #1a0d00 0%, #7a4a00 100%)",
  },
  {
    num: "05",
    titulo: "Integração Multimodal com Chatbots",
    sub: "Áudio · PDFs · Imagens",
    tags: ["Qdrant", "Redis", "Áudio"],
    foto: "/fotos/foto-06.jpg",
    cor: "#25dbef",
    gradiente: "linear-gradient(160deg, #001a1c 0%, #006070 100%)",
  },
  {
    num: "06",
    titulo: "Automação de Vídeo e Imagem",
    sub: "IA Generativa Visual",
    tags: ["DALL·E 3", "Placid", "Pexels"],
    foto: "/fotos/foto-07.jpg",
    cor: "#EA4B71",
    gradiente: "linear-gradient(160deg, #1f0008 0%, #880028 100%)",
  },
];

export default function ModulosGrid() {
  return (
    <section id="modulos" style={{ padding: "80px 0", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 52, padding: "0 24px" }}>
        <p style={{
          fontFamily: "var(--font-m)", fontSize: 10, color: "var(--cy)",
          letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 12,
        }}>
          Conteúdo do curso
        </p>
        <h2 style={{
          fontFamily: "var(--font-h)",
          fontSize: "clamp(28px, 5vw, 64px)",
          letterSpacing: "-.01em",
          lineHeight: 1,
          fontWeight: 900,
          background: "linear-gradient(180deg, #fff 0%, #D8D8F0 40%, #A0A0C0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textTransform: "uppercase",
        }}>
          7 Módulos<br />
          <span style={{
            background: "linear-gradient(90deg, #9B6FFF, #CC88FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Completos
          </span>
        </h2>
        <p style={{
          color: "var(--mt)", fontFamily: "var(--font-b)",
          fontSize: 16, marginTop: 16, letterSpacing: ".02em",
        }}>
          Do zero ao profissional — projetos reais em cada módulo
        </p>
      </div>

      {/* Grid de cards estilo FIAP */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 2,
        padding: "0 24px",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        {MODULOS.map((m) => (
          <div
            key={m.num}
            className="modulo-card"
            style={{
              position: "relative",
              height: 340,
              overflow: "hidden",
              background: m.gradiente,
              cursor: "default",
            }}
          >
            {/* Foto — graceful degradation com background-image CSS */}
            <div
              className="modulo-foto"
              style={{
                position: "absolute", inset: 0,
                backgroundImage: `url('${m.foto}')`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                transition: "transform .6s ease",
              }}
            />

            {/* Grade decorativa */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.05,
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />

            {/* Overlay base escuro */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(0deg, rgba(6,4,15,.98) 0%, rgba(6,4,15,.4) 50%, rgba(6,4,15,.2) 100%)",
            }} />

            {/* Overlay hover colorido — aparece no hover via CSS */}
            <div
              className="modulo-overlay"
              style={{
                position: "absolute", inset: 0,
                background: `${m.cor}CC`,
                opacity: 0,
                transition: "opacity .35s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "28px",
                gap: 12,
              }}
            >
              <div style={{
                fontFamily: "var(--font-m)", fontSize: 10,
                color: "rgba(0,0,0,0.7)", letterSpacing: ".16em",
                textTransform: "uppercase",
              }}>
                MÓDULO {m.num}
              </div>
              <h3 style={{
                fontFamily: "var(--font-h)", fontSize: 18,
                color: "#000", textAlign: "center",
                lineHeight: 1.2, letterSpacing: ".04em",
                textTransform: "uppercase",
              }}>
                {m.titulo}
              </h3>
              <div style={{ width: 40, height: 2, background: "rgba(0,0,0,0.4)" }} />
              {m.tags.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                  {m.tags.map((tag) => (
                    <span key={tag} style={{
                      background: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(0,0,0,0.3)",
                      color: "#000", fontFamily: "var(--font-m)",
                      fontSize: 10, padding: "3px 10px",
                      letterSpacing: ".08em",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Linha topo com cor do módulo */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: m.cor,
            }} />

            {/* Conteúdo padrão (visível sem hover) */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "20px 20px 22px",
              transition: "opacity .35s ease",
            }}
              className="modulo-info"
            >
              <span style={{
                display: "inline-block",
                background: m.cor,
                color: "#000", fontFamily: "var(--font-h)", fontWeight: 900,
                fontSize: 9, padding: "3px 10px", letterSpacing: ".14em",
                marginBottom: 8,
              }}>
                MÓDULO {m.num}
              </span>
              <h3 style={{
                fontFamily: "var(--font-h)", fontSize: 15, fontWeight: 700,
                color: "#fff", letterSpacing: ".04em", lineHeight: 1.25,
                textTransform: "uppercase",
              }}>
                {m.titulo}
              </h3>
              <p style={{
                fontFamily: "var(--font-m)", fontSize: 10, color: m.cor,
                letterSpacing: ".1em", marginTop: 4,
              }}>
                {m.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dica fotos */}
      <p style={{
        fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)",
        textAlign: "center", marginTop: 24, letterSpacing: ".06em", opacity: 0.45,
        padding: "0 24px",
      }}>
        Salve suas fotos em{" "}
        <span style={{ color: "var(--cy)" }}>public/fotos/foto-01.jpg</span>{" "}
        até{" "}
        <span style={{ color: "var(--cy)" }}>foto-07.jpg</span>{" "}
        para ativar os fundos com suas fotos
      </p>
    </section>
  );
}
