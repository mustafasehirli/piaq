export type ChannelTheme = {
  badgeClassName: string;
  color: string;
  soft: string;
};

const defaultChannelTheme: ChannelTheme = {
  badgeClassName: "bg-zinc-100 text-zinc-800",
  color: "var(--text-primary)",
  soft: "var(--bg-card-soft)"
};

const channelThemes: Record<string, ChannelTheme> = {
  Meta: {
    badgeClassName: "bg-[var(--channel-meta-light)] text-[var(--channel-meta)]",
    color: "var(--channel-meta)",
    soft: "var(--channel-meta-light)"
  },
  Google: {
    badgeClassName: "bg-[var(--channel-google-light)] text-[var(--channel-google)]",
    color: "var(--channel-google)",
    soft: "var(--channel-google-light)"
  },
  TikTok: {
    badgeClassName: "bg-[var(--channel-tiktok-light)] text-[var(--channel-tiktok)]",
    color: "var(--channel-tiktok)",
    soft: "var(--channel-tiktok-light)"
  },
  "Sosyal Medya": {
    badgeClassName: "bg-[var(--channel-social-light)] text-[var(--channel-social)]",
    color: "var(--channel-social)",
    soft: "var(--channel-social-light)"
  },
  "Sosyal Medya Yönetimi": {
    badgeClassName: "bg-[var(--channel-social-light)] text-[var(--channel-social)]",
    color: "var(--channel-social)",
    soft: "var(--channel-social-light)"
  },
  Funnel: {
    badgeClassName: "bg-[var(--channel-funnel-light)] text-[var(--channel-funnel)]",
    color: "var(--channel-funnel)",
    soft: "var(--channel-funnel-light)"
  },
  Mail: {
    badgeClassName: "bg-[var(--channel-mail-light)] text-[var(--channel-mail)]",
    color: "var(--channel-mail)",
    soft: "var(--channel-mail-light)"
  }
};

export function getChannelTheme(channel: string) {
  return channelThemes[channel] ?? defaultChannelTheme;
}

export function getChannelBadgeClass(channel: string) {
  return getChannelTheme(channel).badgeClassName;
}
