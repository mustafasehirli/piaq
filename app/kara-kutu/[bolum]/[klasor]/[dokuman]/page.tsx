import Link from "next/link";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BOLUMLER, MOCK_DOKUMANLAR, MOCK_KLASORLER } from "@/lib/data/kara-kutu";

type PageProps = {
  params: Promise<{
    bolum: string;
    klasor: string;
    dokuman: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { bolum, klasor, dokuman } = await params;
  const bolumBilgisi = BOLUMLER.find((currentBolum) => currentBolum.slug === bolum);
  const klasorBilgisi = MOCK_KLASORLER.find((currentKlasor) => currentKlasor.id === klasor && currentKlasor.bolum_slug === bolum);
  const dokumanBilgisi = MOCK_DOKUMANLAR.find((currentDokuman) => currentDokuman.id === dokuman && currentDokuman.klasor_id === klasor);

  if (!bolumBilgisi || bolumBilgisi.restricted || !klasorBilgisi || !dokumanBilgisi) {
    notFound();
  }

  return (
    <div>
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-[13px] font-semibold text-[var(--text-muted)]">
        <Link className="hover:text-[var(--text-primary)]" href="/kara-kutu/strateji">Kara Kutu</Link>
        <span>/</span>
        <Link className="hover:text-[var(--text-primary)]" href={`/kara-kutu/${bolumBilgisi.slug}`}>{bolumBilgisi.label}</Link>
        <span>/</span>
        <Link className="hover:text-[var(--text-primary)]" href={`/kara-kutu/${bolumBilgisi.slug}/${klasorBilgisi.id}`}>{klasorBilgisi.ad}</Link>
        <span>/</span>
        <span className="text-[var(--text-primary)]">{dokumanBilgisi.baslik}</span>
      </nav>

      <div className="mb-6 flex flex-col gap-4 rounded-[24px] border border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-sm)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-[15px] bg-[var(--bg-card-soft)] text-[var(--text-secondary)]">
            <FileText aria-hidden="true" className="size-5" strokeWidth={2.1} />
          </div>
          <div>
            <h1 className="text-[22px] font-black tracking-tight text-[var(--text-primary)]">{dokumanBilgisi.baslik}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-2.5 py-1 text-[11px] font-black text-[var(--text-secondary)]">
                {dokumanBilgisi.versiyon}
              </span>
              <span className="text-xs font-bold text-[var(--text-muted)]">{dokumanBilgisi.updated_at}</span>
            </div>
          </div>
        </div>
        <Button className="h-9 rounded-[12px] border-[var(--border)] bg-white px-4 text-xs font-black text-[var(--text-muted)]" disabled variant="outline">
          Düzenle
        </Button>
      </div>

      <article className="mx-auto max-w-3xl rounded-[28px] border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-sm)]">
        <p className="text-[15px] font-semibold leading-7 text-[var(--text-secondary)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Piaq Kara Kutu içinde bu alan ileride doküman içeriğini göstermek için kullanılacak. Şimdilik mock veri ile sayfa yapısı, breadcrumb, üst bar ve versiyon bilgisi doğrulanır.
        </p>
        <p className="mt-5 text-[15px] font-semibold leading-7 text-[var(--text-secondary)]">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Süreç dokümanları, ajans standartları ve operasyonel bilgi varlıkları bu yapı altında klasörlenebilir.
        </p>
      </article>

      <details className="mx-auto mt-5 max-w-3xl rounded-[20px] border border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-sm)]">
        <summary className="cursor-pointer text-sm font-black text-[var(--text-primary)]">Versiyon Geçmişi</summary>
        <div className="pt-4 text-sm font-semibold text-[var(--text-muted)]">Henüz versiyon kaydı yok.</div>
      </details>
    </div>
  );
}
