import type { SVGProps } from "react";

export function DepartmentOrgIcon({ strokeWidth = 2, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="4.75" r="2.75" fill="currentColor" />
      <path
        d="M7.4 11.4c.55-2.15 2.35-3.55 4.6-3.55s4.05 1.4 4.6 3.55c.14.53-.27 1.03-.82 1.03H8.22c-.55 0-.96-.5-.82-1.03Z"
        fill="currentColor"
      />
      <path
        d="M12 12.35v2.05M5.5 14.4h13M5.5 14.4v2.1M12 14.4v2.1M18.5 14.4v2.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <rect x="3.15" y="16.45" width="4.7" height="4.7" rx="1.35" fill="currentColor" />
      <rect x="9.65" y="16.45" width="4.7" height="4.7" rx="1.35" fill="currentColor" />
      <rect x="16.15" y="16.45" width="4.7" height="4.7" rx="1.35" fill="currentColor" />
    </svg>
  );
}

export function BoxArchiveIcon({ strokeWidth = 2, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="2 2 20 20" fill="none" {...props}>
      <path
        d="M4.4 8.2 12 4.35l7.6 3.85-7.6 3.85L4.4 8.2Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4.6 8.5v7.25c0 .58.34 1.1.87 1.34l6.53 2.96 6.53-2.96c.53-.24.87-.76.87-1.34V8.5M12 12.1v7.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M8.1 6.28 15.8 10.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
