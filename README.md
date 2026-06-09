import {
  Phone,
  Mail,
  MapPin,
  
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#05011f] text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d4ed855,transparent_70%)]" />

        <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8 pt-32 lg:pt-36">
          <div className="text-center">
            <span className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm tracking-[3px] uppercase text-white">
              Contact Center
            </span>

            <h1 className="text-5xl md:text-7xl font-bold">
              <span className=" px-4 py-2 ">
                Contact
              </span>{" "}
              Us
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              Reach out to our cyber intelligence specialists, investigation
              teams and digital security consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-20 pt-5">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={<Phone size={28} />}
              title="+91 98765 43210"
              description="Speak directly with our intelligence response team."
              tag="Phone Number"
            />

            <InfoCard
              icon={<Mail size={28} />}
              title="contact@mrmintelligence.com"
              description="Send inquiries regarding investigations, OSINT and training."
              tag="Email Address"
            />

            <InfoCard
              icon={<MapPin size={28} />}
              title="Mumbai, India"
              description="Operations center serving clients globally."
              tag="Our Location"
            />
          </div>
        </div>
      </section>

      {/* Partner Strip */}
      <section className="border-y border-white/10 bg-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 text-center text-gray-500 md:grid-cols-5">
            <div>PARTNER 01</div>
            <div>PARTNER 02</div>
            <div>PARTNER 03</div>
            <div>PARTNER 04</div>
            <div>PARTNER 05</div>
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="text-sm tracking-[4px] uppercase text-blue-400">
                Get In Touch
              </span>

              <p className="mt-6 max-w-lg text-gray-400">
                Connect with our cyber intelligence experts for consulting,
                investigations, threat analysis and enterprise security.
              </p>
              <h3 className="mt-12 mb-4 text-xl font-semibold">
                Find Us Here
              </h3>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
                  className="h-[300px] w-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border-b border-t border-blue-500 p-8 backdrop-blur-xl ">
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" />
                </div>

                <Input placeholder="Subject" />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full rounded-xl border-b border-blue-500 bg-[#0a062f] px-5 py-4 text-white outline-none focus:border-blue-500"
                />

                <button
                  className="
                  w-full
                  rounded-full
                  bg-linear-to-r from-blue-500 to-blue-700
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:opacity-90
                "
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

  
    </div>

    
  );
}

function Input({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <input
      placeholder={placeholder}
      className="
      w-full
      rounded-xl
      border-b
      border-blue-500
      bg-[#0a062f]
      px-5
      py-4
      text-white
      outline-none
      focus:border-blue-500
    "
    />
  );
}

function InfoCard({
  icon,
  title,
  description,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div
      className="
      rounded-3xl
      p-6
      backdrop-blur-xl
      transition
      hover:border-blue-500/40
      border-b border-blue-500
      border-t
    "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-b border-blue-500 text-blue-500 hover:border shadow shadow-blue-500">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-4 text-gray-400">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="rounded-full bg-linear-to-r from-blue-500 to-blue-700 px-3 py-1 text-xs">
          {tag}
        </span>

        <ArrowRight size={18} />
      </div>
    </div>
  );
}

