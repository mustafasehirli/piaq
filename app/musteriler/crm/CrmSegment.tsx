import Link from "next/link";

export function CrmSegment() {
  return (
    <div className="inline-flex rounded-[16px] border border-[var(--border)] bg-white p-1 shadow-[var(--shadow-sm)]">
      <Link className="rounded-[12px] px-4 py-2 text-[13px] font-black text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-card-soft)] hover:text-[var(--text-primary)]" href="/musteriler">
        Müşteri Listesi
      </Link>
      <Link className="rounded-[12px] bg-[var(--text-primary)] px-4 py-2 text-[13px] font-black text-white shadow-[0_10px_22px_oklch(0.18_0.018_80_/_0.14)]" href="/musteriler/crm">
        CRM Pipeline
      </Link>
    </div>
  );
}
