import { motion, Variants } from "framer-motion";
import { Puzzle, Zap, Key } from "lucide-react";
import portalSilhouette from "@/assets/portal-silhouette.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhatIsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="quests" className="py-16 md:py-24 lg:py-28 relative overflow-hidden bg-background">
      <motion.div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Mobile: Compact layout, Desktop: Original layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          
          {/* Left side - Title + Portal */}
          <div className="lg:col-span-5">
            {/* Mobile: Title + Image side by side */}
            <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
              {/* Title */}
              <motion.div className="flex-1 lg:mb-8" variants={itemVariants}>
                <h2 className="font-display text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] xl:text-[88px] text-foreground leading-[0.9] tracking-tight italic uppercase font-bold">
                  WHAT<br />
                  IS <motion.span 
                    className="text-primary"
                    animate={isVisible ? {
                      textShadow: [
                        "0 0 20px hsl(var(--primary) / 0.5)",
                        "0 0 40px hsl(var(--primary) / 0.8)",
                        "0 0 20px hsl(var(--primary) / 0.5)",
                      ],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    X PORTAL
                  </motion.span>?
                </h2>
                {/* Description - hidden on mobile */}
                <p className="hidden lg:block text-foreground/50 text-xs leading-relaxed max-w-[200px] mt-4 italic">
                  An immersive puzzle-based quest that challenges your logic and perception
                </p>
              </motion.div>
              
              {/* Portal Image - smaller on mobile */}
              <motion.div 
                className="w-[100px] sm:w-[140px] lg:w-full lg:max-w-[380px] flex-shrink-0"
                variants={itemVariants}
              >
                <div className="aspect-[3/4] relative">
                  {/* Portal glow behind */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse 45% 55% at 50% 50%, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.4) 35%, transparent 65%)",
                      filter: "blur(30px)",
                    }}
                    animate={isVisible ? {
                      opacity: [0.6, 0.85, 0.6],
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Silhouette image */}
                  <motion.img 
                    src={portalSilhouette} 
                    alt="Portal silhouette" 
                    className="relative z-10 w-full h-full object-contain"
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  
                  {/* Floor reflection */}
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-[30px] lg:w-[200px] lg:h-[50px]"
                    style={{
                      background: "radial-gradient(ellipse 100% 100% at 50% 0%, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.3) 50%, transparent 80%)",
                      filter: "blur(10px)",
                    }}
                    animate={isVisible ? {
                      opacity: [0.5, 0.8, 0.5],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-7 mt-4 lg:mt-0 lg:pt-8">
            {/* Mobile: Horizontal scroll, Desktop: Grid */}
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-5 lg:overflow-visible scrollbar-hide">
              {/* Top Card */}
              <motion.div 
                className="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-auto relative bg-[#222222] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/[0.06] cursor-pointer overflow-hidden lg:ml-auto lg:max-w-[320px]"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center mb-2 lg:mb-4">
                  <Puzzle className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
                </div>
                <p className="text-foreground/60 text-[10px] lg:text-xs leading-relaxed">
                  You'll find yourself inside a mysterious space where logic is your main tool and intuition helps you survive.
                </p>
              </motion.div>

              {/* Second Card with gradient */}
              <motion.div 
                className="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-auto relative bg-[#222222] rounded-xl lg:rounded-2xl p-4 lg:p-5 border border-white/[0.06] cursor-pointer overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Diagonal yellow gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent 0%, transparent 40%, hsl(var(--primary) / 0.12) 70%, hsl(var(--primary) / 0.25) 100%)",
                  }}
                />
                
                <div className="w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center mb-2 lg:mb-3 relative z-10">
                  <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                </div>
                <p className="text-foreground/55 text-[10px] lg:text-[11px] leading-relaxed relative z-10">
                  You're not entering a game — you're entering a different universe.
                </p>
              </motion.div>

              {/* Third Card */}
              <motion.div 
                className="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-auto bg-[#222222] rounded-xl lg:rounded-2xl p-4 lg:p-5 border border-white/[0.06] cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center mb-2 lg:mb-3">
                  <Key className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                </div>
                <p className="text-foreground/55 text-[10px] lg:text-[11px] leading-relaxed">
                  Every detail is key. Careful attention will determine your fate.
                </p>
              </motion.div>
            </div>
            
            {/* Desktop: Two card row */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-5 lg:mt-5">
              {/* These cards are shown in the horizontal scroll on mobile */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatIsSection;
