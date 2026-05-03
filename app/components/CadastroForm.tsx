"use client";

import { useState } from "react";

type FormData = {
  nome: string;
  email: string;
  whatsapp: string;
  profissao: string;
  nivel: string;
};

const N8N_WEBHOOK = "https://n8n.iadonaiacademy.com.br/webhook/cadastro-isca";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(155,111,255,.25)",
  borderBottom: "2px solid rgba(155,111,255,.5)",
  padding: "13px 16px",
  fontFamily: "var(--font-b)",
  fontSize: 15,
  color: "var(--tx)",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-m)",
  fontSize: 10,
  color: "var(--cy)",
  letterSpacing: ".14em",
  textTransform: "uppercase",
  marginBottom: 6,
};

export default function CadastroForm() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    profissao: "",
    nivel: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("erro");
      setSuccess(true);
    } catch {
      setError("Algo deu errado. Tente novamente ou entre em contato.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div style={{
        background: "rgba(61,207,142,.08)",
        border: "1px solid rgba(61,207,142,.4)",
        borderTop: "3px solid #3ECF8E",
        padding: "40px 36px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontFamily: "var(--font-h)", fontSize: 22, letterSpacing: ".06em", color: "#3ECF8E", marginBottom: 12 }}>
          CONTA CRIADA COM SUCESSO!
        </h3>
        <p style={{ fontFamily: "var(--font-b)", fontSize: 16, color: "var(--mt)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
          Seus dados de acesso foram enviados para <strong style={{ color: "var(--tx)" }}>{form.email}</strong>.
          <br />Verifique sua caixa de entrada (e o spam) e acesse a plataforma.
        </p>
        <p style={{ fontFamily: "var(--font-m)", fontSize: 11, color: "var(--mt)", letterSpacing: ".08em", marginTop: 20 }}>
          Pode demorar até 2 minutos para o email chegar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <label style={labelStyle}>Nome completo *</label>
          <input
            type="text"
            required
            placeholder="Seu nome"
            value={form.nome}
            onChange={(e) => set("nome", e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            required
            placeholder="seu@email.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>WhatsApp</label>
        <input
          type="tel"
          placeholder="(11) 99999-9999"
          value={form.whatsapp}
          onChange={(e) => set("whatsapp", e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <label style={labelStyle}>Profissão *</label>
          <select
            required
            value={form.profissao}
            onChange={(e) => set("profissao", e.target.value)}
            style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
          >
            <option value="" disabled>Selecione...</option>
            <option value="empreendedor">Empreendedor(a)</option>
            <option value="clt">Funcionário(a) CLT</option>
            <option value="freelancer">Freelancer / Autônomo(a)</option>
            <option value="estudante">Estudante</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Experiência com automação *</label>
          <select
            required
            value={form.nivel}
            onChange={(e) => set("nivel", e.target.value)}
            style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
          >
            <option value="" disabled>Selecione...</option>
            <option value="nunca-vi">Nunca vi automação</option>
            <option value="ja-tentei">Já tentei mas não consegui</option>
            <option value="tenho-experiencia">Tenho alguma experiência</option>
          </select>
        </div>
      </div>

      {error && (
        <p style={{ fontFamily: "var(--font-b)", fontSize: 13, color: "#FF6B6B", textAlign: "center" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-punk"
        style={{
          width: "100%",
          justifyContent: "center",
          fontSize: 13,
          padding: "18px 32px",
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
          border: "none",
          marginTop: 4,
        }}
      >
        {loading ? "CRIANDO SUA CONTA..." : "▶ CRIAR MINHA CONTA GRÁTIS — RECEBER ACESSO"}
      </button>

      <p style={{ fontFamily: "var(--font-m)", fontSize: 10, color: "var(--mt)", letterSpacing: ".06em", textAlign: "center" }}>
        Sem cartão · Sem compromisso · Acesso imediato após o cadastro
      </p>
    </form>
  );
}
