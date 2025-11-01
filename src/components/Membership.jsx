"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import luxury images
import crownIcon from "../assets/images/crown.png";
import member1 from "../assets/images/ranipadmavati2.jpg";
import member2 from "../assets/images/jodhabai5.jpg";
import member3 from "../assets/images/jodhabaidetail.webp";
import benefit1 from "../assets/images/ranipadmavati5.jpg";
import benefit2 from "../assets/images/jodhabai1.jpg";
import benefit3 from "../assets/images/jodhabai2.jpg";

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState("gold");

  // Membership Tiers
  const tiers = [
    {
      id: "silver",
      name: "Silver Court",
      price: "₹9,999",
      subtitle: "Entry to Elegance",
      color: "from-gray-300 to-gray-400",
      benefits: [
        "Early access to new collections",
        "10% off all purchases",
        "Birthday gift (up to ₹2,000)",
        "Quarterly style guide (digital)",
        "Priority customer support",
      ],
      popular: false,
    },
    {
      id: "gold",
      name: "Gold Court",
      price: "₹24,999",
      subtitle: "Royal Privilege",
      color: "from-yellow-600 to-amber-700",
      benefits: [
        "Everything in Silver",
        "20% off all purchases",
        "Exclusive preview events (virtual)",
        "Annual luxury gift box (₹5,000 value)",
        "Personal stylist session (1x/year)",
        "Free shipping & returns",
      ],
      popular: true,
    },
    {
      id: "platinum",
      name: "Platinum Court",
      price: "₹99,999",
      subtitle: "Maharani Circle",
      color: "from-slate-700 to-slate-900",
      benefits: [
        "Everything in Gold",
        "30% off all purchases",
        "Private atelier tour (Jaipur/Mumbai)",
        "Custom garment consultation (1x/year)",
        "VIP runway show access",
        "Lifetime membership + heirloom gift",
        "Dedicated concierge",
      ],
      popular: false,
    },
  ];

  // Exclusive Benefits Grid
  const benefits = [
    {
      title: "Private Previews",
      desc: "Be the first to see and reserve from new collections before public launch.",
      img: benefit1,
    },
    {
      title: "Bespoke Styling",
      desc: "One-on-one virtual or in-person styling with Inkovo’s head designer.",
      img: benefit2,
    },
    {
      title: "Heirloom Gifts",
      desc: "Receive handcrafted, limited-edition pieces not available to the public.",
      img: benefit3,
    },
  ];

  // Member Testimonials
  const testimonials = [
    { name: "Aarohi Singh", role: "Platinum Member", quote: "Inkovo isn’t just clothing — it’s a legacy I wear with pride.", img: member1 },
    { name: "Vikram Desai", role: "Gold Member", quote: "The stylist session transformed how I dress. Worth every rupee.", img: member2 },
    { name: "Priya Malhotra", role: "Silver Member", quote: "The birthday gift was a stunning silk scarf. I felt like royalty.", img: member3 },
  ];

  return (
    <main className="bg-[#F5F1E8] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO - Royal Invitation */}
      <section className="relative py-32 bg-gradient-to-b from-[#F5F1E8] via-[#e8e0d3] to-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?royal-throne')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#5A7A5E]/20 via-transparent to-[#F5F1E8]/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <img src={crownIcon} alt="Crown" className="w-16 h-16" />
          </div>
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-light text-[#333333] leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The Royal Court
          </h1>
          <p className="text-2xl sm:text-3xl text-[#5A7A5E] tracking-widest font-light mt-4">
            Exclusive Membership
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#5A7A5E] to-transparent mx-auto mt-6"></div>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed mt-6">
            Join an elite circle of patrons who don’t just wear Inkovo — they <strong>live the legacy</strong>.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-light text-[#333333] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Choose Your Throne
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative group cursor-pointer transition-all duration-500 rounded-3xl overflow-hidden ${
                  selectedTier === tier.id ? "ring-4 ring-[#5A7A5E] ring-offset-4" : ""
                } ${tier.popular ? "md:scale-105" : ""}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-[#5A7A5E] to-[#3B5A3E] text-white text-xs font-bold px-6 py-2 rounded-bl-2xl z-10">
                    MOST POPULAR
                  </div>
                )}

                {/* Card */}
                <div
                  className={`p-8 text-center space-y-6 transition-all duration-500 ${
                    selectedTier === tier.id ? "bg-white" : "bg-white/80"
                  } border border-[#5A7A5E]/10`}
                >
                  {/* Tier Header */}
                  <div>
                    <h3 className="text-3xl font-medium text-[#333333]">{tier.name}</h3>
                    <p className="text-sm text-[#5A7A5E] tracking-widest mt-1">{tier.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="py-4">
                    <span className="text-5xl font-light text-[#333333]">{tier.price}</span>
                    <span className="text-[#666666] text-sm"> / year</span>
                  </div>

                  {/* Gradient Bar */}
                  <div className={`h-1 bg-gradient-to-r ${tier.color} rounded-full`}></div>

                  {/* Benefits */}
                  <ul className="space-y-3 text-left text-sm text-[#666666]">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#5A7A5E] mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-3 rounded-full font-semibold text-sm tracking-widest transition-all ${
                      selectedTier === tier.id
                        ? "bg-[#5A7A5E] text-white hover:bg-[#333333]"
                        : "bg-transparent border-2 border-[#5A7A5E] text-[#5A7A5E] hover:bg-[#5A7A5E] hover:text-white"
                    }`}
                  >
                    {selectedTier === tier.id ? "SELECTED" : "JOIN NOW"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCLUSIVE BENEFITS GRID */}
      <section className="py-24 bg-[#eae2d5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-light text-[#333333] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Privileges of the Court
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#5A7A5E]/10"
              >
                <div className="overflow-hidden">
                  <img
                    src={benefit.img || "/placeholder.svg"}
                    alt={benefit.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center space-y-3">
                  <h3 className="text-2xl font-medium text-[#333333]">{benefit.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-light text-[#333333] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Voices from the Court
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-xl border border-[#5A7A5E]/10 text-center space-y-6"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#5A7A5E]/20"
                />
                <p className="text-[#666666] italic text-sm leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-medium text-[#333333]">{t.name}</p>
                  <p className="text-xs text-[#5A7A5E] tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-[#F5F1E8] to-[#e8e0d3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl font-light text-[#333333] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Your Seat Awaits
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mb-10">
            Only 300 memberships available this year. Once claimed, the gates close.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              APPLY FOR MEMBERSHIP
            </button>
            <button className="px-10 py-4 border-2 border-[#5A7A5E] text-[#5A7A5E] text-sm tracking-widest font-semibold rounded-full hover:bg-[#5A7A5E] hover:text-white transition-all">
              VIEW FULL BENEFITS
            </button>
          </div>
          <p className="text-xs text-[#666666] mt-8 tracking-widest">
            LIMITED SPOTS • BY INVITATION ONLY
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}