import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, DollarSign, Star, Calendar, Droplets, MessageCircle, Coffee, Sparkles, Car } from "lucide-react";
import heroImage from "@/assets/hero-carwash.jpg";
import servicesCarImage from "@/assets/services-car.jpg";
import servicesSuvImage from "@/assets/services-suv.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const carPrices = [
  { service: "Wash & Go", price: "R30" },
  { service: "Wash & Dry", price: "R40" },
  { service: "Full Wash", price: "R80" },
  { service: "Executive Wash", price: "R100" },
];

const suvPrices = [
  { service: "Wash & Go", price: "R40" },
  { service: "Wash & Dry", price: "R50" },
  { service: "Full Wash", price: "R90" },
  { service: "Executive Wash", price: "R110" },
];

const extras = [
  { service: "Engine Wash", price: "R60", icon: Sparkles },
  { service: "Vacuum", price: "R30", icon: Car },
  { service: "Polish", price: "R20", icon: Droplets },
  { service: "Valet", price: "Enquire", icon: Star },
];

function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section id="hero" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Mercedes-Benz being hand washed at Isiqalo Car Wash"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-primary-foreground">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-bold text-secondary-foreground">
            <Droplets className="h-3.5 w-3.5" /> Proudly Local • Open 7 Days
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
            ISIQALO<br />CAR WASH
          </h1>
          <p className="mt-4 text-lg font-medium opacity-90 sm:text-xl md:text-2xl">
            Your Car Is An Extension Of Your Image ✨
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <DollarSign className="h-4 w-4" /> View Prices
            </a>
            <a
              href="tel:0634339510"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: DollarSign, title: "Affordable Prices", desc: "Quality wash starting from just R30 — value you can see!", color: "bg-vibrant/15 text-vibrant" },
              { icon: Star, title: "Premium Service", desc: "Hand wash by skilled pros for a showroom finish every time", color: "bg-secondary/15 text-secondary" },
              { icon: Calendar, title: "Open 7 Days", desc: "Rain or shine, we're here 07:30 – 18:00 every single day", color: "bg-primary/15 text-primary" },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${item.color} transition-transform group-hover:scale-110`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-accent py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold text-primary">WHAT WE OFFER</span>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Services</h2>
            <p className="mt-3 text-muted-foreground">We treat every car like our own — from a quick rinse to the full VIP treatment</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Cars */}
            <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative">
                <img src={servicesCarImage} alt="White Mercedes sedan freshly detailed" className="h-52 w-full object-cover" loading="lazy" width={1280} height={720} />
                <div className="absolute bottom-3 left-3 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">CARS</div>
              </div>
              <div className="p-6">
                {carPrices.map((item) => (
                  <div key={item.service} className="flex items-center justify-between border-b border-dashed py-3 last:border-0">
                    <span className="text-sm font-medium text-card-foreground">{item.service}</span>
                    <span className="rounded-full bg-vibrant/10 px-3 py-0.5 text-sm font-bold text-vibrant">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SUVs */}
            <div className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative">
                <img src={servicesSuvImage} alt="Blue BMW SUV with water beading on paint" className="h-52 w-full object-cover" loading="lazy" width={1280} height={720} />
                <div className="absolute bottom-3 left-3 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-secondary-foreground">SUVs</div>
              </div>
              <div className="p-6">
                {suvPrices.map((item) => (
                  <div key={item.service} className="flex items-center justify-between border-b border-dashed py-3 last:border-0">
                    <span className="text-sm font-medium text-card-foreground">{item.service}</span>
                    <span className="rounded-full bg-vibrant/10 px-3 py-0.5 text-sm font-bold text-vibrant">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extras */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {extras.map((item) => (
              <div key={item.service} className="group rounded-2xl border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-warm/20 text-warm-foreground transition-transform group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold text-card-foreground">{item.service}</p>
                <p className="mt-1 text-xs font-semibold text-secondary">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING BANNER ===== */}
      <section id="pricing" className="bg-gradient-to-r from-primary to-primary/80 py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-2xl font-extrabold">Cars from R30 • SUVs from R40</h3>
            <p className="mt-1 text-sm opacity-80">No appointment needed — just drive in!</p>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6" />
            <div>
              <p className="font-bold">07:30 – 18:00</p>
              <p className="text-xs opacity-80">Every day, rain or shine ☀️</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="mb-2 inline-block rounded-full bg-secondary/10 px-4 py-1 text-xs font-bold text-secondary">GET IN TOUCH</span>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Contact Us</h2>
            <p className="mt-3 text-muted-foreground">Give us a call or send a WhatsApp — we'd love to make your car shine!</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Melusi */}
            <div className="group rounded-2xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">Melusi</h3>
              <a href="tel:0634339510" className="mt-1 block text-xl font-bold text-secondary hover:underline">
                063 433 9510
              </a>
              <a
                href="https://wa.me/27634339510"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-vibrant px-6 py-2.5 text-sm font-bold text-vibrant-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            {/* Peter */}
            <div className="group rounded-2xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">Peter</h3>
              <a href="tel:0615040592" className="mt-1 block text-xl font-bold text-secondary hover:underline">
                061 504 0592
              </a>
              <a
                href="https://wa.me/27615040592"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-vibrant px-6 py-2.5 text-sm font-bold text-vibrant-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <Clock className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h4 className="font-bold text-card-foreground">Operating Hours</h4>
                <p className="mt-1 text-sm text-muted-foreground">Open Daily: 07:30 – 18:00</p>
                <p className="text-sm text-muted-foreground">Weekends & holidays included 🎉</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <Coffee className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
              <div>
                <h4 className="font-bold text-card-foreground">While You Wait</h4>
                <p className="mt-1 text-sm text-muted-foreground">Refreshments available on site ☕</p>
                <p className="text-sm text-muted-foreground">Relax while we handle the rest!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
