import { Play } from "lucide-react";
import hero from "../../../assets/vessel.jpg";

export default function VideoSection() {
  return (
    <section className="relative py-16">
      <img src={hero} alt="Worker" className="w-full h-[400px] object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white rounded-full p-6 shadow-lg hover:scale-105 transition">
          <Play className="h-8 w-8 text-[#0a2741]" />
        </button>
      </div>
    </section>
  );
}
