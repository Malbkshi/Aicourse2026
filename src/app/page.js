import Link from "next/link";
import StatsSection from "@/components/StatsSection";

const chapters = [
  {
    id: 1,
    title: "المفاهيم الأساسية",
    desc: "أساسيات الكمبيوتر والإنترنت، الفرق بين البرمجة التقليدية والتعلم الآلي، بروتوكول HTTP، DNS، CPU و RAM.",
    icon: "💻",
  },
  {
    id: 2,
    title: "تقنية الانتباه (Attention)",
    desc: "معمارية Transformer، الانتباه الذاتي، Multi-Head Attention، ورقة Attention Is All You Need 2017.",
    icon: "🧠",
  },
  {
    id: 3,
    title: "CPU vs GPU",
    desc: "لماذا كروت الشاشة هي العمود الفقري للذكاء الاصطناعي، نوى CUDA، VRAM، Flash Attention.",
    icon: "⚡",
  },
  {
    id: 4,
    title: "الباراميتر والتدريب",
    desc: "مفهوم الباراميترات، Pre-training، Fine-tuning، RLHF، النماذج المفتوحة والمغلقة.",
    icon: "📊",
  },
  {
    id: 5,
    title: "API و MCP",
    desc: "ربط التطبيقات بالنماذج عبر REST API و Streaming، بروتوكول MCP للوكلاء الذكيين.",
    icon: "🔗",
  },
  {
    id: 6,
    title: "النماذج المشهورة",
    desc: "GPT 5.6، Fable 5، Gemini 3.0، Llama 4، Qwen 3، DeepSeek — مقارنة شاملة.",
    icon: "🏆",
  },
  {
    id: 7,
    title: "التطبيقات العملية",
    desc: "توليد النصوص والصور (Midjourney، DALL-E 3، Stable Diffusion) والفيديو (Sora، Runway) والصوت (ElevenLabs، Suno).",
    icon: "🎨",
  },
  {
    id: 8,
    title: "تشغيل النماذج محليًا",
    desc: "Ollama، LM Studio، GPT4All، متطلبات العتاد، تشغيل Llama و Qwen على جهازك الشخصي.",
    icon: "🖥️",
  },
  {
    id: 9,
    title: "تمارين ومشروع نهائي",
    desc: "تقييم شامل، تمارين عملية لكل فصل، بناء مساعد شخصي عربي بالذكاء الاصطناعي.",
    icon: "🎯",
  },
];

const features = [
  {
    title: "من الصفر إلى الاحتراف",
    desc: "تبدأ من الأساسيات المطلقة وصولًا إلى أحدث التقنيات",
  },
  {
    title: "تطبيقات عملية",
    desc: "كل فصل يحتوي على تطبيقات وتجارب عملية وصفية",
  },
  {
    title: "مدربون خبراء",
    desc: "نخبة من المتخصصين في الذكاء الاصطناعي",
  },
  {
    title: "دعم فني مستمر",
    desc: "فريق دعم متاح للإجابة على استفساراتك طوال مدة الدورة",
  },
  {
    title: "محتوى محدث 2026",
    desc: "أحدث النماذج والتقنيات: GPT 5.6، Fable 5، Sora، Suno 5.5",
  },
  {
    title: "دعم مستمر",
    desc: "مجتمع تفاعلي وجلسات استشارية مع المدربين",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CourseOverview />
      <Curriculum />
      <WhyUs />
      <RegisterCTA />
      <StatsSection />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="text-gold font-bold text-lg tracking-wide">
              ذكاء اصطناعي ليبي
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#course"
              className="text-sm text-zinc-300 hover:text-gold transition-colors"
            >
              عن الدورة
            </Link>
            <Link
              href="#curriculum"
              className="text-sm text-zinc-300 hover:text-gold transition-colors"
            >
              المحتوى
            </Link>
            <Link
              href="#register-cta"
              className="text-sm text-zinc-300 hover:text-gold transition-colors"
            >
              سجل الآن
            </Link>
            <Link
              href="#why-us"
              className="text-sm text-zinc-300 hover:text-gold transition-colors"
            >
              لماذا هذه الدورة
            </Link>
          </nav>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-bg-dark bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            سجل الآن
            <span>←</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 text-center pt-20">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest text-gold border border-gold/30 bg-gold/5 mb-8 uppercase">
            الدورة الاحترافية 2026
          </span>
        </div>
        <h1 className="animate-fade-in-up animate-delay-1 text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
          <span className="gold-text">الدورة الاحترافية</span>
          <br />
          <span className="text-white">في الذكاء الاصطناعي</span>
        </h1>
        <p className="animate-fade-in-up animate-delay-2 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          رحلة متكاملة من الأساسيات إلى الاحتراف — تغطي المفاهيم النظرية،
          المعماريات المتقدمة، الأدوات العملية، وتشغيل النماذج محليًا. صُممت
          خصيصًا للمتحدثين بالعربية.
        </p>
        <div className="animate-fade-in-up animate-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-bg-dark bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            سجل الآن — ابدأ رحلتك
            <span className="group-hover:translate-x-1 transition-transform">←</span>
          </Link>
          <a
            href="#course"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-gold border border-gold/30 hover:bg-gold/5 transition-all duration-300"
          >
            اعرف المزيد
          </a>
        </div>
        <div className="animate-fade-in-up animate-delay-4 mt-16 flex items-center justify-center gap-8 text-zinc-500 text-sm">
          <span className="flex items-center gap-2">
            <span className="text-gold">●</span> 9 فصول شاملة
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">●</span> تطبيقات عملية
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">●</span> محتوى عربي متكامل
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 gradient-overlay" />
    </section>
  );
}

