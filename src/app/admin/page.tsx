"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Package, Clock, CheckCircle, TrendingUp } from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

interface Stats {
  total: number;
  new: number;
  contacted: number;
  closed: number;
  products: number;
}

interface RecentEnquiry {
  id: string;
  name: string;
  phone: string;
  product: string | null;
  source: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recent, setRecent] = useState<RecentEnquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [enqRes, prodRes] = await Promise.all([
          fetch("/api/admin/enquiries"),
          fetch("/api/admin/products"),
        ]);
        const enqData = await enqRes.json();
        const prodData = await prodRes.json();
        setStats({
          ...enqData.stats,
          products: prodData.products?.length || 0,
        });
        setRecent(enqData.enquiries?.slice(0, 5) || []);
      } catch (err) {
        console.error("Failed to load dashboard", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const statCards = stats
    ? [
        { label: "Total Enquiries", value: stats.total, icon: MessageSquare, color: "bg-secondary/10 text-secondary" },
        { label: "New Enquiries", value: stats.new, icon: Clock, color: "bg-amber-50 text-amber-600" },
        { label: "Contacted", value: stats.contacted, icon: TrendingUp, color: "bg-blue-50 text-blue-600" },
        { label: "Closed", value: stats.closed, icon: CheckCircle, color: "bg-green-50 text-green-600" },
        { label: "Products", value: stats.products, icon: Package, color: "bg-purple-50 text-purple-600" },
      ]
    : [];

  const statusColors: Record<string, string> = {
    new: "bg-amber-50 text-amber-600",
    contacted: "bg-blue-50 text-blue-600",
    closed: "bg-green-50 text-green-600",
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="flex-1 lg:ml-0 pt-14 lg:pt-0">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
            <p className="text-muted text-sm">Overview of your business enquiries and products</p>
          </div>

          {loading ? (
            <div className="text-center py-20 text-muted">Loading...</div>
          ) : (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {statCards.map((card) => (
                  <div key={card.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${card.color}`}>
                      <card.icon size={20} />
                    </div>
                    <div className="text-2xl font-bold text-primary">{card.value}</div>
                    <div className="text-xs text-muted mt-0.5">{card.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Enquiries */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-primary">Recent Enquiries</h2>
                  <a href="/admin/enquiries" className="text-sm text-secondary hover:underline">View All</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-50 text-left">
                        <th className="px-6 py-3 font-medium text-muted">Name</th>
                        <th className="px-6 py-3 font-medium text-muted">Phone</th>
                        <th className="px-6 py-3 font-medium text-muted">Product</th>
                        <th className="px-6 py-3 font-medium text-muted">Source</th>
                        <th className="px-6 py-3 font-medium text-muted">Status</th>
                        <th className="px-6 py-3 font-medium text-muted">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recent.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-8 text-center text-muted">
                            No enquiries yet
                          </td>
                        </tr>
                      ) : (
                        recent.map((e) => (
                          <tr key={e.id} className="border-b border-gray-50 hover:bg-surface/50">
                            <td className="px-6 py-3 font-medium text-primary">{e.name}</td>
                            <td className="px-6 py-3 text-muted">{e.phone}</td>
                            <td className="px-6 py-3 text-muted">{e.product || "-"}</td>
                            <td className="px-6 py-3">
                              <span className="badge-primary text-[10px]">{e.source}</span>
                            </td>
                            <td className="px-6 py-3">
                              <span className={`badge text-[10px] ${statusColors[e.status] || ""}`}>{e.status}</span>
                            </td>
                            <td className="px-6 py-3 text-muted text-xs">
                              {new Date(e.createdAt).toLocaleDateString("en-IN")}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
