import { createFileRoute, Link } from "@tanstack/react-router";
import servicesCarImage from "@/assets/services-car.jpg";
import servicesSuvImage from "@/assets/services-suv.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Isioalo Car Wash" },
      { name: "description", content: "Car wash services from R30. Cars, SUVs, engine wash, polish, vacuum and valet services available." },
      { property: "og:title", content: "Services & Pricing — Isioalo Car Wash" },
      { property: "og:description", content: "Car wash services from R30. Cars, SUVs, engine wash, polish, vacuum and valet." },
    ],
  }),
  component: ServicesPage,
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
  { service: "Engine Wash", price: "R60" },
  { service: "Vacuum", price: "R30" },
  { service: "Polish", price: "R20" },
  { service: "Valet", price: "Subject to Enquiry" },
];

function PricingTable({ title, items, image, imageAlt }: { title: string; items: { service: string; price: string }[]; image?: string; imageAlt?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
      {image && (
        <img src={image} alt={imageAlt || title} className="h-48 w-full object-cover" loading="lazy" width={1280} height={720} />
      )}
      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold text-card-foreground">{title}</h3>
        <div className="divide-y">
          {items.map((item) => (
            <div key={item.service} className="flex items-center justify-between py-3">
              <span className="text-sm text-card-foreground">{item.service}</span>
              <span className="text-sm font-bold text-secondary">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Services & Pricing</h1>
          <p className="mt-3 text-muted-foreground">
            Premium hand car wash at affordable prices. We treat every car like our own.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PricingTable title="Cars" items={carPrices} image={servicesCarImage} imageAlt="White Mercedes-Benz sedan freshly detailed" />
          <PricingTable title="SUVs" items={suvPrices} image={servicesSuvImage} imageAlt="Blue BMW SUV with water beading on paint" />
        </div>

        <div className="mt-12">
          <PricingTable title="Extras" items={extras} />
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">Ready to get your car looking brand new?</p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg bg-secondary px-8 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
