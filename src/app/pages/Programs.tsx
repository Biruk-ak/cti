import { motion } from 'motion/react';

export function Programs() {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#123458] to-[#1a4570] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#D9A20E]/20 backdrop-blur-sm px-4 py-2 rounded-full text-[#D9A20E] mb-4 border border-[#D9A20E]/30">
              <span className="font-semibold">PROGRAMS & ACTIVITIES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              What Kids <span className="text-[#D9A20E]">Actually Do</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Age-based programs designed to build real tech skills through hands-on projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ProgramCard
              ageGroup="Ages 6-9"
              title="Junior Explorers"
              activities={[
                "Build simple games with Scratch",
                "Create animations and stories",
                "Introduction to robotics basics",
                "Digital art and design",
                "Problem-solving challenges"
              ]}
              outcome="Build your first game and robot"
              delay={0}
            />
            <ProgramCard
              ageGroup="Ages 10-13"
              title="Tech Builders"
              activities={[
                "Python programming fundamentals",
                "Web development basics (HTML/CSS)",
                "Advanced robotics projects",
                "3D design and printing",
                "App development introduction"
              ]}
              outcome="Create a working website and robot"
              delay={0.1}
            />
            <ProgramCard
              ageGroup="Ages 14-16"
              title="Digital Innovators"
              activities={[
                "Advanced coding (Python, JavaScript)",
                "Mobile app development",
                "AI and machine learning intro",
                "Tech entrepreneurship",
                "Real-world project development"
              ]}
              outcome="Build real apps and launch projects"
              delay={0.2}
            />
          </div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#123458] to-[#1a4570] rounded-3xl p-8 md:p-12 text-white mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Flexible Schedule Options
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#D9A20E] font-bold mb-2 text-xl">Weekend Classes</div>
                <div className="text-sm mb-1">Saturdays & Sundays</div>
                <div className="text-sm opacity-80">9AM - 12PM or 2PM - 5PM</div>
                <div className="mt-4 text-xs text-white/60">Perfect for busy families</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#D9A20E] font-bold mb-2 text-xl">After School</div>
                <div className="text-sm mb-1">Monday - Friday</div>
                <div className="text-sm opacity-80">4PM - 6PM</div>
                <div className="mt-4 text-xs text-white/60">Learn after regular school</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-[#D9A20E] font-bold mb-2 text-xl">Holiday Camps</div>
                <div className="text-sm mb-1">School Breaks</div>
                <div className="text-sm opacity-80">Full-day intensive programs</div>
                <div className="mt-4 text-xs text-white/60">Deep dive into projects</div>
              </div>
            </div>
          </motion.div>

          {/* Why Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Why CTI Junior is <span className="text-[#D9A20E]">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-red-50 border-4 border-red-300 rounded-3xl p-8">
                <div className="text-red-600 font-bold text-xl mb-4">❌ Traditional Approach</div>
                <ul className="space-y-3 text-[#123458]/70">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Kids passively consume content on screens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Learning through boring lectures and theory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>No real-world application or outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>One-size-fits-all generic curriculum</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#D9A20E]/10 border-4 border-[#D9A20E] rounded-3xl p-8">
                <div className="text-[#D9A20E] font-bold text-xl mb-4">✓ CTI Junior Way</div>
                <ul className="space-y-3 text-[#123458]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D9A20E] mt-1">✓</span>
                    <span className="font-medium">Kids actively CREATE games, robots, and apps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D9A20E] mt-1">✓</span>
                    <span className="font-medium">100% hands-on, project-based learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D9A20E] mt-1">✓</span>
                    <span className="font-medium">Take home real projects you built yourself</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D9A20E] mt-1">✓</span>
                    <span className="font-medium">Personalized learning paths for each child</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({
  ageGroup,
  title,
  activities,
  outcome,
  delay
}: {
  ageGroup: string;
  title: string;
  activities: string[];
  outcome: string;
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="bg-white border-2 border-black rounded-2xl p-8 h-full transition-all group-hover:shadow-[8px_8px_0px_0px_#D9A20E]">
        <div className="inline-block bg-[#D9A20E] text-[#123458] px-4 py-2 rounded-full font-bold text-sm mb-4">
          {ageGroup}
        </div>
        <h3 className="text-[#123458] text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h3>
        <div className="space-y-3 mb-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#D9A20E] rounded-full mt-2 flex-shrink-0" />
              <p className="text-[#123458]/70 text-sm">{activity}</p>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="text-xs text-[#123458]/60 mb-1 uppercase tracking-wider">What They'll Build</div>
          <div className="text-[#123458] font-bold">{outcome}</div>
        </div>
      </div>
    </motion.div>
  );
}
