"use client";

import { useEffect, useState } from "react";
import { Search, Filter, Phone, MessageCircle, Trash2, ChevronDown } from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  product: string | null;
  category: string | null;
  message: string | null;
  source: string;
  status: string;
  notes: string | null;
  createdAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, closed: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");

  useEffect(() => {
    const controller = new AbortController();
    async function run() {
      try {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (statusFilter !== "all") params.set("status", statusFilter);
        if (sourceFilter !== "all") params.set("source", sourceFilter);

        const res = await fetch(`/api/admin/enquiries?${params}`, { signal: controller.signal });
        const data = await res.json();
        setEnquiries(data.enquiries || []);
        setStats(data.stats || { total: 0, new: 0, contacted: 0, closed: 0 });
      } catch {
        // ignore abort
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => controller.abort();
  }, [search, statusFilter, sourceFilter]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      // Re-fetch by triggering the effect
      setStatusFilter((prev) => prev);
    } catch {
      console.error("Failed to update");
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      setStats((prev) => ({ ...prev, total: prev.total - 1 }));
    } catch {
      console.error("Failed to delete");
    }
  };

  const statusColors: Record<string, string> = {
    new: "bg-amber-50 text-amber-600 border-amber-200",
    contacted: "bg-blue-50 text-blue-600 border-blue-200",
    closed: "bg-green-50 text-green-600 border-green-200",
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="flex-1 lg:ml-0 pt-14 lg:pt-0">
        <div className="p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-primary">Enquiries</h1>
            <p className="text-muted text-sm">Manage and respond to customer enquiries</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="text-xl font-bold text-primary">{stats.total}</div>
              <div className="text-xs text-muted">Total</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <div className="text-xl font-bold text-amber-600">{stats.new}</div>
              <div className="text-xs text-muted">New</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <div className="text-xl font-bold text-blue-600">{stats.contacted}</div>
              <div className="text-xs text-muted">Contacted</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <div className="text-xl font-bold text-green-600">{stats.closed}</div>
              <div className="text-xs text-muted">Closed</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search by name, phone, email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-field !pl-10 !py-2.5"
                />
              </div>
              <div className="relative">
                <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="input-field !pl-10 !py-2.5 !pr-8 appearance-none"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={sourceFilter}
                  onChange={(e) => setSourceFilter(e.target.value)}
                  className="input-field !py-2.5 !pr-8 appearance-none"
                >
                  <option value="all">All Sources</option>
                  <option value="contact">Contact Form</option>
                  <option value="quote">Quote Request</option>
                  <option value="product">Product Enquiry</option>
                  <option value="service">Service Enquiry</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Enquiries Table */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {loading ? (
              <div className="text-center py-12 text-muted">Loading...</div>
            ) : enquiries.length === 0 ? (
              <div className="text-center py-12 text-muted">No enquiries found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-surface/50 text-left">
                      <th className="px-5 py-3 font-medium text-muted text-xs uppercase tracking-wide">Contact</th>
                      <th className="px-5 py-3 font-medium text-muted text-xs uppercase tracking-wide">Product</th>
                      <th className="px-5 py-3 font-medium text-muted text-xs uppercase tracking-wide">Source</th>
                      <th className="px-5 py-3 font-medium text-muted text-xs uppercase tracking-wide">Status</th>
                      <th className="px-5 py-3 font-medium text-muted text-xs uppercase tracking-wide">Date</th>
                      <th className="px-5 py-3 font-medium text-muted text-xs uppercase tracking-wide">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((e) => (
                      <tr key={e.id} className="border-b border-gray-50 hover:bg-surface/30">
                        <td className="px-5 py-4">
                          <div className="font-medium text-primary text-sm">{e.name}</div>
                          <div className="text-xs text-muted">{e.phone}</div>
                          {e.email && <div className="text-xs text-muted">{e.email}</div>}
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-sm text-primary">{e.product || "-"}</div>
                          {e.category && <div className="text-xs text-muted">{e.category}</div>}
                          {e.message && <div className="text-xs text-muted mt-1 max-w-[200px] truncate">{e.message}</div>}
                        </td>
                        <td className="px-5 py-4">
                          <span className="badge-primary text-[10px]">{e.source}</span>
                        </td>
                        <td className="px-5 py-4">
                          <select
                            value={e.status}
                            onChange={(ev) => updateStatus(e.id, ev.target.value)}
                            className={`badge text-[10px] border cursor-pointer appearance-none ${statusColors[e.status] || ""}`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="px-5 py-4 text-xs text-muted whitespace-nowrap">
                          {new Date(e.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5">
                            <a
                              href={`tel:${e.phone}`}
                              className="p-1.5 text-muted hover:text-secondary hover:bg-secondary/10 rounded-md transition-colors"
                              title="Call"
                            >
                              <Phone size={14} />
                            </a>
                            <a
                              href={`https://wa.me/91${e.phone.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(e.name)},%20thank%20you%20for%20your%20enquiry.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-muted hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                              title="WhatsApp"
                            >
                              <MessageCircle size={14} />
                            </a>
                            <button
                              onClick={() => deleteEnquiry(e.id)}
                              className="p-1.5 text-muted hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
