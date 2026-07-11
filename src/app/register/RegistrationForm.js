"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const levelOptions = [
  "مبتدئ تمامًا — لا توجد خبرة سابقة",
  "مبتدئ — لدي فضول فقط",
  "متوسط — لدي بعض المعرفة",
  "متقدم — أريد التعمق أكثر",
];

const goalOptions = [
  "فهم أساسيات الذكاء الاصطناعي",
  "تطوير تطبيقات باستخدام AI",
  "استخدام أدوات AI في مجالي",
  "التخصص في مجال الذكاء الاصطناعي",
  "أخرى",
];

const assessmentQuestions = [
  {
    id: "hasPC",
    question: "هل تملك جهاز كمبيوتر؟",
    options: [
      { value: 2, label: "نعم، جهاز قوي (كرت شاشة منفصل)" },
      { value: 1, label: "نعم، جهاز عادي" },
      { value: 0, label: "لا أملك جهاز كمبيوتر" },
    ],
  },
  {
    id: "cpuGpuDiff",
    question: "هل تعرف الفرق بين CPU و GPU؟",
    options: [
      { value: 2, label: "نعم أعرف الفرق" },
      { value: 1, label: "لدي فكرة عامة" },
      { value: 0, label: "لا أعرف" },
    ],
  },
  {
    id: "aiLevel",
    question: "كيف تصف معرفتك الحالية بالذكاء الاصطناعي؟",
    options: [
      { value: 2, label: "جيدة — استخدم وأفهم النماذج" },
      { value: 1, label: "أساسية — سمعت عن المصطلحات" },
      { value: 0, label: "مبتدئ — لا أعرف شيئًا" },
    ],
  },
  {
    id: "aiTools",
    question: "هل استخدمت ChatGPT أو Claude أو غيرهما؟",
    options: [
      { value: 2, label: "نعم أستخدمها بانتظام" },
      { value: 1, label: "جربتها مرة أو مرتين" },
      { value: 0, label: "لم أستخدمها أبدًا" },
    ],
  },
  {
    id: "readiness",
    question: "هل أنت مستعد للالتزام بدورة مكثفة؟",
    options: [
      { value: 2, label: "نعم بالكامل — لدي وقت كاف" },
      { value: 1, label: "سأبذل قصارى جهدي" },
      { value: 0, label: "أفضل شيئًا خفيفًا في البداية" },
    ],
  },
];

function getLevel(score) {
  if (score <= 2)
    return {
      label: "تحتاج دورة تمهيدية",
      color: "text-amber-400",
      icon: "📚",
      desc: "ننصحك بالبدء بدورة تمهيدية مجانية في أساسيات الذكاء الاصطناعي قبل التسجيل في الدورة الاحترافية.",
    };
  if (score <= 5)
    return {
      label: "جاهز للبدء",
      color: "text-blue-400",
      icon: "👍",
      desc: "مستوى جيد! الدورة الاحترافية مناسبة لك، وستبدأ من الأساسيات.",
    };
  return {
    label: "جاهز تمامًا",
    color: "text-green-400",
    icon: "🏆",
    desc: "لديك أساس قوي! الدورة الاحترافية ستنقلك إلى مستوى متقدم.",
  };
}

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  level: "",
  goal: "",
  otherGoal: "",
  message: "",
};

