import { Link } from 'react-router';
import { Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0f2742] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#D9A20E] rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-[#123458]" />
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>CTI Junior</h3>
            </div>
            <p className="text-white/70 mb-4">Where Future Begins</p>
            <p className="text-white/60 text-sm">Building young innovators since 2022</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#D9A20E]">Experience Zones</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/zones" className="hover:text-[#D9A20E] transition-colors">Coding Playground</Link></li>
              <li><Link to="/zones" className="hover:text-[#D9A20E] transition-colors">Robotics Zone</Link></li>
              <li><Link to="/zones" className="hover:text-[#D9A20E] transition-colors">Creative Tech Studio</Link></li>
              <li><Link to="/zones" className="hover:text-[#D9A20E] transition-colors">AI Lab</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#D9A20E]">Programs</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/programs" className="hover:text-[#D9A20E] transition-colors">Junior Explorers (6-9)</Link></li>
              <li><Link to="/programs" className="hover:text-[#D9A20E] transition-colors">Tech Builders (10-13)</Link></li>
              <li><Link to="/programs" className="hover:text-[#D9A20E] transition-colors">Digital Innovators (14-16)</Link></li>
              <li><Link to="/programs" className="hover:text-[#D9A20E] transition-colors">Holiday Camps</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#D9A20E]">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link to="/about" className="hover:text-[#D9A20E] transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D9A20E] transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#D9A20E] transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-[#D9A20E] transition-colors">Book a Visit</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© 2026 CTI Junior. All rights reserved.</p>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-[#D9A20E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D9A20E] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
