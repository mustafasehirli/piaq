export type Bolum = {
  slug: string;
  label: string;
  icon: string;
  restricted?: boolean;
};

export type KKKlasor = {
  id: string;
  bolum_slug: string;
  ad: string;
  dokuman_sayisi: number;
};

export type KKDokuman = {
  id: string;
  klasor_id: string;
  baslik: string;
  versiyon: string;
  updated_at: string;
};
