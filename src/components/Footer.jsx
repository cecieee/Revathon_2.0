import React from 'react';
import RobotFooter from './RobotFooter';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4 border-t border-gray-800 relative z-30">
      {/* Mobile Robot - Positioned at top of footer (below Register section) */}
      <div className="md:hidden flex justify-center -mt-32 mb-4">
        <RobotFooter fromBottom={true} />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-primary tracking-tighter">
              REVATHON <span className="text-primary">2.0</span>
            </h2>
            <p className="text-xs sm:text-base md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8 border-l-0 md:border-l-4 border-primary pl-0 md:pl-4 mt-2 md:mt-0 leading-relaxed font-mono tracking-wider">
              <span className="inline-block text-secondary" style={{ transform: 'scaleX(-1)', display: 'inline-block' }}>REVERSE</span>{' '}
              THE FLOW <br />
              <span className="text-white">REVEAL</span>{' '}
              <span className="text-primary font-bold">
                THE LOGIC
              </span>
            </p>
            <div className="pt-2"></div>
          </div>

          <div className="space-y-4 text-center">
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-4" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
              Connect With Us
            </h3>

            <div className="flex flex-col items-center gap-4">
              <a href="mailto:rassbccec@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-primary transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-xs font-sans">rassbccec@gmail.com</span>
              </a>

              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/ieeerascec/" className="p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                <a href="https://www.linkedin.com/company/cecieee/" className="p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                <a href="https://www.facebook.com/IEEECEC" className="p-2 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Coordinators */}
            <div className="flex flex-col items-center gap-1.5 mt-4 text-[11px] font-sans tracking-wide transition transform duration-300 hover:scale-110">
              <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default">
                <span className="text-primary font-bold hover:text-white">Ashna Sunil(Chairperson)</span>
                <span>+91 9188821690</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default">
                <span className="text-primary font-bold hover:text-white">Rishikesh J (Vice Chairperson)</span>
                <span>+91 94967 70497</span>
              </div>
            </div>
          </div>


          <div className="relative min-h-[120px] hidden md:flex items-end justify-center md:justify-end">
            <RobotFooter />
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-[10px] font-sans">
            &copy; {new Date().getFullYear()} IEEE Student Branch CEC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
