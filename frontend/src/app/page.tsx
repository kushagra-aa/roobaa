import Header from "@/components/header/Header";
import AccessSection from "@/components/homeSections/access/accessSection";
import BlankSection from "@/components/homeSections/blank/blankSection";
import ContactSection from "@/components/homeSections/contact/contactSection";
import DiscoverSection from "@/components/homeSections/discover/discoverSection";
import HeroSection from "@/components/homeSections/hero/heroSection";
import HowSection from "@/components/homeSections/how/howSection";
import MoreSection from "@/components/homeSections/more/moreSection";
import WhySection from "@/components/homeSections/why/whySection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <AccessSection />
      <WhySection />
      <HowSection />
      <MoreSection />
      <ContactSection />
      <BlankSection />
    </main>
  );
}