function CourseOverview() {
  return (
    <section id="course" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="gold-text">عن الدورة</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/50 mx-auto mb-6" />
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            دورة متكاملة صُممت خصيصًا للناطقين بالعربية، تأخذك من فهم أساسيات
            الكمبيوتر والإنترنت إلى أحدث ما توصل إليه الذكاء الاصطناعي في 2026.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "لمن هذه الدورة؟",
              items: [
                "المبتدئون الراغبون في فهم الذكاء الاصطناعي من الصفر",
                "المطورون الذين يريدون دمج AI في تطبيقاتهم",
                "صناع المحتوى والمهتمون بالتكنولوجيا",
                "رواد الأعمال الذين يبحثون عن فرص في AI",
              ],
            },
            {
              title: "ماذا ستتعلم؟",
              items: [
                "بداية الذكاء الاصطناعي",
                "معمارية Transformer والانتباه الذاتي",
                "الفرق بين CPU و GPU وأهميتهما للذكاء الاصطناعي",
                "التدريب: Pre-training، Fine-tuning، RLHF",
              ],
            },
            {
              title: "ماذا ستتعلم؟ (يتبع)",
              items: [
                "ربط التطبيقات بالنماذج عبر API و MCP",
                "مقارنة أشهر النماذج: GPT، Claude، Gemini، Llama",
                "توليد الصور والفيديو والصوت بالذكاء الاصطناعي",
                "تشغيل النماذج محليًا عبر Ollama و LM Studio",
              ],
            },
            {
              title: "مخرجات الدورة",
              items: [
                "فهم عميق لكيفية عمل الذكاء الاصطناعي",
                "القدرة على استخدام أشهر أدوات AI",
                "بناء مساعد شخصي عربي كامل",
                "مشروع تطبيقي عملي",
              ],
            },
          ].map((card, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gold mb-4">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-gold mt-1 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 glass rounded-3xl p-8 sm:p-10 text-center glow max-w-2xl mx-auto">
          <div className="text-5xl mb-4">👨‍🏫</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            المدرب
          </h3>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mb-4" />
          <p className="text-xl font-bold gold-text mb-1">
            المهندس مصطفي محمود البكشي
          </p>
          <p className="text-zinc-400 text-sm mb-4">
            متخصص في الذكاء الاصطناعي وتطوير التطبيقات
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="text-gold">📧</span>
              albkshi@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">📱</span>
              0913555150
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative py-24 lg:py-32 bg-bg-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.03)_0%,transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="gold-text">محتوى الدورة</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/50 mx-auto mb-6" />
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            9 فصول تغطي كل ما تحتاج معرفته عن الذكاء الاصطناعي
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              className="glass rounded-xl p-6 hover:glow transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{ch.icon}</span>
                <span className="text-xs font-bold text-gold/60 tracking-wider">
                  الفصل {String(ch.id).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {ch.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-bg-dark bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            ابدأ رحلة التعلم الآن ←
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="gold-text">لماذا هذه الدورة؟</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/50 mx-auto mb-6" />
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            أكثر من مجرد دورة — إنها تجربة تعليمية متكاملة
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 text-center hover:glow transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-gold text-2xl">✦</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegisterCTA() {
  return (
    <section
      id="register-cta"
      className="relative py-24 lg:py-32 bg-bg-section overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest text-gold border border-gold/30 bg-gold/5 mb-6 uppercase">
            ابدأ الآن
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
          <span className="gold-text">استعد لرحلتك</span>
          <br />
          <span className="text-white">في عالم الذكاء الاصطناعي</span>
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          سجل الآن في الدورة الاحترافية وابدأ رحلتك من الأساسيات إلى الاحتراف.
          اختبر مستواك أولاً وسنرشدك إلى المسار المناسب لك.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 text-right">
          {[
            "لا تحتاج أي خبرة مسبقة",
            "محتوى باللغة العربية الفصحى",
            "اختبر مستواك قبل التسجيل",
            "تعلم بأحدث النماذج والأدوات",
            "مشروع نهائي تطبيقي",
            "دعم فني وتوجيه مستمر",
          ].map((req, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-zinc-300 bg-white/5 rounded-xl px-5 py-4 border border-white/5"
            >
              <span className="text-gold shrink-0">✓</span>
              <span className="text-sm">{req}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold text-bg-dark bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 group"
          >
            ابدأ الاختبار والتسجيل
            <span className="group-hover:translate-x-1 transition-transform">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="text-gold font-bold text-lg">
                ذكاء اصطناعي ليبي
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              الدورة الاحترافية الأولى في ليبيا في الذكاء الاصطناعي
            </p>
          </div>
          <div>
            <h4 className="text-gold font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a href="#course" className="hover:text-gold transition-colors">
                  عن الدورة
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="hover:text-gold transition-colors"
                >
                  المحتوى
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="hover:text-gold transition-colors"
                >
                  التسجيل
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>بريد إلكتروني: info@aicourse.com</li>
              <li>الدورة بالكامل عن بُعد</li>
              <li>دعم فني على مدار الساعة</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-zinc-600 pt-8 border-t border-gold/10">
          © 2026 ذكاء اصطناعي ليبي. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
