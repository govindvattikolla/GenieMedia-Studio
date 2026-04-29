import React, { useState, useEffect, useRef } from 'react';

const Phone = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const section1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (section1Ref.current) {
        const rect = section1Ref.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight * 0.6)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate phone states based on scroll
  const getPhoneState = () => {
    if (scrollProgress < 0.3) return 0; // Initial - iOTA logo
    if (scrollProgress < 0.6) return 1; // Creative minds content
    if (scrollProgress < 0.7) return 2; // iOTIANS text
    if (scrollProgress < 0.8) return 3; // Search bar
    return 4; // Loading state
  };

  const phoneState = getPhoneState();

  // Phone movement: right → center → bottom-center between columns
  const getPhonePosition = () => {
    // Phase 1: Right to Center (0 to 0.5 scroll)
    if (scrollProgress < 0.2) {
      const phase1Progress = scrollProgress / 0.2;
      const startRight = 75; // Start at 8% from right
      const endLeft = 50; // End at center
      
      return {
        left: `${startRight + (phase1Progress * (endLeft - startRight))}%`,
        top: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s ease-out'
      };
    } 
    // Phase 2: Center to Bottom-Center (0.5 to 1.0 scroll)
    else {
      const phase2Progress = (scrollProgress - 0.5) / 0.5;
      
      return {
        left: '50%',
        top: `${115 + (phase2Progress * 70)}%`, // Move down from 50% to 85%
        transform: `translate(-50%, -50%) `,
        transition: 'all 0.3s ease-out'
      };
    }
  };

  const phonePosition = getPhonePosition();

  // Left text visibility
  const leftTextOpacity = scrollProgress < 0.5 ? 1 : 1 - ((scrollProgress - 0.5) * 2);
  
  // Right text visibility - appears when phone reaches bottom
  const rightTextOpacity = scrollProgress > 0.6 ? (scrollProgress - 0.6) * 2.5 : 0;

  return (
    <>
      <div className="bg-black text-white overflow-x-hidden ">
                {/* Section 1: Hero with Animated Phone */}
               <section 
            ref={section1Ref}
            className="relative  min-h-[200vh]"
                  >
        <div className="sticky top-0 w-full h-screen flex items-center justify-center ">
          {/* Content Container */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            
            {/* Left Column - Big B and Text */}
            <div 
              className="absolute left-4 md:left-8 lg:left-16 z-10"
              style={{
                top: scrollProgress > 0.5 ? '75%' : '50%',
                transform: 'translateY(-50%)',
                opacity: leftTextOpacity,
                transition: 'top 0.5s ease-out, opacity 0.3s ease-out'
              }}
            >
              <div className="flex items-start gap-2 md:gap-4 lg:gap-6">
                {/* Big Yellow B */}
                <div 
                  className="text-[80px] md:text-[140px] lg:text-[180px] xl:text-[220px] font-black leading-none select-none"
                  style={{
                    background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  B
                </div>
                
                {/* Text Stack */}
                <div className="flex flex-col justify-center space-y-1 md:space-y-2 lg:space-y-3">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Seen.</h1>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Heard.</h1>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Viral.</h1>
                </div>
              </div>
            </div>

            {/* Right Column Text - Appears at the end */}
           <div 
              className="absolute right-0 top-2/3 -translate-y-1/2 z-20 
                         w-[40%] flex flex-col gap-6 px-6"
              style={{
                opacity: scrollProgress > 0.55 ? (scrollProgress - 0.55) * 3 : 0,
                transform: scrollProgress > 0.55 
                  ? `translateY(-50%) translateX(0)` 
                  : `translateY(-50%) translateX(40px)`,
                transition: "opacity 0.4s ease-out, transform 0.4s ease-out"
              }}
            >
              <ServiceCard icon="📨" title="Brand/Product Launch" />
              <ServiceCard icon="🪙" title="Data Analytics & Insights" />
              <ServiceCard icon="📑" title="Performance Campaigns" />
            </div>
            

            {/* Animated Phone */}
            <div 
              className="absolute z-9999 "
              style={phonePosition}
            >
              <div className="relative w-[240px] h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px] ">
                {/* Phone Frame */}
                <div className="absolute inset-0 rounded-[36px] md:rounded-[40px] border-[3px] md:border-4 border-gray-700 bg-black overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-7 bg-black rounded-b-3xl z-20"></div>
                  
                  {/* Phone Screen Content */}
                  <div className="absolute inset-[6px] md:inset-2 bg-white rounded-[28px] md:rounded-[32px] overflow-hidden">
                    {/* State 0: iOTA Logo */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-500"
                      style={{ opacity: phoneState === 0 ? 1 : 0 }}
                    >
                      <div className="text-center">
                        <div className="text-white text-3xl md:text-4xl font-bold mb-2">iOTA</div>
                        <div className="text-[10px] md:text-xs text-gray-400 tracking-wider">A CREATIVE AGENCY</div>
                      </div>
                    </div>

                    {/* State 1: Creative Minds Content */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ opacity: phoneState === 1 ? 1 : 0 }}
                    >
                      <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                        <div className="absolute top-6 md:top-8 left-0 right-0 text-white text-lg md:text-xl font-bold px-4 md:px-6">iOTA</div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-8 text-center">
                          <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight">A bunch of creative minds without any limits.</p>
                          <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-300">
                            <p>20+ niches |</p>
                            <p>1000+ successful campaigns</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* State 2: iOTIANS */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-500"
                      style={{ opacity: phoneState === 2 ? 1 : 0 }}
                    >
                      <div className="text-black text-2xl md:text-3xl font-bold tracking-wider">iOTIANS</div>
                    </div>

                    {/* State 3: Search Bar */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-500"
                      style={{ opacity: phoneState === 3 ? 1 : 0 }}
                    >
                      <div className="w-4/5 bg-white rounded-full px-3 md:px-4 py-2 md:py-3 flex items-center gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-xs md:text-sm text-gray-400">marketplace creative assets</span>
                      </div>
                    </div>

                    {/* State 4: Loading */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-500"
                      style={{ opacity: phoneState === 4 ? 1 : 0 }}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-yellow-400 border-t-orange-500 rounded-full animate-spin"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div 
              className="absolute bottom-16 md:bottom-20 left-4 md:left-8 lg:left-16 z-10"
              style={{
                opacity: Math.max(0, 1 - scrollProgress * 1.8),
                transform: `translateY(${scrollProgress * 100}px)`,
                pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
              }}
            >
              <button className="group relative px-6 md:px-8 py-3 md:py-4 border-2 border-white rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-400">
                <span className="relative z-10 flex items-center gap-2 md:gap-3 text-sm md:text-base text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Get Your Free Brand Analysis
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-gray-400">Compete smarter, Not harder</p>
            </div>
          </div>

          {/* Contact Button - Fixed */}
          <button className="fixed bottom-6 md:bottom-8 right-6 md:right-8 bg-yellow-400 text-black px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 hover:scale-105 z-50 shadow-lg text-sm md:text-base">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Contact Us
          </button>
        </div>
      </section>

    </div>
      <h1 className='  color-red-500 p-40 -mt-80 '>Another secton</h1>

   
   </>
  );
};

const ServiceCard = ({ icon, title, delay }) => {
  return (
    <div 
      className="group relative bg-black border-2 border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-yellow-400 transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}ms backwards`
      }}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default Phone;