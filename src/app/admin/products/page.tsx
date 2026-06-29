"use client";

import { useEffect, useState } from "react";
import { Plus, Edit3, Trash2, X, Package, Loader2 } from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  badge: string | null;
  image: string | null;
  isActive: boolean;
  createdAt: string;
}

const emptyProduct = {
  name: "",
  category: "Laptops",
  price: "",
  description: "",
  specs: [""],
  badge: "",
};

const categories = [
  "Laptops", "Desktops", "Gaming Systems", "Printers", "Networking Equipment",
  "SSDs & Storage", "RAM & Components", "Monitors", "CCTV Products", "Computer Accessories",
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyProduct);
  const [saving, setSaving] = useState(false);

  const loadProducts = async () => {
    try {
      const res = await fetch("/api/admin/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error("Failed to load products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    async function run() {
      try {
        const res = await fetch("/api/admin/products", { signal: controller.signal });
        const data = await res.json();
        setProducts(data.products || []);
      } catch {
        // ignore abort
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => controller.abort();
  }, []);

  const openAdd = () => {
    setForm(emptyProduct);
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (p: Product) => {
    setForm({
      name: p.name,
      category: p.category,
      price: p.price,
      description: p.description,
      specs: p.specs.length > 0 ? p.specs : [""],
      badge: p.badge || "",
    });
    setEditingId(p.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        ...form,
        specs: form.specs.filter((s) => s.trim() !== ""),
        badge: form.badge || null,
      };

      const url = editingId ? `/api/admin/products/${editingId}` : "/api/admin/products";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setShowForm(false);
        loadProducts();
      }
    } catch (err) {
      console.error("Failed to save product", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    try {
      await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
      loadProducts();
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const addSpec = () => setForm({ ...form, specs: [...form.specs, ""] });
  const updateSpec = (index: number, value: string) => {
    const specs = [...form.specs];
    specs[index] = value;
    setForm({ ...form, specs });
  };
  const removeSpec = (index: number) => {
    setForm({ ...form, specs: form.specs.filter((_, i) => i !== index) });
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <AdminSidebar />
      <div className="flex-1 lg:ml-0 pt-14 lg:pt-0">
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-primary">Products</h1>
              <p className="text-muted text-sm">Manage your product catalog</p>
            </div>
            <button onClick={openAdd} className="btn-primary !py-2.5">
              <Plus size={18} />
              Add Product
            </button>
          </div>

          {loading ? (
            <div className="text-center py-20 text-muted">Loading...</div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <Package size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-muted mb-4">No products yet</p>
              <button onClick={openAdd} className="btn-primary">Add First Product</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p) => (
                <div key={p.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                    <Package size={32} className="text-secondary/20" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="badge-primary text-[10px] mb-1">{p.category}</span>
                        <h3 className="font-bold text-primary text-sm">{p.name}</h3>
                      </div>
                      {p.badge && <span className="badge-warm text-[10px]">{p.badge}</span>}
                    </div>
                    <p className="text-xs text-muted mb-3 line-clamp-2">{p.description}</p>
                    <div className="text-secondary font-bold text-sm mb-3">{p.price}</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEdit(p)}
                        className="flex-1 py-2 text-xs font-medium text-secondary bg-secondary/10 rounded-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-1.5"
                      >
                        <Edit3 size={13} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="py-2 px-3 text-xs font-medium text-red-500 bg-red-50 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-lg font-bold text-primary">
                {editingId ? "Edit Product" : "Add Product"}
              </h3>
              <button onClick={() => setShowForm(false)} className="text-muted hover:text-primary">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Product Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-field"
                  placeholder="e.g. HP Pavilion Laptop"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Category *</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="input-field text-muted"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Price *</label>
                  <input
                    type="text"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="input-field"
                    placeholder="e.g. Starting ₹45,000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="input-field resize-none"
                  rows={3}
                  placeholder="Brief product description..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Badge (optional)</label>
                <input
                  type="text"
                  value={form.badge}
                  onChange={(e) => setForm({ ...form, badge: e.target.value })}
                  className="input-field"
                  placeholder="e.g. Best Seller, New, Premium"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium text-primary">Specifications</label>
                  <button type="button" onClick={addSpec} className="text-xs text-secondary hover:underline">
                    + Add Spec
                  </button>
                </div>
                <div className="space-y-2">
                  {form.specs.map((spec, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        type="text"
                        value={spec}
                        onChange={(e) => updateSpec(i, e.target.value)}
                        className="input-field flex-1"
                        placeholder={`Spec ${i + 1}`}
                      />
                      {form.specs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSpec(i)}
                          className="px-2 text-muted hover:text-red-500"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowForm(false)} className="btn-outline flex-1 !py-2.5">
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving || !form.name || !form.price}
                  className="btn-primary flex-1 !py-2.5 disabled:opacity-50"
                >
                  {saving ? <Loader2 size={16} className="animate-spin" /> : editingId ? "Update" : "Add Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
