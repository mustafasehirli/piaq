import {
  Building2,
  CreditCard,
  UserRound
} from "lucide-react";

function SectionHeader({
  description,
  icon: Icon,
  title
}: {
  description: string;
  icon: typeof Building2;
  title: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
        <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
      </span>
      <div>
        <h2 className="text-lg font-semibold text-zinc-950">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

export default function AyarlarPage() {
  return (
    <main className="min-h-[calc(100vh-60px)] bg-[#f5f4f0] px-7 pb-10 pt-6">
      <section className="flex w-full flex-col gap-6">
        <div>
          <p className="text-sm font-medium text-zinc-500">Genel Yapılandırma</p>
          <h1 className="mt-1 text-3xl font-semibold text-zinc-950">Ayarlar</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Piaq workspace, kullanıcı, güvenlik, bildirim ve entegrasyon ayarlarını buradan yönet.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            <section className="rounded-xl border border-[#e2e0d8] bg-white p-6 shadow-sm">
              <SectionHeader
                description="Ajans adı, varsayılan şirket bilgisi ve çalışma alanı görünümü."
                icon={Building2}
                title="Workspace Bilgileri"
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-zinc-700">Workspace Adı</span>
                  <input
                    className="mt-2 h-11 w-full rounded-lg border border-[#e2e0d8] bg-white px-3 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500"
                    placeholder="MY PİAQ"
                    type="text"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-zinc-700">Ajans Adı</span>
                  <input
                    className="mt-2 h-11 w-full rounded-lg border border-[#e2e0d8] bg-white px-3 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500"
                    placeholder="PİAQ"
                    type="text"
                  />
                </label>

              </div>
            </section>

            <section className="rounded-xl border border-[#e2e0d8] bg-white p-6 shadow-sm">
              <SectionHeader
                description="Hesap sahibi bilgileri ve iletişim tercihleri."
                icon={UserRound}
                title="Profil"
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-zinc-700">Ad Soyad</span>
                  <input
                    className="mt-2 h-11 w-full rounded-lg border border-[#e2e0d8] bg-white px-3 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500"
                    placeholder="Mustafa Şehirli"
                    type="text"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-zinc-700">E-posta</span>
                  <input
                    className="mt-2 h-11 w-full rounded-lg border border-[#e2e0d8] bg-white px-3 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500"
                    placeholder="mail@piaq.app"
                    suppressHydrationWarning
                    type="email"
                  />
                </label>
              </div>
            </section>

          </div>

          <aside className="grid content-start gap-6">
            <section className="rounded-xl border border-[#e2e0d8] bg-white p-6 shadow-sm">
              <SectionHeader
                description="Plan, ödeme ve fatura ayarları."
                icon={CreditCard}
                title="Faturalandırma"
              />

              <div className="mt-6 rounded-xl bg-zinc-950 p-4 text-white">
                <p className="text-sm text-zinc-300">Mevcut plan</p>
                <p className="mt-2 text-xl font-semibold">Başlangıç</p>
              </div>
            </section>

          </aside>
        </div>
      </section>
    </main>
  );
}

