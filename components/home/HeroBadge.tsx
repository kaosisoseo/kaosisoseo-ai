type HeroBadgeProps = {
  text: string;
};

export default function HeroBadge({
  text,
}: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
      <span className="h-2 w-2 rounded-full bg-green-500"></span>

      <span>{text}</span>
    </div>
  );
}