export default async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [
    {
      id: 1,
      category: "Platform",
      title: "Platform Launch Timeline Announced",
      content: "We're excited to announce our platform launch timeline. The beta version will be available to early access members in Q2 2024, featuring ultra-low spreads and lightning-fast execution.",
      author: "Sarah Chen",
      authorImage: "/images/author-01.jpg",
      date: "Mar 18"
    },
    {
      id: 2,
      category: "Trading",
      title: "New Advanced Trading Features",
      content: "Our platform will launch with institutional-grade features including one-click trading, advanced charting, and automated risk management tools.",
      author: "Michael Rodriguez",
      authorImage: "/images/author-02.jpg",
      date: "Mar 15"
    },
    {
      id: 3,
      category: "Markets",
      title: "100+ Trading Instruments Available",
      content: "Access a wide range of forex pairs, commodities, indices, and cryptocurrencies with competitive spreads and deep liquidity.",
      author: "David Kumar",
      authorImage: "/images/author-03.jpg",
      date: "Mar 12"
    },
    {
      id: 4,
      category: "Community",
      title: "VIP Trading Community Launch",
      content: "Join our exclusive community of professional traders. Get access to live trading sessions, market analysis, and networking opportunities.",
      author: "Emma Thompson",
      authorImage: "/images/author-01.jpg",
      date: "Mar 10"
    }
  ];

  return posts;
}