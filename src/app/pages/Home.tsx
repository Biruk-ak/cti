import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Calendar, Sparkles, Award, Users, TrendingUp, CheckCircle2, Star, Zap, Heart, BookOpen, Gamepad2, Palette, Brain, Quote } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Import Figma assets
import imgHeroIllustration from "figma:asset/5a46c4d69160aaa14e8740bc86fa0975873856c7.png";

export function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#123458] via-[#1a4570] to-[#123458] min-h-screen pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D9A20E]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D9A20E]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-block bg-[#D9A20E]/20 backdrop-blur-sm px-4 py-2 rounded-full text-[#D9A20E] mb-6 border border-[#D9A20E]/30">
                  <span className="font-semibold">Ages 6-16 • Addis Ababa</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Your{' '}
                  <span className="text-[#D9A20E]">Future</span>
                  <br />
                  Starts Here
                </h1>
                <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                  Where kids don't just play with technology—they <span className="text-[#D9A20E] font-semibold">create it</span>. Code games, build robots, design apps, and explore AI in our hands-on tech playground.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="bg-[#D9A20E] text-[#123458] px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 shadow-2xl hover:shadow-[#D9A20E]/50 transition-all"
                    >
                      <Calendar className="w-5 h-5" />
                      Book a Visit
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/about"
                      className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:bg-white/20 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <div>
                  <div className="text-3xl font-bold text-[#D9A20E]" style={{ fontFamily: 'var(--font-display)' }}>4+</div>
                  <div className="text-white/60 text-sm">Experience Zones</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D9A20E]" style={{ fontFamily: 'var(--font-display)' }}>500+</div>
                  <div className="text-white/60 text-sm">Happy Kids</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D9A20E]" style={{ fontFamily: 'var(--font-display)' }}>10+</div>
                  <div className="text-white/60 text-sm">Programs</div>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={imgHeroIllustration}
                  alt="Kids learning technology"
                  className="w-full h-auto drop-shadow-2xl rounded-3xl"
                />
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border-4 border-[#D9A20E]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#D9A20E] rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-[#123458]" />
                    </div>
                    <div>
                      <div className="text-[#123458] font-bold">Coding</div>
                      <div className="text-[#123458]/60 text-sm">100+ Projects</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border-4 border-[#123458]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#123458] rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-[#D9A20E]" />
                    </div>
                    <div>
                      <div className="text-[#123458] font-bold">Robotics</div>
                      <div className="text-[#123458]/60 text-sm">Hands-on</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Choose CTI Junior */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#D9A20E]/10 px-4 py-2 rounded-full text-[#D9A20E] font-semibold mb-4">
              Why Parents Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#123458] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Real Learning, Real Results
            </h2>
            <p className="text-[#123458]/70 text-lg max-w-2xl mx-auto">
              CTI Junior is more than just a tech class—it's where your child builds skills for tomorrow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Hands-On Learning', desc: 'No boring lectures. Kids learn by doing—building, coding, and creating real projects from day one.' },
              { icon: Award, title: 'Expert Instructors', desc: 'Our mentors are tech professionals who know how to make complex concepts fun and accessible for kids.' },
              { icon: Users, title: 'Small Class Sizes', desc: 'Maximum 12 students per class ensures every child gets personalized attention and guidance.' },
              { icon: TrendingUp, title: 'Track Progress', desc: 'Parents receive regular updates on projects completed, skills learned, and milestones achieved.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-[#123458]/5 to-transparent border-2 border-[#123458]/10 rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#D9A20E] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#123458] mb-3">{item.title}</h3>
                <p className="text-[#123458]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Zones Preview */}
      <section className="bg-gradient-to-b from-[#123458]/5 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#123458]/10 px-4 py-2 rounded-full text-[#123458] font-semibold mb-4">
              4 Specialized Learning Zones
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#123458] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Where Kids <span className="text-[#D9A20E]">Create Magic</span>
            </h2>
            <p className="text-[#123458]/70 text-lg max-w-2xl mx-auto">
              Each zone is designed for exploration, creativity, and hands-on building
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: 'Coding Zone',
                desc: 'Build games, websites, and apps using Scratch, Python, JavaScript, and more. From visual programming to real code.',
                color: 'from-blue-500 to-blue-600',
                projects: ['Game Development', 'Web Design', 'App Building']
              },
              {
                icon: Cpu,
                title: 'Robotics Lab',
                desc: 'Design, build, and program robots. Work with LEGO Mindstorms, Arduino, and advanced robotics kits.',
                color: 'from-green-500 to-green-600',
                projects: ['Robot Building', 'Sensor Programming', 'Competition Prep']
              },
              {
                icon: Brain,
                title: 'AI & Innovation',
                desc: 'Explore artificial intelligence, machine learning, and creative tech. Build chatbots, train AI models, and more.',
                color: 'from-purple-500 to-purple-600',
                projects: ['AI Training', 'Chatbots', 'Image Recognition']
              },
              {
                icon: Palette,
                title: 'Digital Arts',
                desc: '3D modeling, animation, graphic design, and digital storytelling. Create art that comes to life.',
                color: 'from-pink-500 to-pink-600',
                projects: ['3D Design', 'Animation', 'Digital Art']
              },
            ].map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-[#123458]/10 hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-r ${zone.color} p-6`}>
                  <zone.icon className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">{zone.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-[#123458]/70 mb-4 leading-relaxed">{zone.desc}</p>
                  <div className="space-y-2">
                    {zone.projects.map((project, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#123458]">
                        <CheckCircle2 className="w-4 h-4 text-[#D9A20E]" />
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/zones"
              className="inline-flex items-center gap-2 bg-[#123458] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a4570] transition-all"
            >
              Explore All Zones
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#D9A20E]/10 px-4 py-2 rounded-full text-[#D9A20E] font-semibold mb-4">
              Age-Based Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#123458] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Perfect Program for Every Age
            </h2>
            <p className="text-[#123458]/70 text-lg max-w-2xl mx-auto">
              From beginners to advanced, we have programs tailored to your child's age and skill level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                age: 'Ages 6-8',
                title: 'Tech Explorers',
                level: 'Beginner',
                desc: 'Introduction to coding, basic robotics, and digital creativity through play-based learning.',
                highlights: ['Visual Programming', 'LEGO Robotics', 'Digital Art', 'Game Design Basics']
              },
              {
                age: 'Ages 9-12',
                title: 'Tech Builders',
                level: 'Intermediate',
                desc: 'Build real projects, learn text-based coding, and explore advanced robotics and AI.',
                highlights: ['Python & JavaScript', 'Robot Programming', 'AI Introduction', 'Web Development']
              },
              {
                age: 'Ages 13-16',
                title: 'Tech Innovators',
                level: 'Advanced',
                desc: 'Master professional tools, create portfolio projects, and prepare for tech careers.',
                highlights: ['App Development', 'Machine Learning', 'Advanced Robotics', 'Competition Prep']
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-[#123458] to-[#1a4570] rounded-3xl p-8 text-white hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#D9A20E] text-[#123458] px-3 py-1 rounded-full text-sm font-bold">
                    {program.age}
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {program.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{program.desc}</p>
                <div className="space-y-2">
                  {program.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#D9A20E]" />
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-[#D9A20E] text-[#123458] px-8 py-4 rounded-full font-bold hover:bg-[#c99410] transition-all"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gradient-to-b from-[#123458]/5 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#123458]/10 px-4 py-2 rounded-full text-[#123458] font-semibold mb-4">
              Parent & Student Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#123458] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Hear From Our <span className="text-[#D9A20E]">Happy Families</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                role: 'Parent of 10-year-old',
                image: 'https://images.unsplash.com/photo-1697643635403-116830fe9d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwdGVjaG5vbG9neSUyMGhhcHB5fGVufDF8fHx8MTc3NjE3MjA3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                quote: 'My daughter built her first game in just 3 weeks! She\'s so excited about coding now and talks about becoming a game developer.',
                rating: 5
              },
              {
                name: 'David K.',
                role: 'Parent of 13-year-old',
                image: 'https://images.unsplash.com/photo-1603354351226-d82bd4a635a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHByb2dyYW1taW5nJTIwZWR1Y2F0aW9uJTIwa2lkc3xlbnwxfHx8fDE3NzYxNzIwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                quote: 'The instructors are amazing! They make complex concepts easy to understand. My son went from zero coding experience to building a robot.',
                rating: 5
              },
              {
                name: 'Meron A.',
                role: 'Parent of 8-year-old twins',
                image: 'https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnRzJTIwY29tcHV0ZXIlMjBzY2llbmNlfGVufDF8fHx8MTc3NjE3MjA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                quote: 'Best investment in my kids\' future! They\'re learning 21st-century skills while having fun. The small class sizes make a huge difference.',
                rating: 5
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#123458]/10 hover:shadow-xl transition-all"
              >
                <Quote className="w-10 h-10 text-[#D9A20E] mb-4" />
                <p className="text-[#123458]/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D9A20E] text-[#D9A20E]" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#123458]">{testimonial.name}</div>
                    <div className="text-sm text-[#123458]/60">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Kids Learn */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#D9A20E]/10 px-4 py-2 rounded-full text-[#D9A20E] font-semibold mb-6">
                Skills That Matter
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#123458] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Beyond Code: <span className="text-[#D9A20E]">Life Skills</span> for the Future
              </h2>
              <p className="text-[#123458]/70 text-lg mb-8 leading-relaxed">
                At CTI Junior, kids learn more than just technology. They develop critical thinking, problem-solving, teamwork, and creativity—skills that will serve them for life.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Brain, title: 'Critical Thinking', desc: 'Break down complex problems into manageable solutions' },
                  { icon: Users, title: 'Collaboration', desc: 'Work in teams, share ideas, and build together' },
                  { icon: Sparkles, title: 'Creativity', desc: 'Express themselves through code, art, and innovation' },
                  { icon: TrendingUp, title: 'Growth Mindset', desc: 'Learn from mistakes and embrace challenges' },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4 bg-[#123458]/5 rounded-2xl p-4"
                  >
                    <div className="w-12 h-12 bg-[#D9A20E] rounded-xl flex items-center justify-center flex-shrink-0">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#123458] mb-1">{skill.title}</h4>
                      <p className="text-[#123458]/70 text-sm">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758598737977-094cb3ca9ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYnVpbGRpbmclMjBwcm9qZWN0JTIwdGVhbXdvcmt8ZW58MXx8fHwxNzc2MTcyMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kids collaborating on projects"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123458]/50 to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border-4 border-[#D9A20E]"
              >
                <div className="text-4xl font-bold text-[#123458] mb-2">95%</div>
                <div className="text-[#123458]/70">Parents report improved confidence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-gradient-to-b from-[#123458]/5 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#123458]/10 px-4 py-2 rounded-full text-[#123458] font-semibold mb-4">
              See It In Action
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#123458] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Kids Creating, Building, <span className="text-[#D9A20E]">Learning</span>
            </h2>
            <p className="text-[#123458]/70 text-lg max-w-2xl mx-auto">
              Take a peek into our zones and see the amazing projects our students create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'https://images.unsplash.com/photo-1603354351226-d82bd4a635a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHByb2dyYW1taW5nJTIwZWR1Y2F0aW9uJTIwa2lkc3xlbnwxfHx8fDE3NzYxNzIwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnRzJTIwY29tcHV0ZXIlMjBzY2llbmNlfGVufDF8fHx8MTc3NjE3MjA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              'https://images.unsplash.com/photo-1740205644066-0ca1535e19ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNyZWF0aXZlJTIwdGVjaG5vbG9neSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NjE3MjA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123458]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold">View Projects</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-[#123458] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a4570] transition-all"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#123458] to-[#1a4570] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D9A20E] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D9A20E] rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Unlock Your Child's <span className="text-[#D9A20E]">Potential?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Book a free visit to CTI Junior and let your child experience our zones firsthand. See why hundreds of parents trust us with their kids' tech education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-[#D9A20E] text-[#123458] px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 shadow-2xl hover:shadow-[#D9A20E]/50 transition-all"
                >
                  <Calendar className="w-6 h-6" />
                  Book a Free Visit
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/programs"
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 border-2 border-white/20 hover:bg-white/20 transition-all"
                >
                  View Programs
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <Heart className="w-8 h-8 text-[#D9A20E] mx-auto mb-2" />
                <div className="text-white/60 text-sm">No Enrollment Fees</div>
              </div>
              <div>
                <Award className="w-8 h-8 text-[#D9A20E] mx-auto mb-2" />
                <div className="text-white/60 text-sm">Expert Instructors</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-[#D9A20E] mx-auto mb-2" />
                <div className="text-white/60 text-sm">Small Classes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/zones" className="group">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-[#123458] to-[#1a4570] rounded-3xl p-8 text-white h-full transition-all group-hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-[#D9A20E] rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-[#123458]" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Experience Zones
                </h3>
                <p className="text-white/80 mb-6">
                  Explore our 4 amazing tech zones where kids create, build, and innovate
                </p>
                <div className="flex items-center gap-2 text-[#D9A20E] font-semibold">
                  Discover Zones <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>

            <Link to="/programs" className="group">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-[#D9A20E] rounded-3xl p-8 text-[#123458] h-full transition-all group-hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-[#123458] rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-[#D9A20E]" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Our Programs
                </h3>
                <p className="text-[#123458]/80 mb-6">
                  Age-based programs designed for every skill level from beginner to advanced
                </p>
                <div className="flex items-center gap-2 text-[#123458] font-semibold">
                  View Programs <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>

            <Link to="/contact" className="group">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white border-4 border-[#123458] rounded-3xl p-8 text-[#123458] h-full transition-all group-hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-[#D9A20E] rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-[#123458]" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Book a Visit
                </h3>
                <p className="text-[#123458]/70 mb-6">
                  Schedule a free visit to see our zones and let your child try hands-on activities
                </p>
                <div className="flex items-center gap-2 text-[#D9A20E] font-semibold">
                  Schedule Now <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