export default function RegistrationForm() {
  const [step, setStep] = useState("assessment");
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function handleAnswer(qId, value) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
    setStep("assessment");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleAssessmentSubmit(e) {
    e.preventDefault();
    const total = Object.values(answers).reduce((sum, v) => sum + v, 0);
    if (Object.keys(answers).length < 5) return;
    setFormData((prev) => ({ ...prev, assessmentScore: total }));
    setStep("result");
  }

  function retakeAssessment() {
    setAnswers({});
    setStep("assessment");
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    setStatus("loading");

          if (!formData.fullName || !formData.email || !formData.level || !formData.goal) {
              setStatus("error");
              setMessage("يرجى ملء الحقول المطلوبة");
              return;
            }

            const phoneRegex = /^09[1234]\d{7}$/;
            if (formData.phone && !phoneRegex.test(formData.phone)) {
              setStatus("error");
              setMessage("رقم الهاتف يجب أن يبدأ بـ 091 أو 092 أو 093 أو 094 ويتكون من 10 أرقام");
              return;
            }

    try {
      const { error } = await supabase.from("student_registrations").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          level: formData.level,
          goal: formData.otherGoal || formData.goal,
          message: formData.message,
          assessment_score: formData.assessmentScore,
          assessment_details: answers,
        },
      ]);

      if (error) {
        if (error.code === "42P01" || error.code === "PGRST205") {
          setStatus("error");
          setMessage("لم يتم إعداد قاعدة البيانات بعد. الرجاء إنشاء جدول student_registrations في Supabase SQL Editor.");
        } else {
          setStatus("error");
          setMessage("حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.");
        }
        return;
      }

      setStatus("success");
      setMessage("تم تسجيلك بنجاح! سنرسل لك تفاصيل الدورة على بريدك الإلكتروني.");
      setFormData(initialForm);
    } catch {
      setStatus("error");
      setMessage("خطأ في الاتصال. تأكد من إعداد متغيرات Supabase.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-2xl font-bold text-gold mb-4">تم التسجيل بنجاح!</h3>
        <p className="text-zinc-400">{message}</p>
      </div>
    );
  }

  if (step === "assessment") {
    const answeredCount = Object.keys(answers).length;
    return (
      <form onSubmit={handleAssessmentSubmit} className="space-y-8">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-2">
            اختبر معلوماتك
          </h3>
          <p className="text-sm text-zinc-400">
            أجب عن 5 أسئلة لتحديد مستواك ومساعدتك على البدء من المكان المناسب
          </p>
        </div>

        {assessmentQuestions.map((q, i) => (
          <div key={q.id} className="glass rounded-2xl p-6">
            <p className="text-white font-bold mb-4">
              <span className="text-gold ml-2">{i + 1}.</span>
              {q.question}
            </p>
            <div className="space-y-3">
              {q.options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    answers[q.id] === opt.value
                      ? "bg-gold/10 border border-gold/30"
                      : "bg-white/5 border border-transparent hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => handleAnswer(q.id, opt.value)}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="text-sm text-zinc-300">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            {answeredCount} / 5 تم الإجابة
          </span>
          <button
            type="submit"
            disabled={answeredCount < 5}
            className="px-8 py-3 rounded-xl text-lg font-bold text-bg-dark bg-gold hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            عرض النتيجة
          </button>
        </div>
      </form>
    );
  }

  if (step === "result") {
    const total = formData.assessmentScore;
    const level = getLevel(total);
    const canRegister = total >= 3;

    return (
      <div className="space-y-8">
        <div className="glass rounded-3xl p-8 text-center">
          <div className="text-5xl mb-4">{level.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            <span className={level.color}>{level.label}</span>
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-2 w-full max-w-xs bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-1000"
                style={{ width: `${(total / 10) * 100}%` }}
              />
            </div>
            <span className="text-gold font-bold text-sm">{total}/10</span>
          </div>
          <p className="text-zinc-400 mb-6">{level.desc}</p>

          {!canRegister && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-6">
              ننصحك بالاطلاع على دليلنا المجاني لأساسيات الذكاء الاصطناعي قبل البدء
            </div>
          )}

          <div className="flex items-center gap-4 justify-center">
            <button
              onClick={retakeAssessment}
              className="px-6 py-3 rounded-xl text-zinc-300 border border-zinc-600 hover:bg-white/5 transition-all"
            >
              إعادة الاختبار
            </button>
          </div>
        </div>

        {canRegister && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 bg-gold/20" />
              <span className="text-gold text-sm font-bold">
                أكمل تسجيلك في الدورة
              </span>
              <span className="h-px flex-1 bg-gold/20" />
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">
                    الاسم الكامل <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">
                    البريد الإلكتروني <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">
                    رقم الهاتف <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="091xxxxxxx"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                  <p className="text-xs text-zinc-500 mt-1">يبدأ بـ 091 أو 092 أو 093 أو 094 (10 أرقام)</p>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">
                    مستواك الحالي <span className="text-gold">*</span>
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  >
                    <option value="" className="bg-bg-dark">
                      اختر مستواك
                    </option>
                    {levelOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-bg-dark">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2">
                  هدفك من الدورة <span className="text-gold">*</span>
                </label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                >
                  <option value="" className="bg-bg-dark">
                    اختر هدفك
                  </option>
                  {goalOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-bg-dark">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {formData.goal === "أخرى" && (
                <div>
                  <label className="block text-sm font-bold text-zinc-300 mb-2">
                    اذكر هدفك
                  </label>
                  <input
                    type="text"
                    name="otherGoal"
                    value={formData.otherGoal}
                    onChange={handleChange}
                    placeholder="أدخل هدفك من الدورة"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2">
                  رسالة أو استفسار (اختياري)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="هل لديك أي استفسار قبل التسجيل؟"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-2xl text-lg font-bold text-bg-dark bg-gold hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-gold/20"
              >
                {status === "loading" ? "جاري التسجيل..." : "تسجيل في الدورة"}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
