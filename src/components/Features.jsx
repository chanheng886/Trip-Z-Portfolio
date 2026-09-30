import React from 'react';
import { 
  Navigation, Armchair, QrCode, RefreshCcw, CreditCard, 
  BellRing, ShieldCheck, Zap, Sparkles 
} from 'lucide-react';

const features = [
  {
    icon: Navigation,
    title: 'Live GPS Radar & Bus Telemetry',
    description: 'Track express buses in real time along Cambodia Expressways with live ETA calculation, terminal departure alerts, and rest-stop milestones.',
    badge: 'Expressway Real-Time',
  },
  {
    icon: Armchair,
    title: 'Interactive Seat Matrix & Sleeper Pods',
    description: 'Explore double-decker upper decks, quiet lower cabins, and luxury zero-gravity sleeper pods. Reserve your favorite window or aisle seat instantly.',
    badge: '3D Seat Matrix',
  },
  {
    icon: QrCode,
    title: 'Instant Offline QR Boarding Pass',
    description: 'No internet connection needed at remote provincial stations. Your encrypted QR ticket pass works completely offline on both Android and iOS.',
    badge: 'Offline Ticket',
  },
  {
    icon: RefreshCcw,
    title: 'Instant 1-Click Ticket Refunds',
    description: 'Change of schedule? Cancel anytime up to 2 hours before departure and receive instant wallet credit or bank account refund with zero penalty fees.',
    badge: 'Zero Penalty',
  },
  {
    icon: CreditCard,
    title: 'ABA, KHQR & ACLEDA Pay',
    description: 'Pay instantly with Bakong KHQR, ABA Mobile, ACLEDA, Apple Pay, Visa, and Mastercard with automated receipts for business expenses.',
    badge: 'Local QR Payments',
  },
  {
    icon: BellRing,
    title: 'Gate & Telegram Transit Alerts',
    description: 'Receive proactive alerts via push notifications or Telegram when your coach arrives at the terminal or when boarding is called.',
    badge: 'Smart Alerts',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#0c0e14]">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00D26A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13281d] border border-[#1e3d2d] text-[#00D26A] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Cutting-Edge Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for Travelers Who <span className="text-[#00D26A]">Demand Comfort</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            TripZ upgrades intercity travel across Cambodia with digital ticketing, verified operators, and instant boarding.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-[26px] bg-[#161922] border border-[#282e3e] hover:border-[#00D26A]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#212633] text-slate-300 border border-[#2c3344]">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D26A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="w-8 h-1 rounded-full bg-[#282e3e] group-hover:w-16 group-hover:bg-[#00D26A] transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-14 p-6 rounded-3xl bg-[#161922] border border-[#282e3e] flex flex-wrap items-center justify-around gap-6 text-center shadow-xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#00D26A]" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">100% Licensed Express Lines</div>
              <div className="text-[11px] text-slate-400">Inspected vehicles & drivers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">Zero Booking Surcharges</div>
              <div className="text-[11px] text-slate-400">Transparent official ticket rates</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#00D26A]" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">Sub-Second Mobile Checkout</div>
              <div className="text-[11px] text-slate-400">Integrated KHQR & ABA payment</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
