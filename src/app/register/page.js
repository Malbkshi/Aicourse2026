import RegistrationForm from "./RegistrationForm";

export const metadata = {
  title: "تسجيل الطلاب | ذكاء اصطناعي ليبي",
  description:
    "سجل في الدورة الاحترافية للذكاء الاصطناعي. ابدأ رحلتك من الأساسيات إلى الاحتراف.",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      <div className="relative w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black mb-4">
            <span className="gold-text">تسجيل الطلاب</span>
          </h1>
          <div className="w-20 h-0.5 bg-gold/50 mx-auto mb-6" />
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            انضم إلى الدورة الاحترافية للذكاء الاصطناعي. املأ النموذج وابدأ
            رحلتك التعليمية.
          </p>
        </div>
        <div className="glass rounded-3xl p-8 sm:p-10 glow">
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
