import Sidebar from "@/components/Sidebar";

export default function DocsLayout({ children }) {
  return (
    <section className="relative bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar handled inside the component itself now */}
          <Sidebar />

          <div className="flex-1 space-y-12 lg:pl-8 lg:pr-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
