import { Play } from "lucide-react";
import hero from "../../../assets/vessel.jpg";

export default function VideoSection() {
  return (
    <section className="relative p-5 md:p-16">
      {/* Media */}
      <div className="mt-8 overflow-hidden rounded-md">
        <div className="relative aspect-video w-full bg-slate-700">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/D1Zl-_o64xg?si=S_NbYC5GMnUgTv4u"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
