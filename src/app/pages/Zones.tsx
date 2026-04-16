import React from 'react';
import { motion } from 'motion/react';
import { Code, Cpu, Palette, Brain } from 'lucide-react';

import imgDigitalMarketing from "figma:asset/1c63d0734d330886e8f6e945d940a0eb8ed3225f.png";
import imgBasicMarketing from "figma:asset/21609997b2b1b5544377a435abcfb0825cd4dc3e.png";
import imgSEO from "figma:asset/21ac6af7d82d2465bd5b6dc54c72a3cd39866473.png";

export function Zones() {
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
              <span className="font-semibold">EXPERIENCE ZONES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Four Amazing Zones for{' '}
              <span className="text-[#D9A20E]">Young Innovators</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Each zone is designed to spark creativity and build real-world tech skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zones Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ZoneCard
              icon={<Code className="w-12 h-12" />}
              title="Coding Playground"
              description="Build games, apps, and websites using Scratch, Python, and more"
              features={[
                "Learn Scratch for visual programming",
                "Master Python fundamentals",
                "Create interactive games",
                "Build real websites with HTML/CSS",
                "Develop problem-solving skills"
              ]}
              image={imgBasicMarketing}
              color="#123458"
              delay={0}
            />
            <ZoneCard
              icon={<Cpu className="w-12 h-12" />}
              title="Robotics Zone"
              description="Design and program robots that move, think, and solve problems"
              features={[
                "Build robots from scratch",
                "Program robot movements",
                "Sensors and automation",
                "Team-based challenges",
                "Real-world engineering concepts"
              ]}
              image={imgDigitalMarketing}
              color="#D9A20E"
              delay={0.1}
            />
            <ZoneCard
              icon={<Palette className="w-12 h-12" />}
              title="Creative Tech Studio"
              description="Create animations, design graphics, and build digital art"
              features={[
                "Digital illustration & design",
                "2D/3D animation",
                "Video editing basics",
                "Graphic design tools",
                "Creative storytelling"
              ]}
              image={imgSEO}
              color="#123458"
              delay={0.2}
            />
            <ZoneCard
              icon={<Brain className="w-12 h-12" />}
              title="AI Lab"
              description="Explore artificial intelligence and machine learning basics"
              features={[
                "Introduction to AI concepts",
                "Machine learning basics",
                "Train simple AI models",
                "Chatbot creation",
                "Explore future technologies"
              ]}
              image={imgBasicMarketing}
              color="#D9A20E"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#123458] to-[#1a4570] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Explore Our <span className="text-[#D9A20E]">Tech Zones?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Book a free visit and let your child experience hands-on learning in all four zones
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#D9A20E] text-[#123458] px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#D9A20E]/50 transition-all"
            >
              Schedule Your Visit
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ZoneCard({
  icon,
  title,
  description,
  features,
  image,
  color,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-8">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <h3 className="text-[#123458] text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h3>
          <p className="text-[#123458]/70 text-lg mb-6 leading-relaxed">
            {description}
          </p>
          <div className="space-y-2">
            <div className="text-[#123458] font-semibold text-sm mb-3">What Kids Learn:</div>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#D9A20E] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#123458]/70 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
