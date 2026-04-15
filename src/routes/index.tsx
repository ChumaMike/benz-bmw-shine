import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, DollarSign, Star, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-carwash.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isioalo Car Wash — Your Car Is An Extension Of Your Image" },
      { name: "description", content: "Premium hand car wash services in your area. Affordable prices starting from R30. Open 7 days a week." },
      { property: "og:title", content: "Isioalo Car Wash — Premium Car Wash" },
      { property: "og:description", content: "Premium hand car wash services. Affordable prices starting from R30. Open 7 days." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Mercedes-Benz being washed at Isioalo Car Wash"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            ISIOALO CAR WASH
          </h1>
          <p className="mt-4 text-lg font-medium opacity-90 sm:text-xl">
            Your Car Is An Extension Of Your Image
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-lg bg-secondary px-8 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:scale-105"
            >
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border-2 border-primary-foreground/50 px-8 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: DollarSign, title: "Affordable Prices", desc: "Quality car wash starting from just R30" },
              { icon: Star, title: "Premium Service", desc: "Hand wash by skilled professionals for a perfect finish" },
              { icon: Calendar, title: "Open 7 Days", desc: "We're here for you every day, 07:30 – 18:00" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours banner */}
      <section className="bg-secondary py-8 text-secondary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-center sm:flex-row sm:justify-center sm:gap-6">
          <Clock className="h-8 w-8" />
          <div>
            <p className="text-lg font-bold">Open Daily: 07:30 – 18:00</p>
            <p className="text-sm opacity-80">Including weekends and public holidays</p>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Ready for a Spotless Ride?</h2>
          <p className="mt-3 text-muted-foreground">
            Drive in today or call us to book your wash. Refreshments available while you wait!
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:0634339510"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Call Melusi: 063 433 9510
            </a>
            <a
              href="tel:0615040592"
              className="inline-flex items-center rounded-lg border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Call Peter: 061 504 0592
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
