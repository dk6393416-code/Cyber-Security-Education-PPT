import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Cloud, Smartphone, Lock, AlertTriangle, Key, Terminal, Briefcase, Database, Zap, Globe, MessageSquare } from 'lucide-react';

const Cuboid = ({ size = 100, color = '#00F2FF' }) => (
  <div className="relative" style={{ width: size, height: size, transformStyle: 'preserve-3d' }}>
    {/* Front */}
    <div className="absolute inset-0 border border-white/20" style={{ transform: 'translateZ(50px)', backgroundColor: `${color}30` }} />
    {/* Back */}
    <div className="absolute inset-0 border border-white/20" style={{ transform: 'translateZ(-50px)', backgroundColor: `${color}30` }} />
    {/* Left */}
    <div className="absolute inset-0 border border-white/20" style={{ transform: 'rotateY(90deg) translateZ(-50px)', backgroundColor: `${color}40`, width: '100px' }} />
    {/* Right */}
    <div className="absolute inset-0 border border-white/20" style={{ transform: 'rotateY(90deg) translateZ(50px)', backgroundColor: `${color}40`, width: '100px' }} />
    {/* Top */}
    <div className="absolute inset-0 border border-white/20" style={{ transform: 'rotateX(90deg) translateZ(50px)', backgroundColor: `${color}50`, height: '100px' }} />
    {/* Bottom */}
    <div className="absolute inset-0 border border-white/20" style={{ transform: 'rotateX(90deg) translateZ(-50px)', backgroundColor: `${color}50`, height: '100px' }} />
  </div>
);

