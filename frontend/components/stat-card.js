export default function StatCard({ label, value, detail, tone = "cyan" }) {
  const toneClass = {
    cyan: "from-cyan-400/20 to-sky-500/10",
    rose: "from-rose-400/20 to-pink-500/10",
    emerald: "from-emerald-400/20 to-lime-500/10",
    violet: "from-indigo-400/20 to-fuchsia-500/10"
  }[tone];

  return (
    <div className={`glass-panel rounded-[24px] bg-gradient-to-br ${toneClass} p-5`}>
      <p className="text-sm text-slate-300">{label}</p>
      <p className="font-heading mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{detail}</p>
    </div>
  );
}
