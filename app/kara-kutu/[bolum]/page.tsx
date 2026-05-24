import Link from "next/link";
import { FolderOpen } from "lucide-react";
import { notFound } from "next/navigation";
import { BOLUMLER, MOCK_KLASORLER } from "@/lib/data/kara-kutu";

type PageProps = {
  params: Promise<{
    bolum: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { bolum } = await params;
  const bolumBilgisi = BOLUMLER.find((currentBolum) => currentBolum.slug === bolum);

  if (!bolumBilgisi || bolumBilgisi.restricted) {
    notFound();
  }

  const klasorler = MOCK_KLASORLER.filter((klasor) => klasor.bolum_slug === bolumBilgisi.slug);

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-[28px] font-black tracking-tight text-[var(--text-primary)]">{bolumBilgisi.label}</h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-[var(--text-secondary)]">
          Bu bölümde ajans içi bilgi varlıkları klasörler halinde saklanır.
        </p>
      </div>

      {klasorler.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {klasorler.map((klasor) => (
            <Link
              className="group rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]"
              href={`/kara-kutu/${bolumBilgisi.slug}/${klasor.id}`}
              key={klasor.id}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-[15px] bg-[var(--accent-light)] text-[var(--accent)]">
                  <FolderOpen aria-hidden="true" className="size-5" strokeWidth={2.2} />
                </div>
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-2.5 py-1 text-[11px] font-black text-[var(--text-secondary)]">
                  {klasor.dokuman_sayisi} döküman
                </span>
              </div>
              <h2 className="mt-5 text-[17px] font-black text-[var(--text-primary)]">{klasor.ad}</h2>
              <p className="mt-2 text-[13px] font-semibold leading-5 text-[var(--text-muted)]">
                Klasördeki rehberler ve süreç dokümanları.
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[var(--border)] bg-white/60 text-center">
          <FolderOpen aria-hidden="true" className="size-9 text-[var(--text-muted)]" strokeWidth={1.8} />
          <h2 className="mt-4 text-base font-black text-[var(--text-primary)]">Klasör bulunamadı</h2>
          <p className="mt-1 max-w-sm text-sm font-semibold text-[var(--text-muted)]">
            Bu bölüm için henüz mock klasör tanımlanmamış.
          </p>
        </div>
      )}
    </div>
  );
}
