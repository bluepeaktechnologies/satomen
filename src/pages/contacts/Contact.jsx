import Contact from "../home/Contact";
import hero from "../../assets/vessel.jpg";
import PageHeader from "../../layout/PageHeader";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
};

export default function Contacts() {
  // East Jadynchester – sample coordinates (NYC-ish). Replace if you have exact lat/lng.
  return (
    <div className="bg-white">
      {/* ✅ Shared Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="We’re Here to Help"
        background={hero}
      />
      <Contact />
    </div>
  );
}
