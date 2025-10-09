import { ShieldCheck, Truck, Factory } from "lucide-react";
import hero from "../../../assets/vessel.jpg";

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-sm uppercase text-yellow-400 font-semibold tracking-widest">
            Why Partner With Us
          </h4>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
            Delivering Energy Reliability Through{" "}
            <span className="text-green-600">Operational Excellence</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            At Satomen Investment SA, we solve the toughest petroleum supply and
            logistics challenges across marine, road, and storage facilities.
            With a proven record in downstream oil & gas operations, we ensure
            timely delivery of refined white products backed by strong HSSE
            compliance, quality assurance, and measurable performance standards.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-green-600 h-6 w-6" />
              HSSE-driven operations with zero-compromise safety standards
            </li>
            <li className="flex items-center gap-3">
              <Truck className="text-green-600 h-6 w-6" />
              Reliable marine and road fuel distribution across regions
            </li>
            <li className="flex items-center gap-3">
              <Factory className="text-green-600 h-6 w-6" />
              Integrity-focused custody transfer and quality control
            </li>
          </ul>
        </div>
        <img
          src={hero}
          alt="Satomen petroleum logistics operations"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
