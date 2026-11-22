import FeaturedTuition from "@/components/Homepage/FeaturedTuition";
import Hero from "@/components/Homepage/Hero";
import HowItWorks from "@/components/Homepage/HowItWorks";
import Subscription from "@/components/Homepage/Subscription";
import TopSubjects from "@/components/Homepage/TopSubjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTuition/>
      <Subscription />
      <HowItWorks />
      <TopSubjects />
    </div>
  );
}
