import React, { useState } from 'react';
import { 
  Bus, MapPin, Calendar, Users, Clock, Wifi, BatteryCharging, 
  Coffee, Shield, Check, ArrowRight, QrCode, X, Sparkles, ChevronRight,
  ArrowUpDown, Navigation, CheckCircle2
} from 'lucide-react';

const cambodiaDestinations = [
  'Siem Reap (Angkor)',
  'Sihanoukville (Koh Rong)',
  'Battambang',
  'Kampot & Kep',
  'Poipet (Border)',
  'Bavet (Border)',
  'Koh Kong',
  'Mondulkiri',
];

const mockBuses = [
  {
    id: 'TZ-EXP-01',
    name: 'TripZ Royal VIP Sleeper',
    operator: 'Expressway Direct Fleet',
    departTime: '08:30 AM',
    arriveTime: '11:15 AM',
    duration: '2h 45m (Expressway)',
    price: 16.00,
    priceKhr: '65,000 ៛',
    currency: '$',
    rating: 4.9,
    seatsLeft: 6,
    busType: 'Double-Decker Capsule Sleeper',
    amenities: ['High-speed 5G WiFi', 'USB-C Fast Charging', 'Mineral Water', 'AC Purified'],
  },
  {
    id: 'TZ-EXP-08',
    name: 'Cambodia Prime Cruiser',
    operator: 'Giant Luxury Lines',
    departTime: '10:00 AM',
    arriveTime: '12:45 PM',
    duration: '2h 45m (Expressway)',
    price: 13.50,
    priceKhr: '55,000 ៛',
    currency: '$',
    rating: 4.85,
    seatsLeft: 11,
    busType: 'Executive 2+1 Recliner',
    amenities: ['Complimentary WiFi', 'AC Climate Control', 'Power Outlet', 'Personal Snack'],
  },
  {
    id: 'TZ-EXP-22',
    name: 'Night Star Sleep Pod',
    operator: 'TripZ Night Transit',
    departTime: '11:30 PM',
    arriveTime: '05:30 AM',
    duration: '6h 00m',
    price: 19.00,
    priceKhr: '78,000 ៛',
    currency: '$',
    rating: 4.95,
    seatsLeft: 3,
    busType: 'Zero-Gravity Flatbed Pod',
    amenities: ['Privacy Curtain', '5G WiFi', 'Soft Duvet & Pillow', 'Sleep Headset'],
  },
];

