"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const colors = ["#53e6ff", "#7a7cff", "#ff4fd8", "#4df0a6", "#ffca61"];

export default function AnalyticsPanel({ assets, detections }) {
  const unauthorizedCount = detections.filter((item) => item.status !== "Authorized").length;
  const platformDistribution = Object.entries(
    detections.reduce((acc, item) => {
      acc[item.platform] = (acc[item.platform] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const assetTrend = assets.slice(-6).map((asset, index) => ({
    name: `Asset ${index + 1}`,
    detections: asset.detections?.length || 0,
    risk: asset.detections?.filter((item) => item.status !== "Authorized").length || 0
  }));

  return (
    <section className="glass-panel rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/75">Analytics</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold">Operational visibility</h2>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
          <p className="mb-4 text-sm text-slate-300">Detection intensity per uploaded asset</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assetTrend}>
                <CartesianGrid stroke="rgba(255,255,255,0.07)" vertical={false} />
                <XAxis dataKey="name" stroke="#9fb1cb" tickLine={false} axisLine={false} />
                <YAxis stroke="#9fb1cb" tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.03)" }}
                  contentStyle={{
                    background: "rgba(7, 17, 31, 0.94)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "18px",
                    color: "#ecf6ff"
                  }}
                />
                <Bar dataKey="detections" fill="#53e6ff" radius={[12, 12, 0, 0]} />
                <Bar dataKey="risk" fill="#ff6b91" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-300">Platform distribution</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={platformDistribution} dataKey="value" nameKey="name" innerRadius={56} outerRadius={82} paddingAngle={5}>
                    {platformDistribution.map((entry, index) => (
                      <Cell key={entry.name} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "rgba(7, 17, 31, 0.94)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "18px",
                      color: "#ecf6ff"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Total assets</p>
              <p className="font-heading mt-3 text-3xl font-semibold text-white">{assets.length}</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Unauthorized hits</p>
              <p className="font-heading mt-3 text-3xl font-semibold text-white">{unauthorizedCount}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
