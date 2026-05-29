import { useState } from "react";
import { INDUSTRIES_DATA } from "../constants";

const Industries = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getIndustryIcon = (id) => {
    const classProps = "w-7 h-7 text-white";
    switch (id) {
      case 1:
        return (
          <svg
            className={classProps}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case 2:
        return (
          <svg
            className={classProps}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z"
            />
          </svg>
        );
      case 3:
        return (
          <svg
            className={classProps}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25z"
            />
          </svg>
        );
      case 4:
        return (
          <svg
            className={classProps}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        );
      case 5:
        return (
          <svg
            className={classProps}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375"
            />
          </svg>
        );
      default:
        return (
          <svg
            className={classProps}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  const faqs = [
    {
      q: "What industries do you serve?",
      a: "We primarily provide specialized solutions across Pharmaceuticals, Chemicals, Textiles, Energy, Automobile, and Time-Critical Cargo environments globally.",
    },
    {
      q: "How do you handle temperature-sensitive shipments?",
      a: "Through our specialized cold-chain infrastructure under PentaKÜHL utilizing advanced passive and active vacuum packaging layouts.",
    },
    {
      q: "What sets your logistics apart?",
      a: "Over three decades of integrated clearing control hubs, competitive direct carrier arrangements, and customized technology mapping.",
    },
    {
      q: "How do you ensure compliance with regulations?",
      a: "By following strict local, international, and IATA framework policies with fully certified transport execution crews.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden flex flex-col items-center">
      {/* BULLETPROOF SPACER: This forces content down regardless of fixed navbars */}
      <div className="w-full h-32 md:h-48 bg-transparent shrink-0"></div>

      {/* 1. Header Block */}
      <section className="w-full flex flex-col items-center px-4 mb-16">
        <h1 className="text-4xl md:text-[52px] font-light text-neutral-800 tracking-[0.15em] mb-6 text-center leading-none">
          INDUSTRIES
        </h1>
        <p className="text-sm md:text-base text-neutral-500 font-normal max-w-2xl text-center leading-relaxed tracking-wide">
          Over the past two decades we have been coming up with innovative ways
          to enable global trade across various industries.
        </p>
      </section>

      {/* 2. Grid System */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 justify-items-center">
          {INDUSTRIES_DATA.map((ind, index) => {
            const isStaggered = index % 2 !== 0;
            return (
              <div
                key={ind.id}
                className={`w-full max-w-md bg-[#f47639] rounded-[2rem] p-8 md:p-10 text-white shadow-xl flex flex-col justify-start items-center text-center min-h-[340px] transition-all hover:shadow-2xl ${
                  isStaggered ? "md:mt-24" : ""
                }`}
              >
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-inner">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <h3 className="text-3xl font-bold tracking-wide">
                    {ind.name}
                  </h3>
                </div>
                <p className="text-[15px] text-white/95 leading-relaxed tracking-wide font-light">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MASSIVE SPACER before FAQ */}
      <div className="w-full h-24 md:h-32 bg-transparent shrink-0"></div>

      {/* 3. FAQ Accordion Block */}
      <section className="w-full max-w-5xl mx-auto px-4 border-t border-neutral-200 pt-24 mb-32 flex flex-col items-center">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-normal text-neutral-800 tracking-tight">
            Frequently Asked{" "}
            <span className="text-neutral-400 font-light">Questions</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto font-light">
            Find answers to common industry questions, ensuring clarity on our
            services, processes, and solutions.
          </p>
        </div>

        <div className="w-full max-w-4xl space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-200/80 last:border-b-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-6 flex justify-between items-center text-center text-sm md:text-base font-semibold text-neutral-700 hover:text-[#e05320] transition-colors duration-200"
              >
                <span className="tracking-wide text-left flex-1">{faq.q}</span>
                <span className="text-neutral-400 text-xs ml-4">
                  {openFaq === index ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-neutral-500 leading-relaxed tracking-wide text-left pr-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MASSIVE SPACER before Overlay */}
      <div className="w-full h-16 bg-transparent shrink-0"></div>

      {/* 4. Full-Width CTA Overlay Banner */}
      <section className="relative w-full h-80 bg-neutral-950 overflow-hidden mb-32 flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 filter grayscale mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80')`,
          }}
        ></div>
        <div className="relative z-10 text-center px-4 space-y-6 w-full flex flex-col items-center">
          <h2 className="text-4xl md:text-[42px] font-bold text-white tracking-wide text-center">
            Tailored Logistics for Every Industry
          </h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl text-center font-light leading-relaxed">
            Delivering tailored supply chain solutions to meet the unique needs
            of industries worldwide.
          </p>
          <div className="pt-4">
            <button className="bg-[#e05320] hover:bg-orange-600 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-10 py-4 rounded shadow-xl transition-all transform active:scale-95">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* 5. Center-Aligned Office Directory Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 pb-32 flex flex-col items-center text-center">
        {/* India Block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full justify-items-center">
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-neutral-800 tracking-tight">
              Our <span className="text-[#e05320]">India</span> Offices
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-[220px] text-center">
              Penta Freight delivers seamless logistics across India, with
              branches in key cities for your convenience.
            </p>
          </div>

          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Mumbai
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri
              (East), Mumbai 400 059
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +91 22-6222-6222
            </p>
          </div>

          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Ahmedabad
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              D21 The Address, True Value West Gate, SG highway, Ahmedabad 380
              009
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +91 7940227900
            </p>
          </div>

          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Bengaluru
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              205, 2nd floor, Connection point H.A.L Airport Exit Road,
              Bangalore 560 017
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +91 80-4112-5590
            </p>
          </div>
        </div>

        {/* India Block Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full justify-items-center mt-12 pt-12 border-t border-neutral-100">
          <div className="hidden md:block"></div>

          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Chennai
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street,
              Palavanthangal Chennai- 600 114
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +91-44-22241462 / 1464
            </p>
          </div>

          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Delhi
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4,
              Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New
              Delhi – 110 037
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +91 11-4078-2222
            </p>
          </div>

          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Hyderabad
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International
              Airport, Shamshabad 501 218, Telangana, India
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +91 40-2400-4048
            </p>
          </div>
        </div>

        {/* India Block Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full justify-items-center mt-12 pt-12 border-t border-neutral-100">
          <div className="hidden md:block"></div>
          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Kolkata
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O
              Rajbari, Kolkata 700 081, West Bengal
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +91 33-2514-7089
            </p>
          </div>
        </div>

        {/* USA Block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full justify-items-center mt-20 pt-20 border-t-2 border-neutral-100">
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-neutral-800 tracking-tight">
              Our <span className="text-[#e05320]">USA</span> Office
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-[220px] text-center">
              Penta Freight has expanded its operations globally, beginning with
              the USA, to offer continuous support across continents.
            </p>
          </div>

          <div className="text-xs space-y-2 flex flex-col items-center max-w-[240px]">
            <h4 className="font-bold text-neutral-800 uppercase tracking-widest mb-1">
              Chicago
            </h4>
            <p className="leading-relaxed text-neutral-500 font-light text-center">
              Penta Freight Pvt.Ltd 5100 Newport Dr. Suite 4, Rolling Meadows,
              IL 60008 USA
            </p>
            <p className="text-[#e05320] font-bold tracking-wide mt-2">
              +040 234 6559 / +224 434 2154
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
