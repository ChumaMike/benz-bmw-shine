import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, Coffee, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Isioalo Car Wash" },
      { name: "description", content: "Contact Isioalo Car Wash. Call Melusi at 063 433 9510 or Peter at 061 504 0592. Open daily 07:30 – 18:00." },
      { property: "og:title", content: "Contact Us — Isioalo Car Wash" },
      { property: "og:description", content: "Call Melusi at 063 433 9510 or Peter at 061 504 0592. Open daily 07:30 – 18:00." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">Get In Touch</h1>
          <p className="mt-3 text-muted-foreground">
            Drive in anytime or give us a call. We'd love to make your car shine!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Melusi */}
          <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground">Melusi</h3>
            <a href="tel:0634339510" className="mt-1 block text-lg font-semibold text-secondary hover:underline">
              063 433 9510
            </a>
            <a
              href="https://wa.me/27634339510"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          {/* Peter */}
          <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground">Peter</h3>
            <a href="tel:0615040592" className="mt-1 block text-lg font-semibold text-secondary hover:underline">
              061 504 0592
            </a>
            <a
              href="https://wa.me/27615040592"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Hours & Extras */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm">
            <Clock className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h4 className="font-bold text-card-foreground">Operating Hours</h4>
              <p className="mt-1 text-sm text-muted-foreground">Open Daily: 07:30 – 18:00</p>
              <p className="text-sm text-muted-foreground">Including weekends & public holidays</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm">
            <Coffee className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
            <div>
              <h4 className="font-bold text-card-foreground">While You Wait</h4>
              <p className="mt-1 text-sm text-muted-foreground">Refreshments available on site.</p>
              <p className="text-sm text-muted-foreground">Relax while we take care of your car!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
