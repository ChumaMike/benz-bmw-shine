import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="text-xl font-extrabold tracking-wide sm:text-2xl">
          ISIOALO CAR WASH
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium hover:opacity-80" activeProps={{ className: "underline underline-offset-4" }}>Home</Link>
          <Link to="/services" className="text-sm font-medium hover:opacity-80" activeProps={{ className: "underline underline-offset-4" }}>Services</Link>
          <Link to="/contact" className="text-sm font-medium hover:opacity-80" activeProps={{ className: "underline underline-offset-4" }}>Contact</Link>
          <a href="tel:0634339510" className="flex items-center gap-1 text-sm font-medium hover:opacity-80">
            <Phone className="h-4 w-4" /> 063 433 9510
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-3 border-t border-primary-foreground/20 px-4 py-4 md:hidden">
          <Link to="/" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/services" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/contact" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
          <a href="tel:0634339510" className="flex items-center gap-1 text-sm font-medium">
            <Phone className="h-4 w-4" /> 063 433 9510
          </a>
        </nav>
      )}
    </header>
  );
}
