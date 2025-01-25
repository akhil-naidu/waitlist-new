export const metadata = {
  title: "Features - NextGen Forex",
  description: "Discover our cutting-edge trading features, from ultra-low spreads to advanced trading tools and secure infrastructure.",
};

import PageHeader from "@/components/page-header";
import Cta from "@/components/cta";
import TradingFeatures from "./trading-features";

export default function Features() {
  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="Experience Superior Trading"
              description="Discover why professional traders choose our platform. From ultra-low spreads to advanced tools and secure infrastructure, we provide everything you need for successful trading."
            >
              Platform Features
            </PageHeader>
          </div>
        </div>
      </section>

      <TradingFeatures />
      <Cta />
    </>
  );
}