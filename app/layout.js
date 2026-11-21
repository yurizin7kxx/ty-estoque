import "./globals.css";

export const metadata = {
  title: "TY Estoque | Gestão da loja",
  description: "Sistema de gestão e ponto de venda para loja de roupas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
