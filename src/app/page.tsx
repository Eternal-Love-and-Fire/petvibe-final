// import { Bubbles } from "@/components/Bubbles";
import { ImageSlider } from "@/components/ImageSlider";
import { About } from "@/widgets/About";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Hero } from "@/widgets/Hero";
import { OurServices } from "@/widgets/OurServices";
import { Prices } from "@/widgets/Prices";
/**
 * here also should be feebback section
 * also should be section where user can switch state of animal(mouse slide)
 * 
 * 
 * 
 */
export default function Home() {
  return (
    <div className="overflow-hidden">
    <Header />
    <Hero />
    {/* <Bubbles /> */}
    <About />
    <OurServices />
    <Prices />
    <ImageSlider />
    <Footer />
    </div>
  );
}
