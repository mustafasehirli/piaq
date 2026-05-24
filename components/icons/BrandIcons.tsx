import type { SVGProps } from "react";

export function MetaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 15.1C4 11 6.1 7.3 8.8 7.3c1.7 0 3.1 1.4 4.2 3 1.2-1.6 2.6-3 4.3-3 2.7 0 4.7 3.6 4.7 7.8 0 2.6-1.1 4.2-2.9 4.2-2 0-3.5-1.8-6.1-5.9-2.6 4.1-4 5.9-6.1 5.9C5.1 19.3 4 17.7 4 15.1Z"
        stroke="#0866FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.05"
      />
      <path
        d="M8.8 7.3c1.9 0 3.4 2.1 4.2 3 .8-.9 2.3-3 4.3-3"
        stroke="#0866FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.05"
      />
    </svg>
  );
}

export function GoogleLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21.6 12.23c0-.72-.06-1.24-.19-1.78H12v3.55h5.52c-.11.88-.71 2.2-2.05 3.09l-.02.12 2.98 2.2.21.02c1.94-1.71 3.06-4.23 3.06-7.2Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.78 0 5.11-.87 6.81-2.37l-3.25-2.46c-.87.58-2.03.98-3.56.98-2.72 0-5.03-1.71-5.85-4.08l-.12.01-3.1 2.29-.04.11C4.58 19.75 8.03 22 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.15 14.07a5.8 5.8 0 0 1-.31-1.86c0-.65.11-1.27.29-1.86l-.01-.13-3.14-2.33-.1.05A9.72 9.72 0 0 0 2 12.21c0 1.54.39 3 1.08 4.27l3.07-2.41Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.27c1.93 0 3.23.8 3.97 1.47l2.91-2.71C17.09 3.44 14.78 2.5 12 2.5c-3.97 0-7.42 2.25-9.11 5.44l3.23 2.41C6.95 7.98 9.28 6.27 12 6.27Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function TikTokLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.55 3.2c.33 2.83 1.88 4.52 4.5 4.7v2.87a7.3 7.3 0 0 1-4.45-1.43v5.48c0 2.77-1.9 5.1-4.73 5.69-3.4.7-6.43-1.86-6.43-5.14 0-3.12 2.72-5.53 5.93-5.14v2.99c-1.43-.38-2.84.6-2.84 2.02 0 1.32 1.16 2.31 2.51 2.11 1.14-.18 1.94-1.18 1.94-2.37V3.2h3.57Z"
        fill="#111111"
      />
      <path
        d="M14.55 3.2c.22 1.82.94 3.18 2.15 3.95-.94-.95-1.51-2.28-1.69-3.95h-.46ZM9.37 10.23v2.99a2.5 2.5 0 0 0-.78-.09c.23-.1.49-.16.75-.16v-2.74h.03Z"
        fill="#25F4EE"
      />
      <path
        d="M19.05 7.9v2.87a7.28 7.28 0 0 1-1.11-.08V8.1c.36.1.73.17 1.11.2v-.4ZM10.98 3.2h2.55v11.78c0 1.19-.8 2.19-1.94 2.37a2.54 2.54 0 0 1-1.43-.2c.32.18.7.26 1.12.2 1.14-.18 1.94-1.18 1.94-2.37V3.2h1.33v-.01h-3.57ZM4.58 17.4c.88 2.2 3.22 3.63 5.9 3.08a5.4 5.4 0 0 0 2.75-1.45 5.52 5.52 0 0 1-3.36 1.48c-2.22.17-4.22-1.09-5.29-3.11Z"
        fill="#FE2C55"
      />
    </svg>
  );
}

export function LinkedInLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.75 3H4.25C3.56 3 3 3.54 3 4.2v15.6c0 .66.56 1.2 1.25 1.2h15.5c.69 0 1.25-.54 1.25-1.2V4.2c0-.66-.56-1.2-1.25-1.2Z"
        fill="#0A66C2"
      />
      <path
        d="M6.27 9.76h2.58v8.12H6.27V9.76Zm1.3-3.98c.82 0 1.49.66 1.49 1.46 0 .81-.67 1.47-1.49 1.47-.83 0-1.5-.66-1.5-1.47 0-.8.67-1.46 1.5-1.46Zm3.02 3.98h2.47v1.11h.04c.34-.64 1.18-1.31 2.43-1.31 2.6 0 3.08 1.68 3.08 3.86v4.46h-2.58v-3.95c0-.94-.02-2.15-1.33-2.15-1.33 0-1.53 1.02-1.53 2.08v4.02h-2.58V9.76Z"
        fill="white"
      />
    </svg>
  );
}

export function MetaLogoMono(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 15.1C4 11 6.1 7.3 8.8 7.3c1.7 0 3.1 1.4 4.2 3 1.2-1.6 2.6-3 4.3-3 2.7 0 4.7 3.6 4.7 7.8 0 2.6-1.1 4.2-2.9 4.2-2 0-3.5-1.8-6.1-5.9-2.6 4.1-4 5.9-6.1 5.9C5.1 19.3 4 17.7 4 15.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.05"
      />
      <path
        d="M8.8 7.3c1.9 0 3.4 2.1 4.2 3 .8-.9 2.3-3 4.3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.05"
      />
    </svg>
  );
}

export function GoogleLogoMono(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.1 7.35A7.3 7.3 0 1 0 19.25 16c.92-1.26 1.28-2.72 1.18-4.16H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function TikTokLogoMono(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.55 3.2c.33 2.83 1.88 4.52 4.5 4.7v2.87a7.3 7.3 0 0 1-4.45-1.43v5.48c0 2.77-1.9 5.1-4.73 5.69-3.4.7-6.43-1.86-6.43-5.14 0-3.12 2.72-5.53 5.93-5.14v2.99c-1.43-.38-2.84.6-2.84 2.02 0 1.32 1.16 2.31 2.51 2.11 1.14-.18 1.94-1.18 1.94-2.37V3.2h3.57Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInLogoMono(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.75 3H4.25C3.56 3 3 3.54 3 4.2v15.6c0 .66.56 1.2 1.25 1.2h15.5c.69 0 1.25-.54 1.25-1.2V4.2c0-.66-.56-1.2-1.25-1.2Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M6.27 9.76h2.58v8.12H6.27V9.76Zm1.3-3.98c.82 0 1.49.66 1.49 1.46 0 .81-.67 1.47-1.49 1.47-.83 0-1.5-.66-1.5-1.47 0-.8.67-1.46 1.5-1.46Zm3.02 3.98h2.47v1.11h.04c.34-.64 1.18-1.31 2.43-1.31 2.6 0 3.08 1.68 3.08 3.86v4.46h-2.58v-3.95c0-.94-.02-2.15-1.33-2.15-1.33 0-1.53 1.02-1.53 2.08v4.02h-2.58V9.76Z"
        fill="currentColor"
      />
    </svg>
  );
}

export type BrandLogoName = "Meta" | "Google" | "TikTok" | "LinkedIn";

const brandLogos = {
  Meta: MetaLogo,
  Google: GoogleLogo,
  TikTok: TikTokLogo,
  LinkedIn: LinkedInLogo
};

export function getBrandLogo(brand: string) {
  return brandLogos[brand as BrandLogoName];
}
