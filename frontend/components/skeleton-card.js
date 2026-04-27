export default function SkeletonCard({ className = "" }) {
  return (
    <div className={`glass-panel animate-pulse rounded-[24px] p-5 ${className}`}>
      <div className="h-4 w-24 rounded-full bg-white/10" />
      <div className="mt-4 h-8 w-32 rounded-full bg-white/10" />
      <div className="mt-6 h-24 rounded-2xl bg-white/5" />
    </div>
  );
}