export default function AppSimulator({ onDownloadClick }) {
  const [origin, setOrigin] = useState('Phnom Penh');
  const [destination, setDestination] = useState('Siem Reap (Angkor)');
  const [leavingDate, setLeavingDate] = useState('2026-09-30');
  const [returnDate, setReturnDate] = useState('');
  const [selectedSeats, setSelectedSeats] = useState(['24A']);
  const [activeBus, setActiveBus] = useState(null);
  const [showTicketModal, setShowTicketModal] = useState(false);

  const swapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const seatLayout = [
    { id: '1A', type: 'window', booked: true },
    { id: '1B', type: 'aisle', booked: false },
    { id: '1C', type: 'window', booked: false },
    { id: '2A', type: 'window', booked: true },
    { id: '2B', type: 'aisle', booked: true },
    { id: '2C', type: 'window', booked: false },
    { id: '3A', type: 'window', booked: false },
    { id: '3B', type: 'aisle', booked: false },
    { id: '3C', type: 'window', booked: true },
    { id: '24A', type: 'window-vip', booked: false },
    { id: '24B', type: 'aisle', booked: false },
    { id: '24C', type: 'window', booked: false },
  ];

  const handleSeatClick = (seatId, isBooked) => {
    if (isBooked) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const calculateTotal = () => {
    if (!activeBus) return 0;
    return (activeBus.price * selectedSeats.length).toFixed(2);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-[#0c0e14]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00D26A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13281d] border border-[#1e3d2d] text-[#00D26A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Live Search & Seat Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book Express Routes with <span className="text-[#00D26A]">TripZ</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Try the real-time Cambodia intercity route simulator directly in your browser.
          </p>
        </div>

        {/* The Exact Reference Card Structure */}
        <div className="max-w-xl mx-auto bg-[#161922] border border-[#282e3e] rounded-[32px] p-5 sm:p-6 shadow-2xl mb-12">
          
          <div className="space-y-3">
            
            {/* Field 1: FROM */}
            <div className="bg-[#212633] border border-[#2c3344] rounded-2xl p-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 flex-1">
                <div className="w-10 h-10 rounded-xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A] flex-shrink-0">
                  <Navigation className="w-5 h-5 transform rotate-45" />
                </div>
                <div className="flex-1">
                  <label className="text-[11px] font-semibold text-slate-400 block">From</label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                  >
                    <option value="Phnom Penh" className="bg-[#161922] text-white">Phnom Penh</option>
                    <option value="Siem Reap (Angkor)" className="bg-[#161922] text-white">Siem Reap (Angkor)</option>
                    <option value="Sihanoukville" className="bg-[#161922] text-white">Sihanoukville</option>
                    <option value="Battambang" className="bg-[#161922] text-white">Battambang</option>
                    <option value="Kampot" className="bg-[#161922] text-white">Kampot</option>
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <button
                onClick={swapLocations}
                className="w-9 h-9 rounded-full bg-[#2a3040] hover:bg-[#343b50] flex items-center justify-center text-[#00D26A] transition-colors cursor-pointer"
                title="Swap origin and destination"
              >
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </div>

            {/* Field 2: TO */}
            <div className="bg-[#212633] border border-[#2c3344] rounded-2xl p-3.5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <label className="text-[11px] font-semibold text-slate-400 block">To</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                >
                  {cambodiaDestinations.map((dest) => (
                    <option key={dest} value={dest} className="bg-[#161922] text-white">
                      {dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Field 3: LEAVING */}
            <div className="bg-[#212633] border border-[#2c3344] rounded-2xl p-3.5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A] flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <label className="text-[11px] font-semibold text-slate-400 block">Leaving</label>
                <input
                  type="date"
                  value={leavingDate}
                  onChange={(e) => setLeavingDate(e.target.value)}
                  className="w-full bg-transparent text-white font-bold text-base outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Field 4: RETURN */}
            <div className="bg-[#212633] border border-[#2c3344] rounded-2xl p-3.5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#13281d] border border-[#1e3d2d] flex items-center justify-center text-[#00D26A] flex-shrink-0">
                <Calendar className="w-5 h-5 opacity-80" />
              </div>
              <div className="flex-1">
                <label className="text-[11px] font-semibold text-slate-400 block">Return</label>
                <input
                  type="text"
                  placeholder="Optional (One-way or Round-trip)"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-transparent text-slate-400 placeholder:text-slate-500 font-bold text-base outline-none"
                />
              </div>
            </div>

          </div>

          {/* Quick Route Highlights */}
          <div className="mt-4 pt-3 border-t border-[#282e3e] flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-[#00D26A] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Expressway Fast Lane Available
            </span>
            <span>2h 45m transit</span>
          </div>

        </div>

        {/* Bus Departures Results */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Available Coaches ({origin} ➔ {destination})
            </h3>
            <span className="text-xs text-[#00D26A] font-medium">3 Daily Express Departures</span>
          </div>

          {mockBuses.map((bus) => (
            <div
              key={bus.id}
              className="bg-[#161922] border border-[#282e3e] hover:border-[#00D26A]/50 rounded-2xl p-5 sm:p-6 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Timing and details */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-[#13281d] text-[#00D26A] border border-[#1e3d2d]">
                    {bus.id}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {bus.name}
                  </h4>
                  <span className="text-xs text-slate-400">• {bus.operator}</span>
                </div>

                <div className="flex items-center gap-5 text-sm">
                  <div>
                    <div className="text-xl font-black text-white">{bus.departTime}</div>
                    <div className="text-xs text-slate-400">{origin}</div>
                  </div>
                  <div className="flex-1 max-w-[140px] flex flex-col items-center">
                    <span className="text-[10px] text-[#00D26A] font-bold">{bus.duration}</span>
                    <div className="w-full flex items-center gap-1 my-1">
                      <div className="w-2 h-2 rounded-full bg-[#00D26A]" />
                      <div className="h-[2px] flex-1 bg-[#00D26A]" />
                      <div className="w-2 h-2 rounded-full bg-[#00D26A]" />
                    </div>
                    <span className="text-[10px] text-slate-400">Direct Route</span>
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">{bus.arriveTime}</div>
                    <div className="text-xs text-slate-400">{destination}</div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {bus.amenities.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#212633] text-slate-300 text-[11px] border border-[#2c3344]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Select Button */}
              <div className="flex md:flex-col items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#282e3e]">
                <div className="md:text-right">
                  <div className="text-2xl font-black text-white">
                    ${bus.price.toFixed(2)}
                  </div>
                  <div className="text-xs text-[#00D26A] font-bold">
                    {bus.priceKhr} • {bus.seatsLeft} seats left
                  </div>
                </div>

                <button
                  onClick={() => setActiveBus(bus)}
                  className="px-5 py-2.5 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-extrabold text-xs shadow-md shadow-[#00D26A]/25 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Select Seat</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seat Picker Modal */}
        {activeBus && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div 
              className="relative w-full max-w-xl bg-[#161922] border border-[#282e3e] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveBus(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#212633] text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold text-[#00D26A] uppercase tracking-wider">
                  Interactive Simulator
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{activeBus.name}</h3>
                <p className="text-xs text-slate-400">{origin} ➔ {destination} • {activeBus.busType}</p>
              </div>

              {/* Bus Cabin Visual */}
              <div className="p-5 rounded-2xl bg-[#0c0e14] border border-[#282e3e] mb-6">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-[#282e3e]">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded bg-[#00D26A]" />
                    <span className="text-white font-medium">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded bg-[#212633] border border-[#2c3344]" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded bg-[#161922] text-slate-600 line-through" />
                    <span>Occupied</span>
                  </div>
                </div>

                {/* Driver Cabin */}
                <div className="flex items-center justify-between px-4 py-2 mb-4 bg-[#161922] rounded-xl text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D26A]" />
                    <span>Windshield / Front Deck</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Captain Cabin</span>
                </div>

                {/* Seat Matrix */}
                <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                  {seatLayout.map((seat) => {
                    const isSelected = selectedSeats.includes(seat.id);
                    return (
                      <button
                        key={seat.id}
                        disabled={seat.booked}
                        onClick={() => handleSeatClick(seat.id, seat.booked)}
                        className={`py-3.5 rounded-xl text-xs font-bold transition-all relative flex flex-col items-center justify-center cursor-pointer ${
                          seat.booked
                            ? 'bg-[#161922]/50 text-slate-600 border border-[#282e3e]/40 cursor-not-allowed'
                            : isSelected
                            ? 'bg-[#00D26A] text-black shadow-lg shadow-[#00D26A]/40 scale-105 font-black'
                            : 'bg-[#212633] text-slate-200 hover:bg-[#2c3344] border border-[#2c3344] hover:border-[#00D26A]/40'
                        }`}
                      >
                        <span>{seat.id}</span>
                        <span className="text-[9px] font-normal opacity-80">
                          {seat.booked ? 'Booked' : isSelected ? 'Chosen' : 'Open'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#212633] border border-[#2c3344] mb-5">
                <div>
                  <div className="text-xs text-slate-400">Selected Seats ({selectedSeats.length})</div>
                  <div className="text-base font-bold text-white">
                    {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Total Price</div>
                  <div className="text-2xl font-black text-[#00D26A]">
                    ${calculateTotal()}
                  </div>
                </div>
              </div>

              <button
                disabled={selectedSeats.length === 0}
                onClick={() => setShowTicketModal(true)}
                className="w-full py-3.5 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-black text-sm shadow-xl shadow-[#00D26A]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <QrCode className="w-4 h-4" />
                Generate Digital Boarding Pass
              </button>
            </div>
          </div>
        )}

        {/* Digital Boarding Pass Modal */}
        {showTicketModal && activeBus && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
            <div 
              className="relative w-full max-w-sm bg-[#161922] border border-[#00D26A]/50 rounded-3xl p-6 shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setShowTicketModal(false);
                  setActiveBus(null);
                }}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#212633] text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13281d] text-[#00D26A] text-xs font-bold mb-4 border border-[#1e3d2d]">
                <Check className="w-3.5 h-3.5" />
                Verified Boarding Pass
              </div>

              <div className="text-xl font-bold text-white">{activeBus.name}</div>
              <div className="text-xs text-slate-400 mb-4">{origin} ➔ {destination}</div>

              {/* QR Code Container */}
              <div className="p-4 bg-white rounded-2xl inline-block mx-auto mb-4 shadow-xl">
                <div className="w-36 h-36 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg">
                  <div className="text-center">
                    <QrCode className="w-24 h-24 text-slate-900 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-600 font-bold block mt-1">
                      PASS: {activeBus.id}-{selectedSeats[0] || 'VIP'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ticket Details */}
              <div className="grid grid-cols-2 gap-2 text-xs bg-[#212633] p-3 rounded-xl border border-[#2c3344] mb-5 text-left">
                <div>
                  <span className="text-slate-400 block text-[10px]">Departure</span>
                  <span className="font-bold text-white">{activeBus.departTime}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Seats</span>
                  <span className="font-bold text-[#00D26A]">{selectedSeats.join(', ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Payment Status</span>
                  <span className="font-bold text-[#00D26A]">Paid (ABA/KHQR)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Total</span>
                  <span className="font-bold text-white">${calculateTotal()}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowTicketModal(false);
                  setActiveBus(null);
                  onDownloadClick();
                }}
                className="w-full py-3 rounded-xl bg-[#00D26A] hover:bg-[#00B85C] text-black font-black text-xs shadow-lg transition-all cursor-pointer"
              >
                Download TripZ App to Save Pass
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