export const HeroShield = () => (
  <div className="isometric-scene flex items-center justify-center h-full">
    <motion.div 
      className="relative"
      animate={{ rotateY: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute -inset-24 rounded-full border-2 border-neon-cyan/20 animate-pulse" />
      <div className="absolute -inset-16 rounded-full border-2 border-voltage-green/20 animate-pulse" style={{ animationDelay: '1s' }} />
      <Shield className="w-64 h-64 text-neon-cyan drop-shadow-[0_0_30px_rgba(0,242,255,0.8)]" />
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Lock className="w-16 h-16 text-voltage-green" />
      </motion.div>
    </motion.div>
  </div>
);

export const SmartCity = () => (
  <div className="isometric-scene h-full flex items-center justify-center">
    <div className="isometric-card relative w-96 h-96 border border-neon-cyan/30 bg-neon-cyan/5">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 p-4">
        {[...Array(16)].map((_, i) => (
          <motion.div 
            key={i}
            className="bg-neon-cyan/20 border border-neon-cyan/40"
            initial={{ height: 0 }}
            animate={{ height: Math.random() * 80 + 20 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.1 }}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="w-full h-full">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="rgba(0,242,255,0.2)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute -top-10 -left-10 w-[calc(100%+80px)] h-[calc(100%+80px)] border-t border-l border-neon-cyan/10 rounded-tl-[100px]" />
    </div>
  </div>
);

const StaggeredBar = (props: any) => {
  const { x, y, width, height, index } = props;
  return (
    <motion.rect
      x={x}
      y={y + height}
      width={width}
      height={0}
      fill="#00F2FF"
      initial={{ height: 0, y: y + height }}
      animate={{ height: height, y: y }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2 + 0.5,
        ease: "easeOut" 
      }}
      rx={4}
      ry={4}
    />
  );
};

export const CybercrimeTrendsChart = () => {
  const data = [
    { year: "2018", cases: 0.86 },
    { year: "2019", cases: 1.16 },
    { year: "2020", cases: 2.95 },
    { year: "2021", cases: 5.49 },
    { year: "2022", cases: 7.08 },
    { year: "2023", cases: 8.15 },
    { year: "2024", cases: 9.22 },
    { year: "2025", cases: 10.29 },
    { year: "2026", cases: 11.36 },
    { year: "2027", cases: 12.43 },
    { year: "2028", cases: 13.82 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-full flex flex-col items-center justify-center p-4 bg-black/20 rounded-xl relative"
    >
      <div className="flex w-full items-start gap-8 mb-4">
        {/* Skyrocket Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="hidden md:flex flex-shrink-0 w-24 h-24 rounded-full border-2 border-neon-cyan/40 bg-neon-cyan/5 items-center justify-center relative"
        >
          <div className="absolute inset-0 animate-pulse border-2 border-neon-cyan/20 rounded-full" />
          <div className="flex flex-col items-center">
             <Cloud className="text-neon-cyan w-8 h-8" />
             <Zap className="text-voltage-green w-4 h-4 -mt-2 animate-bounce" />
             <Database className="text-neon-cyan w-8 h-8 mt-1" />
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.h4
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white text-xl font-bold tracking-tight mb-1"
          >
            Cybercrime Expected To Skyrocket
          </motion.h4>
          <p className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest leading-none">
            Estimated annual cost of cybercrime worldwide (Trillion USD)
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
          <XAxis dataKey="year" stroke="#444" fontSize={9} tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "rgba(0, 242, 255, 0.05)" }}
            contentStyle={{ backgroundColor: "#0B0E14", border: "1px solid #00F2FF", borderRadius: "8px" }}
            itemStyle={{ color: "#00F2FF", fontSize: "12px", fontWeight: "bold" }}
          />
          <Bar
            dataKey="cases"
            barSize={35}
            shape={<StaggeredBar />}
            isAnimationActive={false}
          >
            {/* Custom Labels on top of bars */}
            {data.map((entry, index) => (
              <motion.text
                key={`label-${index}`}
                x={0} // Managed by Recharts internally but we can use label prop or this pattern with caution
                y={0}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 1.2 }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {/* Values overlay for precise positioning since standard Bar labels can be finicky in motion */}
      <div className="absolute bottom-[65px] left-0 right-0 flex justify-center gap-[10px] pointer-events-none px-[60px]">
        {data.map((entry, i) => (
           <motion.div 
            key={i} 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 + 0.8 }}
           >
             <span className="text-[8px] font-bold text-white mb-1">{entry.cases}</span>
           </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-between mt-4">
        <div className="text-[8px] text-white/30 font-mono italic">Source: Statista Market Insights (Aggregated Data)</div>
        <div className="text-[8px] text-voltage-green font-mono uppercase tracking-widest">+1500% GROWTH CYCLE</div>
      </div>
    </motion.div>
  );
};

export const FinancialFunnel = () => (
  <div className="isometric-scene h-full w-full flex items-center justify-center">
    <div className="relative flex flex-col items-center">
      {/* Funnel Sections */}
      {[
        { label: 'INVESTMENT FRAUD (76%)', width: 'w-64', color: 'bg-neon-red/40', value: '₹17.1k Cr', info: 'Fake crypto apps, ponzi schemes, and stock tips.' },
        { label: 'DIGITAL ARREST', width: 'w-48', color: 'bg-neon-red/30', value: '₹2.4k Cr', info: 'Impersonating police/CBI to extort "clearance" fees.' },
        { label: 'PHISHING/OTHER', width: 'w-32', color: 'bg-neon-red/20', value: '₹2.9k Cr', info: 'SMS hijacking, fake lottery wins, and job scams.' },
        { label: 'TOTAL LOSS: ₹22,495 Cr', width: 'w-16', color: 'bg-neon-red', value: '', info: 'Total reported financial drain in FY 2025.' },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className={`${item.width} h-12 ${item.color} border border-neon-red/50 relative flex items-center justify-center mb-1 group cursor-help overflow-hidden`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
        >
          <span className="text-[8px] font-black tracking-tighter text-white z-10">{item.label}</span>
          <div className="absolute right-2 opacity-40 text-[7px] font-mono">{item.value}</div>
          
          {/* Custom Informative Tooltip */}
          <div className="absolute top-0 left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            <div className="glass p-3 rounded-tr-lg rounded-br-lg border-l-2 border-neon-red w-48">
              <p className="text-[9px] font-mono text-neon-red uppercase mb-1">Impact Context</p>
              <p className="text-[10px] leading-tight text-white/80">{item.info}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="mt-8 text-neon-red font-mono text-[10px] animate-pulse uppercase tracking-[0.3em]">Capital Drain Detected</div>
    </div>
  </div>
);

export const FourPillars = () => (
  <div className="grid grid-cols-2 gap-8 h-full p-8 items-center">
    {[
      { icon: Terminal, label: 'Hacking', color: '#00F2FF', desc: 'Exploiting code vulnerabilities or weak credentials.' },
      { icon: Cloud, label: 'Phishing', color: '#39FF14', desc: 'Deceptive communication to harvest user data.' },
      { icon: Database, label: 'Ransomware', color: '#FF1439', desc: 'Asymmetric encryption of data for financial extortion.' },
      { icon: Key, label: 'Identity Theft', color: '#FFD700', desc: 'Credential stuffing using leaked database accounts.' },
    ].map((pillar, i) => (
      <motion.div 
        key={i}
        className="glass p-6 rounded-lg flex flex-col items-center justify-center text-center relative group cursor-help"
        whileHover={{ scale: 1.05, rotateY: 10 }}
      >
        <pillar.icon className="w-12 h-12 mb-4" style={{ color: pillar.color }} />
        <span className="font-mono text-[10px] uppercase tracking-widest">{pillar.label}</span>
        
        {/* Detail Tooltip */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-4 transition-all pointer-events-none z-50">
          <div className="glass p-2 rounded-lg border-b-2" style={{ borderColor: pillar.color }}>
            <p className="text-[9px] text-white/70 leading-tight">{pillar.desc}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export const DetectionPhase = () => (
  <div className="flex items-center justify-center h-full p-8">
    <div className="relative w-48 h-80 bg-gray-900 border-2 border-white/20 rounded-[2rem] p-4 shadow-2xl">
      <div className="w-full h-full bg-black/40 rounded-[1.5rem] p-2 relative overflow-hidden">
        <div className="text-[8px] font-mono text-neon-red mb-2 px-2 uppercase">Warning Alerts</div>
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="w-full h-12 bg-neon-red/20 border border-neon-red/40 rounded-md mb-2 flex items-center px-2 gap-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.5 }}
          >
            <AlertTriangle size={12} className="text-neon-red" />
            <div className="flex flex-col gap-1">
              <div className="h-1.5 w-16 bg-neon-red/30 rounded" />
              <div className="h-1 w-10 bg-neon-red/20 rounded" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const PreventionVault = () => (
  <div className="isometric-scene flex items-center justify-center h-full">
    <motion.div 
      className="relative w-64 h-64 border-4 border-voltage-green/50 bg-voltage-green/5 flex items-center justify-center"
      style={{ transform: 'rotateY(45deg) rotateX(20deg)' }}
    >
      <div className="absolute inset-0 border-2 border-voltage-green/20" style={{ transform: 'translateZ(20px)' }} />
      <div className="flex flex-col items-center gap-4">
        <Lock className="w-24 h-24 text-voltage-green" />
        <div className="flex gap-2">
           <Shield className="w-8 h-8 text-neon-cyan" />
           <Key className="w-8 h-8 text-neon-cyan" />
        </div>
      </div>
    </motion.div>
  </div>
);

export const BehaviorBlueprint = () => (
  <div className="isometric-scene h-full flex items-center justify-center">
    <div className="relative">
      <div className="absolute inset-0 rounded-full border-2 border-voltage-green/20 animate-ping" />
      <div className="w-48 h-48 rounded-full border-4 border-voltage-green/40 flex items-center justify-center bg-voltage-green/5">
        <Smartphone className="w-24 h-24 text-voltage-green" />
      </div>
      <div className="absolute -top-4 -right-4 glass px-3 py-1 text-[10px] text-voltage-green font-mono border-voltage-green/30">ZERO TRUST ACTIVE</div>
    </div>
  </div>
);

export const VirusTotalDeepDive = () => (
  <div className="isometric-scene flex flex-col items-center justify-center h-full">
    <div className="relative group cursor-help">
      <motion.div
        animate={{ rotateZ: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-48 h-48 border-2 border-neon-cyan/30 rounded-lg flex items-center justify-center relative p-4 bg-neon-cyan/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1)_0%,transparent_70%)]" />
        <Database className="w-24 h-24 text-neon-cyan opacity-20" />
        <Briefcase className="w-16 h-16 text-neon-cyan" />
        {/* Scanning Beam */}
        <motion.div 
          className="absolute left-0 w-full h-1 bg-neon-cyan/60 shadow-[0_0_10px_#00F2FF]"
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      <div className="absolute -top-8 -right-8 w-20 h-20 border border-voltage-green/40 rounded-full flex items-center justify-center glass">
        <span className="text-[10px] font-mono text-voltage-green font-black">70+ AV</span>
      </div>

      {/* Deep Dive Tooltip */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
        <div className="glass p-3 rounded-lg border-t-2 border-neon-cyan">
          <p className="text-[10px] leading-tight text-white/80">
            Multi-Engine Scanning: VirusTotal aggregates results from vendors like Kaspersky, Symantec, and Google.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const DefenseToolkit = () => (
  <div className="grid grid-cols-2 gap-4 p-8 h-full items-center">
    <div className="glass p-6 rounded-xl border-t-2 border-neon-cyan flex flex-col items-center gap-3 relative group cursor-help">
      <Globe className="text-neon-cyan w-10 h-10" />
      <span className="text-[10px] font-mono uppercase text-center">Have I Been Pwned Check</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-neon-cyan/10 backdrop-blur-sm transition-all flex items-center justify-center p-4 text-center rounded-xl">
        <p className="text-[9px] text-white font-mono">Verifies if your email or phone number leaked in global corporate data breaches.</p>
      </div>
    </div>
    <div className="glass p-6 rounded-xl border-t-2 border-voltage-green flex flex-col items-center gap-3 relative group cursor-help">
      <Shield className="text-voltage-green w-10 h-10" />
      <span className="text-[10px] font-mono uppercase text-center">Password Auditor</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-voltage-green/10 backdrop-blur-sm transition-all flex items-center justify-center p-4 text-center rounded-xl">
        <p className="text-[9px] text-white font-mono">Checks password complexity against "Brute Force" dictionaries and known leakers.</p>
      </div>
    </div>
  </div>
);

export const ReportingChannels = () => (
  <div className="grid grid-cols-1 gap-4 h-full p-8 items-center">
    {[
      { label: 'CERT-In', desc: 'National Nodal Agency', color: '#00F2FF', help: 'Handles massive denial-of-service and state-level hacking alerts.' },
      { label: 'Swachhta Kendra', desc: 'Malware Analysis', color: '#39FF14', help: 'Provides free tools to remove botnets and "Zombie" malware from PCs.' },
      { label: 'Cyber Crime Portal', desc: 'Official Govt Portal', color: '#FFD700', help: 'Primary portal for filing FIRs and reporting financial fraud directly to authorities.' },
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-4 glass p-4 rounded-r-full border-l-4 relative group cursor-help" style={{ borderColor: item.color }}>
        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center">
          <Terminal size={20} style={{ color: item.color }} />
        </div>
        <div>
          <div className="font-bold text-sm tracking-tight">{item.label}</div>
          <div className="text-[9px] font-mono opacity-50 uppercase tracking-widest">{item.desc}</div>
        </div>
        
        {/* Help Tooltip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-4 w-48 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
          <div className="glass p-3 rounded-lg border-l-2" style={{ borderColor: item.color }}>
            <p className="text-[10px] leading-tight text-white/90">{item.help}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const CaseStudyVisual = () => (
  <div className="h-full flex items-center justify-center">
    <div className="relative flex items-center justify-center">
      <MessageSquare className="w-48 h-48 text-[#25D366] opacity-30" />
      <motion.div 
        className="absolute"
        animate={{ scale: [0.8, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Lock className="w-24 h-24 text-neon-red drop-shadow-[0_0_15px_rgba(255,20,57,0.8)]" />
      </motion.div>
      <div className="absolute -bottom-4 right-0 glass px-4 py-2 rounded-full border-neon-red/50">
        <span className="text-[10px] text-neon-red font-mono font-bold uppercase tracking-widest">Breach 0xAF4</span>
      </div>
    </div>
  </div>
);
