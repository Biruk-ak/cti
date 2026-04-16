import { motion } from 'motion/react';
import imgBasicMarketing from "figma:asset/21609997b2b1b5544377a435abcfb0825cd4dc3e.png";
import imgDigitalMarketing from "figma:asset/1c63d0734d330886e8f6e945d940a0eb8ed3225f.png";
import imgSEO from "figma:asset/21ac6af7d82d2465bd5b6dc54c72a3cd39866473.png";
import imgStudent from "figma:asset/476d63f0eddf6bfef7cf10c287ae1b2e29bc8b53.png";

export function Gallery() {
  const images = [
    { src: imgBasicMarketing, title: "Coding Workshop", category: "Programming" },
    { src: imgDigitalMarketing, title: "Robot Building", category: "Robotics" },
    { src: imgSEO, title: "Creative Design", category: "Design" },
    { src: imgStudent, title: "Young Innovator", category: "Students" },
    { src: imgBasicMarketing, title: "Team Projects", category: "Collaboration" },
    { src: imgDigitalMarketing, title: "AI Exploration", category: "AI Lab" },
    { src: imgSEO, title: "3D Printing", category: "Making" },
    { src: imgStudent, title: "Success Stories", category: "Students" },
    { src: imgBasicMarketing, title: "Game Development", category: "Programming" },
  ];

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
              <span className="font-semibold">GALLERY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              See Our <span className="text-[#D9A20E]">Young Innovators</span> in Action
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Real photos from our tech zones showing kids creating, building, and innovating
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123458]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="font-bold text-lg mb-1">{img.title}</div>
                    <div className="text-sm text-[#D9A20E]">{img.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-gradient-to-br from-[#123458] to-[#1a4570] rounded-3xl p-12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Our Impact in Numbers
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D9A20E] mb-2" style={{ fontFamily: 'var(--font-display)' }}>500+</div>
                <div className="text-white/80">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D9A20E] mb-2" style={{ fontFamily: 'var(--font-display)' }}>1000+</div>
                <div className="text-white/80">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D9A20E] mb-2" style={{ fontFamily: 'var(--font-display)' }}>4</div>
                <div className="text-white/80">Tech Zones</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D9A20E] mb-2" style={{ fontFamily: 'var(--font-display)' }}>95%</div>
                <div className="text-white/80">Happy Parents</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#123458] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Want to See It <span className="text-[#D9A20E]">in Person?</span>
            </h2>
            <p className="text-[#123458]/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a free visit to tour our facilities, meet our mentors, and watch kids in action
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
