import React from 'react';
import { 
  Sun, 
  Battery, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail,
  MapPin
} from 'lucide-react';

const Home = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Hero Section */}
      <header className="relative bg-blue-900 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Smart Power for <span className="text-blue-400">Your Home</span> & Business
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Experience energy independence with Nigeria's leading solar installation experts. 
            High-quality systems designed for longevity and maximum efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 shadow-xl">
              Start Your Journey <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-lg font-bold text-lg transition">
              View Case Studies
            </button>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="bg-slate-50 py-10 border-b">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-blue-800">25 YEAR WARRANTY</div>
          <div className="flex items-center gap-2 font-bold text-blue-800">CERTIFIED INSTALLERS</div>
          <div className="flex items-center gap-2 font-bold text-blue-800">SMART MONITORING</div>
          <div className="flex items-center gap-2 font-bold text-blue-800">IN-HOUSE SUPPORT</div>
        </div>
      </section>

      {/* Features/Services */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Solar Solutions</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom System Design",
              desc: "Engineered specifically for your roof type, orientation, and energy consumption needs.",
              icon: <Zap className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Battery Storage",
              desc: "Keep your lights on 24/7. We integrate top-tier battery tech for night-time power and outages.",
              icon: <Battery className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Professional Install",
              desc: "Our in-house certified technicians handle everything from permits to final inspection.",
              icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
            }
          ].map((service, i) => (
            <div key={i} className="p-8 bg-white border border-blue-50 rounded-2xl hover:shadow-xl hover:border-blue-200 transition group">
              <div className="mb-4 p-3 bg-blue-50 w-fit rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a href="#" className="text-blue-700 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">The Simply Solar <span className="text-blue-600">Guarantee</span></h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We've been a solar construction company from day one. We use that experience to provide the 
              most comprehensive knowledge base and reliable systems in Nigeria.
            </p>
            <ul className="space-y-4">
              {[
                "25-Year Workmanship Warranty",
                "Power Performance Promise (90%+ Output)",
                "Seamless In-House Installation",
                "24/7 Remote System Monitoring"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 w-6 h-6" />
                  <span className="text-lg font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000" 
              alt="Installation" 
            />
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to save on your energy bills?</h2>
          <p className="text-blue-100 text-xl mb-10">
            Contact our solar advisors today for a free, no-pressure consultation and estimate.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition shadow-xl">
            Request My Free Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Sun className="text-blue-500 w-8 h-8" />
              <span className="text-xl font-bold text-white">SIMPLY SOLAR</span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading the transition to clean energy with reliable, affordable solar solutions 
              across the region.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Residential Solar</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Solar Maintenance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Battery Storage</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" /> +234 000 000 0000</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-blue-500" /> info@simplysolar.ng</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-blue-500 mt-1" /> Lagos, Nigeria</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border border-slate-700 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500 text-white"
              />
              <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} Simply Solar. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;