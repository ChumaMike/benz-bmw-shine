import { Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-bold">🚗 ISIQALO CAR WASH</h3>
            <p className="text-sm opacity-80">Your Car Is An Extension Of Your Image</p>
            <p className="mt-1 text-sm opacity-60">Proudly serving our local community!</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="tel:0634339510" className="flex items-center gap-2 hover:opacity-100">
                <Phone className="h-4 w-4" /> Melusi: 063 433 9510
              </a>
              <a href="tel:0615040592" className="flex items-center gap-2 hover:opacity-100">
                <Phone className="h-4 w-4" /> Peter: 061 504 0592
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Hours</h4>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Clock className="h-4 w-4" /> Open Daily: 07:30 – 18:00
            </div>
            <p className="mt-2 text-sm opacity-80">☕ Refreshments Available</p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Isiqalo Car Wash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
