import "./globals.css";

export const metadata = {
  title: "الدورة الاحترافية في الذكاء الاصطناعي | ذكاء اصطناعي ليبي",
  description:
    "دورة متكاملة في الذكاء الاصطناعي تغطي الأساسيات،Transformer، النماذج الشهيرة، والتطبيقات العملية. انضم إلى نخبة من المدربين الخبراء.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "الدورة الاحترافية في الذكاء الاصطناعي",
    description:
      "دورة شاملة من الأساسيات إلى التطبيقات المتقدمة في الذكاء الاصطناعي",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="min-h-screen bg-bg-dark font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
