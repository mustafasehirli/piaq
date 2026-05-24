type EmptyRouteProps = {
  label: string;
};

export function EmptyRoute({ label }: EmptyRouteProps) {
  return <div className="sr-only">{label} henüz tasarlanmadı.</div>;
}
