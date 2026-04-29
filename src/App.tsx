import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES, THEME } from './constants';
import { 
  HeroShield, 
  SmartCity, 
  CybercrimeTrendsChart, 
  FinancialFunnel,
  FourPillars, 
  DetectionPhase, 
  PreventionVault, 
  BehaviorBlueprint,
  ReportingChannels, 
  DefenseToolkit,
  CaseStudyVisual,
  VirusTotalDeepDive
} from './components/Visuals';
import { ChevronLeft, ChevronRight, Hash, Terminal } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = SLIDES[currentSlide];

  const renderVisual = (type: string) => {
    switch (type) {
      case 'hero-shield': return <HeroShield />;
      case 'smart-city': return <SmartCity />;
      case 'threat-landscape-chart': return <CybercrimeTrendsChart />;
      case 'financial-funnel': return <FinancialFunnel />;
      case 'four-pillars': return <FourPillars />;
      case 'detection-phase': return <DetectionPhase />;
      case 'prevention-vault': return <PreventionVault />;
      case 'behavior-blueprint': return <BehaviorBlueprint />;
      case 'reporting-channels': return <ReportingChannels />;
      case 'defense-toolkit': return <DefenseToolkit />;
      case 'case-study': return <CaseStudyVisual />;
      case 'virus-total': return <VirusTotalDeepDive />;
      default: return <div className="h-full flex items-center justify-center text-white/20"><Terminal size={48} /></div>;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-deep-space overflow-hidden font-sans selection:bg-neon-cyan/50 grid-bg">
      <div className="scanline" />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-voltage-green/10 blur-[100px] rounded-full" />
      </div>

      {/* Header HUD */}
      <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-50">
        <div className="flex gap-4">
          <div className="border-l-2 border-neon-cyan pl-3">
            <p className="text-[10px] text-neon-cyan tracking-[0.2em] uppercase font-bold">System Status</p>
            <p className="text-xs text-voltage-green flex items-center gap-2">
              <span className="w-2 h-2 bg-voltage-green rounded-full animate-pulse shadow-[0_0_8px_#39FF14]"></span> 
              SECURE NODE: 04.12.X
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-neon-cyan tracking-[0.2em] uppercase opacity-60">Command Level 04</p>
          <p className="text-xl font-mono text-white tracking-tighter">
            {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })} UTC
          </p>
        </div>
      </header>

      {/* Peripheral HUD Text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-40">
        <div className="writing-vertical text-[9px] text-gray-600 tracking-[0.5em] uppercase font-bold">Defense Protocol 0110</div>
        <div className="writing-vertical text-[9px] text-neon-cyan tracking-[0.5em] uppercase font-bold">Scanning Network...</div>
      </div>

      {/* Main Content Area */}
      <main className="w-full h-full flex items-center justify-center px-12 md:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-7xl h-full flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Left Panel: Content */}
            <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-tr-[40px] rounded-bl-[40px] shadow-2xl relative group">
                <div className="corner-accent-tl" />
                <div className="corner-accent-br" />
                
                <motion.h4 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-neon-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4"
                >
                  Module {String(slide.id).padStart(2, '0')} // Interactive Presentation
                </motion.h4>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 text-white uppercase"
                >
                  {slide.title.split(':').map((part, i) => (
                    <span key={i} className={i === 1 ? 'text-transparent block' : 'block'} style={i === 1 ? { WebkitTextStroke: '1px #00F2FF' } : {}}>
                      {part.trim()}
                    </span>
                  ))}
                </motion.h1>

                <div className="space-y-6 mb-8 max-w-lg">
                  {Array.isArray(slide.content) ? (
                    <ul className="space-y-3">
                      {slide.content.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                        >
                          <div className="mt-1.5 w-1 h-1 bg-neon-cyan rounded-full flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {slide.content}
                    </p>
                  )}

                  {/* Data Verification Sources */}
                  {slide.sources && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="pt-4 mt-6 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-2"
                    >
                      <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold w-full mb-1">Verification Sources</span>
                      {slide.sources.map((source, i) => (
                        <a 
                          key={i}
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-mono text-neon-cyan/60 hover:text-neon-cyan transition-colors flex items-center gap-1.5"
                        >
                          <Hash size={10} />
                          {source.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-voltage-green flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-voltage-green rounded-full shadow-[0_0_10px_#39FF14]"></div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-voltage-green font-bold">Presenter</p>
                    <p className="font-medium text-sm text-white tracking-tight">UMIKA TIWARI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Visual */}
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative">
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center"
               >
                 {renderVisual(slide.visualType)}
                 
                 {/* Decorative elements behind visual */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 -z-10">
                   <div className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] border border-neon-cyan/20 rounded-full animate-spin-slow" />
                   <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] border border-voltage-green/10 rounded-full animate-reverse-spin-slow" />
                 </div>
                 
                 {/* Floating Labels around visuals */}
                 <div className="absolute -right-4 top-1/4 hidden lg:block bg-white/5 backdrop-blur-md border border-neon-cyan/40 px-3 py-1 rounded text-[9px] font-mono text-neon-cyan animate-float">ENCRYPTION: ACTIVE</div>
                 <div className="absolute -left-4 bottom-1/4 hidden lg:block bg-white/5 backdrop-blur-md border border-voltage-green/40 px-3 py-1 rounded text-[9px] font-mono text-voltage-green animate-float" style={{ animationDelay: '1s' }}>FIREWALL: ENGAGED</div>
               </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer HUD elements */}
      <footer className="absolute bottom-0 left-0 w-full p-8 flex flex-col md:flex-row justify-between items-end z-50">
        <div className="flex flex-col sm:flex-row gap-8 items-end w-full lg:w-auto">
          {/* Case Study Mini-Panel */}
          <div className="w-full sm:w-64 bg-black/40 border border-white/5 p-4 rounded-lg backdrop-blur-sm hidden md:block">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[9px] uppercase tracking-tighter text-gray-500">Incident Archive</span>
              <span className="px-1.5 py-0.5 bg-neon-red/20 text-neon-red text-[8px] rounded uppercase font-bold tracking-widest">Active</span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed font-mono">
              <span className="text-neon-cyan">#COMPX-0{slide.id}:</span> {Array.isArray(slide.content) ? slide.content[0].substring(0, 80) : slide.content.substring(0, 80)}...
            </p>
          </div>

          {/* Analytics Bars */}
          <div className="w-64 hidden xl:block">
            <p className="text-[9px] uppercase tracking-tighter text-voltage-green mb-3 font-bold">Threat Mitigation Metrics</p>
            <div className="flex items-end gap-2 h-12">
              {[0.2, 0.4, 0.6, 0.8, 1].map((h, i) => (
                <div 
                  key={i}
                  className="w-full bg-neon-cyan/20 rounded-t transition-all duration-1000"
                  style={{ height: `${(i + 1) * 20}%`, backgroundColor: i === 4 ? '#00F2FF' : undefined, boxShadow: i === 4 ? '0 0 15px #00F2FF' : undefined }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1 h-0.5 w-48 mb-1">
              {SLIDES.map((_, i) => (
                <div key={i} className={`h-full flex-1 transition-all duration-300 ${i === currentSlide ? 'bg-neon-cyan scale-y-150' : 'bg-white/10'}`} />
              ))}
            </div>
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              SLIDE_IDX: 0x{currentSlide.toString(16).toUpperCase()} / {SLIDES.length}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:border-neon-cyan cursor-pointer transition-colors backdrop-blur-md"
          >
            <ChevronLeft size={18} className="text-gray-500 group-hover:text-neon-cyan transition-colors" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border-2 border-neon-cyan bg-neon-cyan/10 flex items-center justify-center group cursor-pointer hover:bg-neon-cyan/20 transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)]"
          >
            <ChevronRight size={24} className="text-neon-cyan" />
          </button>
        </div>
      </footer>

      {/* Decorative Corners */}
      <div className="absolute top-0 right-0 p-4 opacity-30 pointer-events-none">
        <div className="w-24 h-24 border-t border-r border-neon-cyan/30" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 opacity-30 pointer-events-none">
        <div className="w-24 h-24 border-b border-l border-voltage-green/30" />
      </div>
    </div>
  );
}
