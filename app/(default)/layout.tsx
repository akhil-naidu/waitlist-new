import Header from "@/components/layout/Header";
import Footer from "@/components/ui/footer";
import BackgroundEffects from "@/components/visual/BackgroundEffects";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}