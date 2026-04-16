import { motion } from 'motion/react';
import imgStudent from "figma:asset/476d63f0eddf6bfef7cf10c287ae1b2e29bc8b53.png";

export function About() {
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
              <span className="font-semibold">ABOUT CTI JUNIOR</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Where Kids Become{' '}
              <span className="text-[#D9A20E]">Creators</span>,
              <br />
              Not Just Consumers
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Ethiopia's premier technology education center for young minds
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Our Mission
              </h2>
              <p className="text-[#123458]/70 text-lg mb-6 leading-relaxed">
                CTI Junior is Ethiopia's premier technology education center for young minds. We transform curious kids into confident creators through hands-on learning in coding, robotics, AI, and digital design.
              </p>
              <p className="text-[#123458]/70 text-lg mb-8 leading-relaxed">
                Our vision is simple: <span className="text-[#123458] font-semibold">empower the next generation with skills that matter</span>. In a world driven by technology, we give kids the tools to shape their own future.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#123458] rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2 text-[#D9A20E]" style={{ fontFamily: 'var(--font-display)' }}>500+</div>
                  <div className="text-sm">Young Innovators</div>
                </div>
                <div className="bg-[#D9A20E] rounded-2xl p-6 text-[#123458]">
                  <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>4</div>
                  <div className="text-sm font-semibold">Tech Zones</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={imgStudent}
                  alt="Kids learning at CTI Junior"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D9A20E] rounded-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#123458] rounded-3xl -z-10" />
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              What Makes Us <span className="text-[#D9A20E]">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Hands-On Learning"
              description="No boring lectures. Kids learn by creating real projects—games they code, robots they build, apps they design."
              delay={0}
            />
            <ValueCard
              title="Expert Mentors"
              description="Our instructors are passionate tech professionals who love working with kids and making learning fun."
              delay={0.1}
            />
            <ValueCard
              title="Personalized Paths"
              description="Every child learns at their own pace with personalized attention and tailored learning experiences."
              delay={0.2}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white border-2 border-black rounded-2xl p-8 transition-all hover:shadow-[8px_8px_0px_0px_#D9A20E]"
    >
      <h3 className="text-[#123458] text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h3>
      <p className="text-[#123458]/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
