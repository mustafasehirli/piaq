import Link from "next/link";
import { FileText, FolderOpen } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BOLUMLER, MOCK_DOKUMANLAR, MOCK_KLASORLER } from "@/lib/data/kara-kutu";

type PageProps = {
  params: Promise<{
    bolum: string;
    klasor: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { bolum, klasor } = await params;
  const bolumBilgisi = BOLUMLER.find((currentBolum) => currentBolum.slug === bolum);
  const klasorBilgisi = MOCK_KLASORLER.find((currentKlasor) => currentKlasor.id === klasor && currentKlasor.bolum_slug === bolum);

  if (!bolumBilgisi || bolumBilgisi.restricted || !klasorBilgisi) {
    notFound();
  }

  const dokumanlar = MOCK_DOKUMANLAR.filter((dokuman) => dokuman.klasor_id === klasorBilgisi.id);

  return (
    <div>
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-[13px] font-semibold text-[var(--text-muted)]">
        <Link className="hover:text-[var(--text-primary)]" href="/kara-kutu/strateji">Kara Kutu</Link>
        <span>/</span>
        <Link className="hover:text-[var(--text-primary)]" href={`/kara-kutu/${bolumBilgisi.slug}`}>{bolumBilgisi.label}</Link>
        <span>/</span>
        <span className="text-[var(--text-primary)]">{klasorBilgisi.ad}</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-[28px] font-black tracking-tight text-[var(--text-primary)]">{klasorBilgisi.ad}</h1>
        <p className="mt-2 text-sm font-semibold text-[var(--text-secondary)]">{bolumBilgisi.label} klasörü içindeki dokümanlar.</p>
      </div>

      {dokumanlar.length > 0 ? (
        <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
          {dokumanlar.map((dokuman, index) => (
            <div
              className={`flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between ${
                index === 0 ? "" : "border-t border-[var(--border)]"
              }`}
              key={dokuman.id}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-[14px] bg-[var(--bg-card-soft)] text-[var(--text-secondary)]">
                  <FileText aria-hidden="true" className="size-4.5" strokeWidth={2.1} />
                </div>
                <div>
                  <h2 className="text-sm font-black text-[var(--text-primary)]">{dokuman.baslik}</h2>
                  <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">{dokuman.updated_at}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-[52px] md:pl-0">
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg-card-soft)] px-2.5 py-1 text-[11px] font-black text-[var(--text-secondary)]">
                  {dokuman.versiyon}
                </span>
                <Button asChild className="h-8 rounded-[12px] bg-[var(--text-primary)] px-3 text-xs font-black text-white hover:bg-[var(--text-primary)]" size="sm">
                  <Link href={`/kara-kutu/${bolumBilgisi.slug}/${klasorBilgisi.id}/${dokuman.id}`}>Aç</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[var(--border)] bg-white/60 text-center">
          <FolderOpen aria-hidden="true" className="size-9 text-[var(--text-muted)]" strokeWidth={1.8} />
          <h2 className="mt-4 text-base font-black text-[var(--text-primary)]">Döküman bulunamadı</h2>
          <p className="mt-1 max-w-sm text-sm font-semibold text-[var(--text-muted)]">
            Bu klasör için henüz mock döküman tanımlanmamış.
          </p>
        </div>
      )}
    </div>
  );
}
