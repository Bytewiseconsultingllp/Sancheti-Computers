import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-padding bg-surface min-h-[70vh] flex items-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Search size={36} className="text-secondary" />
        </div>
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary mb-3">Page Not Found</h2>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
