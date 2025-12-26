import React from "react";
import TechButton from "../../components/Button";

const BarcodeScanner = () => (
  <div className="relative w-full h-12 flex flex-col items-center justify-center overflow-hidden">
    {/* Barcode Lines */}
    <div className="flex w-full h-full justify-between px-2">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="bg-black h-full"
          style={{
            width: Math.random() > 0.5 ? '4px' : '2px',
            opacity: Math.random() > 0.3 ? 1 : 0
          }}
        />
      ))}
    </div>
    {/* Scanning Red Line */}
    <div className="absolute top-0 w-[2px] h-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-scan"></div>
  </div>
);

const BrutalistCard = ({ title, price, subtitle, color }) => {
  const isSecondary = color === 'secondary';
  const accentColor = isSecondary ? 'text-secondary' : 'text-primary';
  const bgColor = isSecondary ? 'bg-secondary' : 'bg-primary';

  return (
    <div className="group w-[85%] max-w-[320px] md:w-full md:max-w-[420px] mx-auto flex flex-col md:flex-row bg-black transition-transform duration-300 hover:-translate-y-2 shadow-2xl">
      <div className="w-full md:w-[30%] bg-white text-black flex flex-row md:flex-col justify-between p-3 relative border-b-2 md:border-b-0 md:border-r-2 border-dashed border-black min-h-[80px] md:min-h-[200px]">
        <div className="absolute -bottom-[10px] left-[-10px] md:top-[-10px] md:right-[-10px] md:left-auto w-5 h-5 bg-[#0b0b0b] rounded-full z-10 hidden md:block"></div>
        <div className="absolute -bottom-[10px] right-[-10px] md:bottom-[-10px] md:right-[-10px] w-5 h-5 bg-[#0b0b0b] rounded-full z-10"></div>
        <div className="absolute -bottom-[10px] left-[-10px] w-5 h-5 bg-[#0b0b0b] rounded-full z-10 md:hidden"></div>

        <div className="flex flex-col gap-1 z-10">
          <span className="text-[10px] font-bold font-mono tracking-tighter leading-tight">
            31 JAN<br />01 FEB
          </span>
          <span className="text-[8px] font-bold font-mono opacity-80 leading-tight mt-1">
            CEC<br />CHENGANNUR
          </span>
        </div>

        <div className="mt-0 md:mt-auto relative z-10 flex flex-col items-end md:items-center justify-center">
          <span className="hidden md:block text-[8px] font-mono mb-1 text-center font-bold">SCAN ME</span>
          <div className="w-24 md:w-full">
            <BarcodeScanner />
          </div>
          <div className="hidden md:block text-[8px] font-mono text-center mt-1 font-bold tracking-widest">
            2026
          </div>
        </div>
      </div>

      <div className="w-full md:w-[70%] bg-zinc-900 border border-zinc-800 border-t-0 md:border-l-0 md:border-t p-4 md:p-5 flex flex-col relative overflow-hidden min-h-[160px] md:min-h-[200px]">

        <div className={`absolute top-[-20px] right-[-20px] w-16 h-16 rounded-full border-4 border-dashed ${isSecondary ? 'border-secondary/20' : 'border-primary/20'}`}></div>
        <div className="absolute bottom-4 right-4 flex gap-1">
          <div className={`w-2 h-2 ${bgColor}`}></div>
          <div className="w-2 h-2 bg-white"></div>
          <div className={`w-2 h-2 ${bgColor}`}></div>
        </div>

        <div className="relative z-10 mb-2">
          <h3 className={`text-2xl md:text-3xl font-black uppercase leading-[0.85] font-mechsuit text-white mb-2 break-words`}>
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? accentColor : 'text-white'}>
                {word} {' '}
                {i === 0 && <br className="hidden md:block" />}
              </span>
            ))}
          </h3>
          <p className="inline-block bg-white text-black text-[8px] md:text-[10px] font-bold px-2 py-0.5 mb-2 uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        <div className="mt-auto mb-2 flex items-end justify-between border-t border-white/10 pt-3">
          <span className="text-3xl md:text-4xl font-black text-white font-mechsuit tracking-tighter">
            ₹{price}
          </span>
          <TechButton
            size="sm"
            onClick={() => window.open("https://forms.gle/z2ow4dzWqWZJ63o86", "_blank")}
            className={`!py-1.5 !px-3 !text-[10px] md:!text-xs font-bold uppercase transition-colors rounded-none ${isSecondary ? '!bg-secondary !text-black hover:!bg-white' : '!bg-primary !text-white hover:!bg-white hover:!text-black'}`}
          >
            Register
          </TechButton>
        </div>
      </div>
    </div>
  );
};

export default function RegisterNow() {
  return (
    <section
      id="register"
      className="relative flex flex-col items-center justify-center min-h-[80vh] bg-transparent py-12 md:py-24"
    >
      <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 blur-[80px] md:blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">

        <div className="mb-12 md:mb-16 text-center">
          <h2
            className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none"
            style={{ fontFamily: "Mechsuit" }}
          >
            GET<span className="block mt-2 text-primary">TICKETS</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-[900px] mx-auto">
          <BrutalistCard title="IEEE RAS MEMBERS" subtitle="Members Only" price="100" color="secondary" />
          <BrutalistCard title="IEEE MEMBERS" subtitle="Standard Access" price="150" color="primary" />
          <BrutalistCard title="NON IEEE MEMBERS" subtitle="Open Access" price="200" color="secondary" />
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { left: 0%; }
          50% { left: 100%; }
          100% { left: 0%; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
