import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="text-xl font-extrabold tracking-wide sm:text-2xl">
          🚗 ISIQALO CAR WASH
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold transition-opacity hover:opacity-80">
              {l.label}
            </a>
          ))}
          <a href="tel:0634339510" className="flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground transition-transform hover:scale-105">
            <Phone className="h-3.5 w-3.5" /> Call Now
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-primary-foreground/20 px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="tel:0634339510" className="flex items-center gap-1.5 text-sm font-semibold" onClick={() => setOpen(false)}>
            <Phone className="h-4 w-4" /> 063 433 9510
          </a>
        </nav>
      )}
    </header>
  );
}
