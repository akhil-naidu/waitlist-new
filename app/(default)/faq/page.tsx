export const metadata = {
  title: "FAQ - NextGen Forex Trading",
  description: "Find answers to common questions about our forex trading platform, account types, and trading conditions.",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    // Platform & Launch
    {
      title: "When will the platform launch?",
      text: "We're launching in Q2 2024 with exclusive early access pricing for founding members. Join our waitlist now to secure lifetime VIP trading conditions, including our most competitive spreads from 0.0 pips and priority account setup.",
      active: false,
    },
    {
      title: "What makes NextGen Forex different?",
      text: "We combine institutional-grade technology with retail-friendly pricing. Our platform offers ultra-low spreads from 0.0 pips, millisecond execution speeds, and advanced trading tools typically reserved for institutional traders. Plus, our AI-powered analysis helps identify high-probability trades.",
      active: false,
    },
    {
      title: "What are your trading conditions?",
      text: "Experience superior trading with: 1) Spreads from 0.0 pips on major pairs, 2) Lightning-fast execution under 0.1 seconds, 3) No requotes or slippage on 99.9% of orders, 4) Commission-free trading on standard accounts, 5) Leverage up to 1:500 for professional traders.",
      active: false,
    },
    {
      title: "What trading instruments are available?",
      text: "Access over 100 instruments: 1) 50+ forex pairs including majors, minors, and exotics, 2) Popular cryptocurrencies like Bitcoin and Ethereum, 3) Global indices and commodities, 4) Precious metals including spot gold and silver. All with competitive spreads and deep liquidity.",
      active: false,
    },
    {
      title: "Which trading platforms do you offer?",
      text: "We provide both MetaTrader 5 and MetaTrader 4 platforms with: 1) Advanced charting with 50+ indicators, 2) One-click trading and automated strategies, 3) Mobile apps for iOS and Android, 4) Custom indicators and Expert Advisors support, 5) Multi-device synchronization.",
      active: false,
    },
    {
      title: "How fast is your execution speed?",
      text: "Our institutional-grade infrastructure delivers: 1) Average execution speed under 0.1 seconds, 2) 99.9% of orders executed without requotes, 3) Direct market access through tier-1 liquidity providers, 4) Stable connections via multiple global servers, 5) Ideal for scalping and algorithmic trading.",
      active: false,
    },
    {
      title: "How secure is my trading account?",
      text: "Your security is our top priority: 1) Bank-grade SSL encryption for all transactions, 2) Segregated client funds in tier-1 banks, 3) Regular security audits by independent firms, 4) Two-factor authentication (2FA), 5) Negative balance protection for all accounts.",
      active: true,
    },
    // Support & Education
    {
      title: "What trading support do you provide?",
      text: "Comprehensive support includes: 1) 24/7 multilingual customer service, 2) Personal account managers for VIP clients, 3) Live market analysis and trading signals, 4) Technical support via chat, email, and phone, 5) Regular webinars and trading workshops.",
      active: false,
    },
    {
      title: "Do you offer educational resources?",
      text: "Access our complete educational suite: 1) Video courses for all levels ($2,997 value), 2) Live trading sessions with pro traders, 3) Market analysis and trading strategies, 4) Risk management workshops, 5) Custom indicators and trading tools.",
      active: false,
    },
    // Account Types & Deposits
    {
      title: "What account types are available?",
      text: "Choose from three account types: 1) Standard Account - No commission, spreads from 1.0 pip, 2) Premium Account - Lower spreads from 0.5 pips, 3) VIP Account - Ultra-low spreads from 0.0 pips. Early access members get VIP conditions at standard account prices.",
      active: false,
    },
    {
      title: "What are the deposit and withdrawal options?",
      text: "Multiple secure payment methods: 1) Credit/debit cards - instant and free, 2) Bank wire transfer - 1-3 business days, 3) E-wallets including PayPal and Skrill, 4) Cryptocurrency deposits, 5) No deposit fees and fast withdrawals within 24 hours.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Everything You Need to Know"
              description="Find detailed answers about our trading platform, conditions, security, and support. We're committed to full transparency and helping you make informed trading decisions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}