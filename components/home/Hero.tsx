import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}