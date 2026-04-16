import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Calendar, Clock } from 'lucide-react';

export function Contact() {
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
              <span className="font-semibold">GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Start Your Child's{' '}
              <span className="text-[#D9A20E]">Tech Journey?</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Book a free visit to see our zones, meet our mentors, and watch your child's eyes light up with possibilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white border-2 border-black rounded-2xl p-6 transition-all hover:shadow-[8px_8px_0px_0px_#D9A20E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D9A20E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#123458]" />
                  </div>
                  <div>
                    <div className="text-[#123458] font-bold mb-1 text-lg">Location</div>
                    <div className="text-[#123458]/70">Bole, Addis Ababa</div>
                    <div className="text-[#123458]/60 text-sm">Ethiopia</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-2xl p-6 transition-all hover:shadow-[8px_8px_0px_0px_#D9A20E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#123458] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D9A20E]" />
                  </div>
                  <div>
                    <div className="text-[#123458] font-bold mb-1 text-lg">Phone</div>
                    <div className="text-[#123458]/70">+251 911 123 456</div>
                    <div className="text-[#123458]/60 text-sm">Mon-Sat, 9AM - 6PM</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-2xl p-6 transition-all hover:shadow-[8px_8px_0px_0px_#D9A20E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D9A20E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#123458]" />
                  </div>
                  <div>
                    <div className="text-[#123458] font-bold mb-1 text-lg">Email</div>
                    <div className="text-[#123458]/70">hello@ctijunior.com</div>
                    <div className="text-[#123458]/60 text-sm">We reply within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-2xl p-6 transition-all hover:shadow-[8px_8px_0px_0px_#D9A20E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#123458] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#D9A20E]" />
                  </div>
                  <div>
                    <div className="text-[#123458] font-bold mb-1 text-lg">Opening Hours</div>
                    <div className="text-[#123458]/70 text-sm space-y-1">
                      <div>Monday - Friday: 4PM - 8PM</div>
                      <div>Saturday - Sunday: 9AM - 6PM</div>
                      <div className="text-[#D9A20E] font-semibold mt-2">Holiday Camps: Full Day</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#123458] to-[#1a4570] rounded-3xl p-8 md:p-10 text-white h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Book Your Free Visit
                </h3>
                <p className="text-white/80 mb-8">
                  Come see our zones in action, meet our team, and let your child try a hands-on activity. No commitment required!
                </p>
                <div className="space-y-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#D9A20E] text-[#123458] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Visit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </motion.button>
                </div>

                {/* Map placeholder */}
                <div className="mt-auto bg-white/10 backdrop-blur-sm rounded-2xl h-64 flex items-center justify-center border border-white/20">
                  <div className="text-center text-white/60">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <div className="font-medium">Interactive Map</div>
                    <div className="text-sm">Bole, Addis Ababa</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Frequently Asked <span className="text-[#D9A20E]">Questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FAQItem
                question="What age groups do you accept?"
                answer="We welcome kids aged 6-16, with age-appropriate programs for different skill levels."
              />
              <FAQItem
                question="Do I need to buy a computer?"
                answer="No! All equipment, computers, and materials are provided. Kids just need to bring their curiosity."
              />
              <FAQItem
                question="What if my child has no coding experience?"
                answer="Perfect! Most of our students start with zero experience. Our programs are designed for complete beginners."
              />
              <FAQItem
                question="How many students per class?"
                answer="We maintain small class sizes (max 10 students) to ensure personalized attention for every child."
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white border-2 border-black rounded-2xl p-6 transition-all hover:shadow-[8px_8px_0px_0px_#D9A20E]">
      <h3 className="text-[#123458] font-bold mb-2">{question}</h3>
      <p className="text-[#123458]/70 text-sm">{answer}</p>
    </div>
  );
}
