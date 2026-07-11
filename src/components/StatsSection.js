"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function StatsSection() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      const { count, error } = await supabase
        .from("student_registrations")
        .select("*", { count: "exact", head: true });
      if (!error) setCount(count);
    }
    fetchCount();
  }, []);

  return (
    <section className="relative py-20 border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black gold-text mb-2">
              {count !== null ? count : "..."}
            </div>
            <div className="text-sm text-zinc-500">متدرب مسجل</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black gold-text mb-2">
              9
            </div>
            <div className="text-sm text-zinc-500">فصول شاملة</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black gold-text mb-2">
              50+
            </div>
            <div className="text-sm text-zinc-500">ساعة تعليمية</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black gold-text mb-2">
              100%
            </div>
            <div className="text-sm text-zinc-500">احترافية</div>
          </div>
        </div>
      </div>
    </section>
  );
}
